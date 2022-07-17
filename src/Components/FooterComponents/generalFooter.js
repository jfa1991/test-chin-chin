import React, {useContext} from 'react';


import Footer from './footer.js';

import {ShowGalleryEventsContext} from '../ContextProvider/showGalleryEventsContext.js'; 
import {ShowFormContext} from '../ContextProvider/showFormContext.js';


function GeneralFooter(props) {

	const showGalleryContext = useContext(ShowGalleryEventsContext);
	const showFormContext = useContext(ShowFormContext);
	


	return(
		<div>


			{!showGalleryContext.isGalleryEventsShown && !showFormContext.isFormShowed && <Footer />}
			




		</div>
	)
}

export default GeneralFooter;