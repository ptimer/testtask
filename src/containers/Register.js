import React, {useEffect} from 'react'
import { Register } from '../components'
import Utils from '../utils'

export default _ => {
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
	
	return <Register />
}