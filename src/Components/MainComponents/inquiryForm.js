import React, {useState, useContext, useRef } from 'react';

import {ShowFormContext} from '../ContextProvider/showFormContext.js'; 



import emailjs from 'emailjs-com';
import {AiFillCloseCircle} from 'react-icons/ai';


function InquiryForm (props) {

	const[isFormShowed,setIsFormShowed] = useState(false);


	const showFormContext = useContext(ShowFormContext);





	

	return(
		<div>
		  <div className = 'general-wrapper general-div-inquiry-form-private-events-Chin-Chin letter-spacing-3 general-wrapper-inquiry-form-Chin-Chin' >
				<h2 className = 'fs-500 ff-sans-Spect  fs-600 h2-inquiry-form-help'> Hello, How Can We Help? </h2>
				<i className = 'exit-icon-Inquiry-Form-Chin-Chin' > 
			    		<AiFillCloseCircle onClick = {showFormContext.handleShowForm} size = {30} /> 
				</i>
				<form className = 'letter-spacing-2 inquiry-form-private-events-chin-chin' ref= {showFormContext.form} autocomplete = 'off' onSubmit={showFormContext.sendEmail}>	
			    	
			    	<div className = 'fs-400 div-for-label-input-text-area-private-events-Chin-Chin '>
			    		<label className = 'label-inquiry-form-Chin-Chin label-name-inquiry-form-Chin-Chin'  for = 'name'>Name</label>
			        	<input className= 'fs-300 input-text-inquiry-form-Chin-Chin' type = 'text'  id ='name' name = 'from_name' placeholder ='Enter Your First and Last Name :)'required/>
			    	</div>

			    	<div className = 'fs-400 div-for-label-input-text-area-private-events-Chin-Chin '>
			    		<label className = 'label-inquiry-form-Chin-Chin label-email-inquiry-form-Chin-Chin' for='email'>Email adress </label>
			        	<input className= 'fs-300 input-email-inquiry-form-Chin-Chin '  type = 'email' id ='email' name = 'reply_to' required/>
			    	</div>

			    	<div className = 'fs-400 div-for-label-input-text-area-private-events-Chin-Chin '>
			    		<label className = 'label-inquiry-form-Chin-Chin label-subject-inquiry-form-Chin-Chin ' for ='subject'>Subject</label>
			       		<input className= 'fs-300 input-text-inquiry-form-Chin-Chin' type = 'text'  id ='subject' name = 'subject' required/>
			    	</div>

			    	<div className = 'fs-400 div-for-label-input-text-area-private-events-Chin-Chin '>
			    		<label className = 'label-inquiry-form-Chin-Chin label-textarea-inquiry-form-Chin-Chin ' for='email-body'>Message</label>
			        	<textarea className= 'fs-300 textarea-message-inquiry-form-Chin-Chin' id = 'email-body' name ='message' required> </textarea>
			    	</div>
			    	
			    	<div>
			        	<button className = 'fs-400 letter-spacing-2  ff-sans-Spect-SC button-submit-inquiry-form-Chin-Chin'  input-type ='submit'>Submit </button>
			    	</div>

				</form>
			</div>
		</div>
	)
}

export default InquiryForm;