import React from 'react';

import {Button} from '../../../components/index'

const RegisterForm = (props) => (
	<div className="RegisterForm">
		<h2>Register to get a work</h2>
		<p>Attention! After successful registration and alert, update
		the list of users in the block from the top</p>

          <form>
  			  <div className="RegisterForm__inputBlock">
	  			  <label htmlFor="name">Name</label>
			      <input
			        id="name"
			        name="name"
			        type="text"
			        placeholder="Your name"
			      />
  			  </div>
		      

			  <div className="RegisterForm__inputBlock">
			      <label htmlFor="email">Email</label>
			      <input
			        id="email"
			        name="email"
			        type="email"
			        placeholder="Your email"
			      />
			  </div>

			  
			  <div className="RegisterForm__inputBlock">
			      <label htmlFor="number">Phone number</label>
			      <input
			        id="number"
			        name="number"
			        type="text"
			        placeholder="+380 XX XXX XX XX"
			      />
			      <span>Enter phone number in open format</span>
			  </div>

		      <p>Select your position</p>
			  <input type="radio" id="pos1"
			   name="pos1" value="pos1" />
			  <label for="pos1">Frontend developer</label>

			  <input type="radio" id="pos2"
			   name="pos2" value="pos2" />
			  <label for="pos2">Backend developer</label>

			  <input type="radio" id="pos3"
			   name="pos3" value="pos3" />
			  <label for="pos3">Designer developer</label>

			  <input type="radio" id="pos4"
			   name="pos4" value="pos4" />
			  <label for="pos4">QA developer</label>
				
			  <label for="image_block">Photo</label>
			  <div id="image_block">
			  	<label for="image_uploads">Browse upload</label>
    		  	<input type="file" id="image_uploads" name="image_uploads" accept=".jpg, .jpeg, .png" multiple />
			  </div>
			  

		      <Button text="Sign up now" />
		   </form>
	</div>
);

export default RegisterForm;
