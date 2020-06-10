import React, {useState, useEffect} from 'react';

import {SET_POSTED} from "../../../actions";
import {connect} from 'react-redux';
import {Button} from '../../../components'
import './RegisterForm.scss'

const RegisterForm = ({formik, positions, SET_POSTED}) => {

	const {
      values,
      touched,
      errors,
      handleChange,
      handleBlur,
      handleSubmit,
      setFieldValue,
      dirty,
      status
    } = formik;

    useEffect(() => {
		if(status && status.success == true){
			SET_POSTED(true);
		}
    })

	return(
		<div className="RegisterForm">
			<h2>Register to get a work</h2>
			<p>Attention! After successful registration and alert, update
			the list of users in the block from the top</p>

	          <form onSubmit={handleSubmit}>
	  			  <div className="RegisterForm__inputBlock">
		  			  <label htmlFor="name">Name</label>
				      <input
				        id="name"
				        name="name"
				        type="text"
				        placeholder="Your name"
				        onChange={handleChange}
		                onBlur={handleBlur}
				      />
				      {errors.name ? errors.name : ''}
	  			  </div>
			      

				  <div className="RegisterForm__inputBlock">
				      <label htmlFor="email">Email</label>
				      <input
				        id="email"
				        type="email"
				        placeholder="Your email"
				        name="email"
		                onChange={handleChange}
		                onBlur={handleBlur}
				      />
				      {errors.email ? errors.email : ''}
				  </div>

				  
				  <div className="RegisterForm__inputBlock">
				      <label htmlFor="number">Phone number</label>
				      <input
				        id="number"
				        name="phone"
				        type="text"
				        placeholder="+380 XX XXX XX XX"
				        onChange={handleChange}
		                onBlur={handleBlur}
				      />
				      <span>Enter phone number in open format</span>
				      {errors.phone ? errors.phone : ''}
				  </div>
				
				  <label for="radio_block">Select your position</label>

				  <div className="radio_block">
						{positions.map(p => {
						  	return (
								<label class="control radio" key={p.id}>
								  <input id={`radio-${p.id}`} name="position_id" value={p.id}
									onChange={handleChange}
		                			onBlur={handleBlur}
								   type="radio"/>
								  <span class="control__indicator"></span>
								  {p.name}
							   </label>
						  	);
						})}
				  </div>
					
				  <label for="image_block">Photo</label>
				  <div id="image_block">
				  	<label class="file">
					  <input type="file" 
					  name="photo"
					   id="file"
					   onChange={(event) => {
						  setFieldValue("file", event.currentTarget.files[0]);
					   }}
		               onBlur={handleBlur}/>
					  <span class="file__custom"></span>
					</label>
				  </div>
				  

			      <Button text="Sign up now" onClick={e => {
			      	handleSubmit(e)
			      }
			      }/>
			   </form>
		</div>
)};

export default connect(
	null,
	{ SET_POSTED }
)(RegisterForm);