import React from 'react';

import {Button} from '../'
import './Register.scss'

export default (props) => {
	const {
	    values,
	    touched,
	    errors,
	    handleChange,
	    handleBlur,
	    handleSubmit,
	    isValid,
	    isSubmitting,
	    setFieldValue
	} = props

	return(
		<div className="Register">
			<h2>Register to get a work</h2>
			<p>Attention! After successful registration and alert, update
			the list of users in the block from the top</p>

	          <form onSubmit={handleSubmit}>
	  			  <div className="Register__inputBlock">
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
			      

				  <div className="Register__inputBlock">
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

				  
				  <div className="Register__inputBlock">
				      <label htmlFor="number">Phone number</label>
				      <input
				        id="number"
				        name="phone"
				        type="text"
				        placeholder="+380 XX XXX XX XX"
				        onChange={handleChange}
		                onBlur={handleBlur}
				      />
				      {errors.phone ? errors.phone : ''}
				      <span>Enter phone number in open format</span>
				  </div>
				
				  <label htmlFor="radio_block">Select your position</label>

				  <div className="radio_block">
						{/*positions.map(p => {
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
						})*/}
						<label className="control radio">
								  <input id='radio-1' name="position_id" value='1'
									onChange={handleChange}
		                			onBlur={handleBlur}
								   type="radio"/>
								  <span className="control__indicator">1</span>
						</label>
						<label className="control radio">
								  <input id='radio-2' name="position_id" value='2'
									onChange={handleChange}
		                			onBlur={handleBlur}
								   type="radio"/>
								  <span className="control__indicator">2</span>
						</label>
				  </div>
					
				  <label htmlFor="image_block">Photo</label>
				  <div id="image_block">
				  	<label className="file">
					  <input type="file" 
					  name="photo"
					   id="file" 
					   onChange={(event) => {
						  setFieldValue("file", event.currentTarget.files[0]);
					   }}
		               onBlur={handleBlur}/>/>
					  <span className="file__custom"></span>
					</label>
				  </div>
			      <Button>Sign up now</Button>
			   </form>


			   <div className='modalWindow'>
					<div className="modalWindow__header">
						<h3>Congratulations</h3>
						<div className="close">x</div>
					</div>
					<div className="modalWindow__content">
						<span>You have successfully passed the registration</span>
					</div>
					
					<div className="modalWindow__footer">
						<Button text="Great" />
					</div>
					
			   </div>
		</div>
)};