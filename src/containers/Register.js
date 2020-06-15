import React, {useEffect} from 'react'
import { withFormik } from 'formik'
import { Register } from '../components'
import Utils from '../utils'

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
  mapPropsToValues: () => ({ name: '' }),

  // Custom sync validation
  validate: values => {
    const errors = {};

    

    return errors
  },

  handleSubmit: (values, { setSubmitting }) => {
    store
      .dispatch(usersActions.fetchUserRegister(values))
      .then(() => {
        setSubmitting(false)
      })
      .catch(err => err)
  },

  displayName: 'Register',
})(Register);