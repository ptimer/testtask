import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import { Users as UsersList } from '../components'
import { usersActions, registeredActions } from '../redux/actions'
import store from '../redux/store'
import {sortUsersByRegistration, variables} from '../utils'
import withSizes from 'react-sizes'
import { compose } from 'recompose'

// Для отображения 3-х пользователей в мобильной версии
const enhancer = compose(
  withSizes(({ width }) => ({ isMobile: width <= variables.mobileWidth }))
)

const Users = enhancer(({users, registered, isMobile}) => {
	const [nextUrl, setNextUrl] = useState(null)
	const link = 'https://frontend-test-assignment-api.abz.agency/api/v1/'

	/* !!! На мобильной версии будет выдавать ошибку при нажатии на show more,
	   когда дойдет до последнего page т.к api генерирует в next_url еще одну страницу
	   вместо null !!!
	   При показе 6 юзеров, api генерирует null в next_url на последней странице 
	*/
	const getUsers = link => {
		store
		.dispatch(usersActions.getUsers(link))
		.then(data => {
			store.dispatch(usersActions.addUsers([...sortUsersByRegistration(data.users)]))
			setNextUrl(data.links.next_url)
		})
	}
	/* Отображаем пользователей при первой загрузке страницы */
	useEffect(_ => getUsers(`${link}users?page=1&count=${isMobile ? 3 : 6}`),[])
	/* Когда юзер прошел регистрацию, то меняем состояние следующей ссылки на дефолтное */
	useEffect(_ => {
		if(registered){
			setNextUrl(`${link}users?page=2&count=${isMobile ? 3 : 6}`)
			store.dispatch(registeredActions.setRegistered(false))
		}
	})
	/* При клике show more делаем запрос, сортируем юзеров по дате регистрации
	и устанавливаем следующую ссылку на полученную с get запроса */
	return <UsersList users={users} showMore={_ => getUsers(nextUrl)} showButton={nextUrl != null} />
})

export default connect(
	({ users, registered }) => ({users, registered})
)(Users)