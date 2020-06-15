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
  mapPropsToValues: () => ({ name: '', email: '', phone: '', position_id: '', photo: ''}),

  // Custom sync validation
  validate: values => {
    const errors = {};

    if(!values.name){
      errors.name = "Нужно ввести имя"
    }else if(!values.name){
    errors.name = "Имя должно быть не меньше 2-х символов и не больше 60"
    }
    
    if (!values.email) {
      errors.email = 'Нужно ввести email';
    } else if (
      !/^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i.test(values.email)
    ) {
      errors.email = 'Неправильный email адрес';
    }


    if(!values.phone){
      errors.phone = "Нужно ввести номер телефона";
    } else if (!/^[\+]{0,1}380([0-9]{9})$/i.test(values.phone)){
    errors.phone ="Неправильный номер"
    }

    return errors;
  },

  handleSubmit: (values, { setSubmitting }) => {
    var dataToPost = JSON.parse(JSON.stringify(values, null, 2));
    var formData = new FormData();
    formData.append('position_id', dataToPost.position_id);
    formData.append('name', dataToPost.name);
    formData.append('email', dataToPost.email);
    formData.append('phone', dataToPost.phone);
    formData.append('photo', values.file);

    store
      .dispatch(usersActions.fetchUserRegister(formData))
      .then(() => {
        setSubmitting(false)
      })
      .catch(err => console.log(err))
  },

  displayName: 'Register',
})(Register);