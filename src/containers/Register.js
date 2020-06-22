import React, {useEffect, useState} from 'react'
import { withFormik } from 'formik'
import { Register as RegisterComponent } from '../components'
import {validateForm, createFormData} from '../utils'
import { usersActions, positionsActions } from '../redux/actions'
import store from '../redux/store'

const Register = props => {
	
    const [positions, setPositions] = useState([])

    /* Получаем список вакансий */
	useEffect(_ => {
	    store
	      .dispatch(positionsActions.getPositions())
	      .then(data => setPositions(data.positions))
	}, [])
	
	return <RegisterComponent {...props} positions={ positions } />
}

export default withFormik({
  mapPropsToValues: () => ({ name: '', email: '', phone: '', position_id: '', photo: ''}),
  validate: values => {
    let errors = {}
    /*Правила для валидации вынесены отдельно в utils*/
    validateForm({ values, errors })

    return errors;
  },

  handleSubmit: (values, { setSubmitting }) => {
    /* Получаем данные с формы и создаем нужный формат*/
    const formData = createFormData(values)
    /* Отправляем на сервер через action redux */
    store
      .dispatch(usersActions.fetchUserRegister(formData))
      .then(_ => setSubmitting(false))
      .catch(err => console.log(err))
  },
  displayName: 'Register',
})(Register);