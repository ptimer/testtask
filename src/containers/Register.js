import React, {useEffect, useState} from 'react'
import { withFormik } from 'formik'
import { Register as RegisterComponent } from '../components'
import {validateForm} from '../utils'
import { usersActions, positionsActions } from '../redux/actions'
import store from '../redux/store'

const Register = props => {
	
  const [positions, setPositions] = useState([])

	useEffect(_ => {
    store
      .dispatch(positionsActions.getPositions())
      .then(data => setPositions(data.positions))
	}, [])
	
	return <RegisterComponent {...props} positions={ positions }/>
}

export default withFormik({
  mapPropsToValues: () => ({ name: '', email: '', phone: '', position_id: '', photo: ''}),

  // Custom sync validation
  validate: values => {
    let errors = {}

    validateForm({ values, errors })

    return errors;
  },

  handleSubmit: (values, { setSubmitting }) => {
    var dataToPost = JSON.parse(JSON.stringify(values, null, 2))
    var formData = new FormData()
    formData.append('position_id', dataToPost.position_id)
    formData.append('name', dataToPost.name)
    formData.append('email', dataToPost.email)
    formData.append('phone', dataToPost.phone)
    formData.append('photo', values.file)

    store
      .dispatch(usersActions.fetchUserRegister(formData))
      .then(() => {
        setSubmitting(false)
      })
      .catch(err => console.log(err))
  },

  displayName: 'Register',
})(Register);