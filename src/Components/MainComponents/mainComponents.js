import React, {useContext} from 'react';


import {ShowGalleryEventsContext} from '../ContextProvider/showGalleryEventsContext.js'; 
import {ShowFormContext} from '../ContextProvider/showFormContext.js'; 


import MainLandingPage from './landingPage.js'; 
import OpeningHours from './openingHours.js';
import PrivateEvents from './privateEvents.js';
import StaffChinChin from './staffChinChin.js';


import Test from './CustomHooks/Test';

import PrivateEventsGallery from './privateEventsGallery.js';
import PrivateEventsGalleryT from './privateEventsGalleryT.js';

import InquiryForm from './inquiryForm.js';

function MainComponents(props) {

	const showGalleryContext = useContext(ShowGalleryEventsContext); 
	const showFormContext = useContext(ShowFormContext);

	return(
		<div>
			<main>

			
				{!showGalleryContext.isGalleryEventsShown && !showFormContext.isFormShowed && <MainLandingPage />}
				{!showGalleryContext.isGalleryEventsShown && !showFormContext.isFormShowed && <OpeningHours />}
				{!showGalleryContext.isGalleryEventsShown && !showFormContext.isFormShowed && <PrivateEvents />}
				{!showGalleryContext.isGalleryEventsShown && !showFormContext.isFormShowed&& <StaffChinChin />}	
		
			
				{showGalleryContext.isGalleryEventsShown && <PrivateEventsGalleryT /> } 

				{showFormContext.isFormShowed && <InquiryForm />}


			


			</main>

		</div>

	)
}

export default MainComponents;