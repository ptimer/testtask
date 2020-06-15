import React, {useEffect} from 'react'
import { withFormik } from 'formik'
import { Register } from '../components'
import {validateForm} from '../utils'
import { usersActions } from '../redux/actions'
import store from '../redux/store'

/*
const Register = _ => {
	var formData = new FormData();
	// file from input type='file'
	var fileField = document.querySelector('input[type="file"]');
	formData.append('position_id', 2);
	formData.append('name', 'Jhon');
	formData.append('email', 'Jhon@gmail.com');
	formData.append('phone', '+380955388485');
	formData.append('photo', 'fileField.files[0]');


	useEffect(_ => {
		//Utils.postUsers(formData);
	})


	
	return <RegisterComponent/>
}
*/
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