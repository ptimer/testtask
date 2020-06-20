import React from 'react';
import classNames from 'classnames'
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
	    setFieldValue,
	    positions,
	    className
	} = props

	return(
		<div className={classNames('register', className)} id='sign-up'>
			<h2>Register to get a work</h2>
			<p>Attention! After successful registration and alert, update
			the list of users in the block from the top</p>

	          <form onSubmit={handleSubmit}>
	  			  <div className='register__input-block'>
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
			      

				  <div className='register__input-block'>
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

				  
				  <div className='register__input-block'>
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
						{positions.map(position => {
						  	return (
								<label className="control radio" key={position.id}>
								  <input id={`radio-${position.id}`} name="position_id" value={position.id}
									onChange={handleChange}
		                			onBlur={handleBlur}
								   type="radio"/>
								  <span className="control__indicator"></span>
								  {position.name}
							   </label>
						  	);
						})}
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
		               onBlur={handleBlur}/>
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