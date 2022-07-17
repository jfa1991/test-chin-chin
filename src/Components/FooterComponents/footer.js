import React, {useContext} from 'react';

import {ShowFormContext} from '../ContextProvider/showFormContext.js';



import Background from './orange_cocktail/footer_background_negroni.jpg';
import {AiFillPhone} from 'react-icons/ai';
import {AiFillMail} from 'react-icons/ai';
import {AiFillInstagram} from 'react-icons/ai';
import {AiFillFacebook} from 'react-icons/ai';
import {AiFillTwitterSquare} from 'react-icons/ai';

import Logo from './orange_cocktail/chin_chin_logo.png'; 


function Footer(props){

	const showFormContext = useContext(ShowFormContext);


	
	return(
		<div>

			<footer className = 'footer-background-navbar-closed-Chin-Chin' id = 'section-contact-us'>

				<div className = 'div-brand-logo-footer-navbar-closed-Chin-Chin'>
					<span className = 'Chin-Chin-brand-footer ff-sans-Spect'> Chin Chin</span>
					<img className = 'logo-footer-navbar-closed-Chin-Chin' src = {Logo} alt = 'logo'/> 

		    	</div>





				<div className = 'container-contact-info-social-media-navbar-closed-footer-Chin-Chin'>
		    		<div className = 'container-adress-phone-email-navbar-closed-footer-Chin-Chin'>
		    			
		    			<p className = 'adress-location-navbar-closed-footer-Chin-Chin' >Calle San Luis 105, 41003 Sevilla</p>
		    	
		    			<div className = 'div-icon-phone-and-phone-number-navbar-closed-footer-Chin-Chin'>
		    				<i className = 'icon-phone-number-navbar-closed-Chin-Chin'><AiFillPhone size = {20}/></i> 
		    				<p className = 'phone-number-footer-Chin-Chin'>078 867 53 16 </p>
		    			</div>
		    	
		    			<div className= 'div-icon-mail-and-main-contact-navbar-closed-footer-Chin-Chin'>
		    				<i className= 'icon-mail-contact-navbar-closed-Chin-Chin'><AiFillMail size= {20}/></i>
		    				<a onClick = {showFormContext.handleShowForm} className='fs-300 footer-email-contact-navbar-closed-Chin-Chin'>
		    				info@Chin-Chin.com
		    				</a>
		    			</div>
		    		
		    		</div>
		    		
		    			
		    			<div className = 'container-social-media-navbar-closed-Chin-Chin'>
		      				<i><AiFillFacebook className = 'icon-social-media-navbar-closed-Chin-Chin facebook-navbar-closed-Chin-Chin' size = {24}/></i>
		      				<i><AiFillInstagram  className = 'icon-social-media-navbar-closed-Chin-Chin instagram-navbar-closed-Chin-Chin' size = {24}/></i>
		      				<i><AiFillTwitterSquare className = 'icon-social-media-navbar-closed-Chin-Chin twitter-navbar-closed-Chin-Chin' size = {24} /></i>
		    			</div>

		    	</div>

		    	<div className = 'div-copyright-GreenLemon-navbar-closed-footer-Chin-Chin'>
		    		<p className = 'footer-copyright-navbar-closed-Chin-Chin,'>© 2021 Chin-Chin Inc. All rights reserved.</p>
		    		<p className = ' GreenLemon-navbar-closed-Chin-Chin' >Crafted by GreenLemon</p>
		    	</div>


		
			 </footer>



		</div>
	)

}

export default Footer;