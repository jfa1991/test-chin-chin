import React, {useState, useEffect, useRef} from 'react';

import { send } from 'emailjs-com';
import emailjs from 'emailjs-com';


const ShowFormContext = React.createContext()

function ShowFormContextProvider(props) {
	
	const[isFormShowed,setIsFormShowed] = useState(false);

	const form = useRef();



	function handleShowForm() { {/* function that makes open/closed Form */}

		setIsFormShowed(!isFormShowed)
	};



  function sendEmail(e) { {/* function used to send email */}
  	    e.preventDefault();
		emailjs.sendForm('service_i29ix6l', 'template_vxzrk2d', form.current, 'r2BM97-cWQMyCrVeW')
      		.then((result) => {
          		console.log(result.text);
     	}, (error) => {
          	console.log(error.text);
      	});

      	e.target.reset();


  }



	return(
		<ShowFormContext.Provider value = {{
			isFormShowed:isFormShowed,
			handleShowForm:handleShowForm,
			form:form,
			sendEmail:sendEmail, 

			
		}} >
			{props.children}
		</ShowFormContext.Provider>
	);
}



export {ShowFormContextProvider, ShowFormContext};