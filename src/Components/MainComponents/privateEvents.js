import React, {useContext} from 'react';



import {ShowGalleryEventsContext} from '../ContextProvider/showGalleryEventsContext.js';
import {ShowFormContext} from '../ContextProvider/showFormContext.js';

import UseGalleryPremises from './CustomHooks/useGalleryPremises.js';

import {GrPrevious} from 'react-icons/gr';
import {GrNext} from 'react-icons/gr';


function PrivateEvents(props) {

	const showGalleryContext = useContext(ShowGalleryEventsContext); 
	
	const showFormContext = useContext(ShowFormContext);

	const [current,gallery, showGallery, size,onClickNextPicture, onClickPreviousPicture] = UseGalleryPremises();

	return(
		
		<div className = 'div-private-events-navbar-closed-Chin-Chin' id ='section-private-events'>
		 	 
		 	 <div className = 'second-level-wrapper-private-events-navbar-closed'>
		 	 	<h3 className = 'fs-600 ff-sans-Spect-SC private-events-title-navbar-closed-Chin-Chin'>Private Events</h3>
		  		<p className = 'fs-400 letter-spacing-2 p-private-events-navbar-closed-Chin-Chin'>Chin Chin also host large and private parties of all kinds: from weddings and engagement celebrations, to luncheons and film premieres, we have options for guest lists of 15 to 120 people.</p>
		 	 	<button onClick = {showFormContext.handleShowForm} className = 'fs-400 ff-sans-Spect-SC link-private-events-inquire-navbar-closed-Chin-Chin'>Inquire Now </button>
		 	 	<p className = 'fs-400 ff-sans-Spect-SC letter-spacing-2 private-events-premises-navbar-closed-Chin-Chin' onClick ={showGalleryContext.handleGallery} > Check Out At Our Premises ! </p>
		 	 </div>
  
		</div>

	)
}

export default PrivateEvents; 


