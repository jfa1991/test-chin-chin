import React, {useContext} from 'react';


import {ShowGalleryEventsContext} from '../ContextProvider/showGalleryEventsContext.js';

import UseGalleryPremises from './CustomHooks/useGalleryPremises.js';

import Test from './CustomHooks/Test.js';

import {AiFillCloseCircle} from 'react-icons/ai';

import {GrPrevious} from 'react-icons/gr';
import {GrNext} from 'react-icons/gr';

import {BsFillCircleFill} from 'react-icons/bs';


function PrivateEventsGallery(props) {

	const showGalleryContext = useContext(ShowGalleryEventsContext); 

	const [index,gallery, showGallery, size, onClickNextPicture, onClickPreviousPicture, onClickPicture1,onClickPicture2,onClickPicture3,onClickPicture4,onClickPicture5,onClickPicture6] = UseGalleryPremises();



	return(

		<div className = 'div-gallery-img-private-events-2-Chin-Chin'>

			<i className = 'exit-icon-gallery-private-events-2-Chin-Chin'> 
			    <AiFillCloseCircle onClick = {showGalleryContext.handleGallery} size = {35} /> 
			</i>


			<section className = 'container-for-gallery-img-private-events-Chin-Chin'>

				<i className = 'icon-gallery-img-private-events-Chin-Chin left-icon'>
					<GrPrevious  className = 'icon-previous-img-Chin-Chin' size = {30}  onClick = {onClickPreviousPicture} />
				</i>
		 		
		 	
		 		<img id = {gallery[index]} className = 'img-gallery-private-events-2-Chin-Chin' src = {gallery[index]} />

		 	


		 		
		 		
		 		<i className = 'icon-gallery-img-private-events-Chin-Chin right-icon'>
		 			<GrNext className = 'icon-next-img-Chin-Chin' size = {35}  onClick = {onClickNextPicture} /> 
		 		</i>


				 	{/* <div className = 'container-icons-prev-next-img-private-events-Chin-Chin'>
		    				<GrPrevious  className = 'icon-previous-img-Chin-Chin' size = {50}  onClick = {onClickPreviousPicture} />
		    				<GrNext className = 'icon-next-img-Chin-Chin' size = {50}  onClick = {onClickNextPicture} /> 
		    			</div>  */}
		    


		    

		    	<div className = 'container-circle-change-picture-private-events-Chin-Chin'>

		    	    <input onClick = {onClickPicture1} id='radioPic1' name = 'radioPic1' type="radio" />
		    	    <label className = 'label-radio-button-change-picture-private-events-Chin-Chin' for="radioPic1"></label>
		    	    
		    	    <input onClick = {onClickPicture2} id= 'radioPic2' name = 'radioPic2'type="radio" />
		    	    <label className = 'label-radio-button-change-picture-private-events-Chin-Chin'for="radioPic2"></label>
		    	    
		    	    <input onClick = {onClickPicture3} id= 'radioPic3' name = 'radioPic3'type="radio" />
		    	    <label className = 'label-radio-button-change-picture-private-events-Chin-Chin'for="radioPic3"></label>

		    	    <input onClick = {onClickPicture4} id= 'radioPic4' name = 'radioPic4'type="radio" />
		    	    <label className = 'label-radio-button-change-picture-private-events-Chin-Chin'for="radioPic4"></label>

		    	    <input onClick = {onClickPicture5} id= 'radioPic5' name = 'radioPic5'type="radio" />
		    	    <label className = 'label-radio-button-change-picture-private-events-Chin-Chin'for="radioPic5"></label>

		    	    <input onClick = {onClickPicture6} id= 'radioPic6' name = 'radioPic6' type="radio" />
		    	    <label className = 'label-radio-button-change-picture-private-events-Chin-Chin'for="radioPic6"></label>

				</div>
		
			</section>



			
		</div>


	)

}

export default PrivateEventsGallery;




