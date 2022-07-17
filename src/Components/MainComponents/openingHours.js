import React, {useContext} from 'react';

import {ShowFormContext} from '../ContextProvider/showFormContext.js';
import UseShowGoogleMap from './CustomHooks/useShowGoogleMap.js';




function OpeningHours(props) {


	const showFormContext = useContext(ShowFormContext);
	const [showInMapClicked] = UseShowGoogleMap() ;
	
	return(

		<div className = 'letter-spacing-3 general-wrapper div-opening-hours-Navbar-closed-Chin-Chin' id="section-info">
				
				<p className = 'fs-500 ff-sans-Spect-SC  located-in-el-barrio-navbar-closed-Chin-Chin'>Located in El Barrio de Alameda, Enjoy a Very Unique Experience  </p>
				<p className = 'fs-400 adress-location-navbar-closed-Chin-Chin' >Calle San Luis 105, 41003 Sevilla</p>
				
				<a onClick = {showInMapClicked} className = 'fs-400  google-link-location-navbar-closed-Chin-Chin'>Get Directions</a>
				<p className = 'fs-400 p-large-parties-events-navbar-closed-Chin-Chin'>large parties & private events:</p>
				<a onClick = {showFormContext.handleShowForm} className = 'fs-300 event-email-Chin-Chin-navbar-closed-Chin-Chin'>events@Chin-Chin.com</a>

				<div className = 'div-title-and-ul-opening-hours-info-navbar-closed-Chin-Chin'>
					<p className = ' fs-400 opening-hours-title-navbar-closed-Chin-Chin'>CURRENT OPENING HOURS</p>
				
					<ul className = 'fs-300 ul-opening-hours-info-navbar-closed-Chin-Chin'>
					
						<li className = 'li-opening-hours-info-navbar-closed-Chin-Chin' >MON - WED: 12pm - 2am</li>
						<li className = 'li-opening-hours-info-navbar-closed-Chin-Chin'>THUR: 12pm - 4am</li>
						<li className = 'li-opening-hours-info-navbar-closed-Chin-Chin'>FRIDAY: 12pm - 4am</li>
						<li className = 'li-opening-hours-info-navbar-closed-Chin-Chin'>SAT: 11am- 4am</li>
						<li className = 'li-opening-hours-info-navbar-closed-Chin-Chin'>SUN: 11am - 2am</li>

					</ul>

				</div>
		

		</div>




	)
}

export default OpeningHours;

 

