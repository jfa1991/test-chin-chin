import React, {useContext} from 'react';

import {ShowGalleryEventsContext} from '../ContextProvider/showGalleryEventsContext.js';

import UseGalleryPremises from './CustomHooks/useGalleryPremises.js';

import {SliderDataGroup1} from './dataComponents/sliderDataGroup1.js';
import {SliderDataGroup2} from './dataComponents/sliderDataGroup2.js';

import {AiFillCloseCircle} from 'react-icons/ai';

import {GrPrevious} from 'react-icons/gr';
import {GrNext} from 'react-icons/gr';

import {BsFillCircleFill} from 'react-icons/bs';




function PrivateEventsGalleryT(props) {

	const showGalleryContext = useContext(ShowGalleryEventsContext); 

	const [current,gallery, showGallery, size, onClickNextPicture, onClickPreviousPicture, onClickPicture1,onClickPicture2,onClickPicture3,onClickPicture4,onClickPicture5,onClickPicture6] = UseGalleryPremises();

	return(

		<div className = 'div-gallery-img-private-events-2-Chin-Chin div-gallery-img-private-events-2-small-screen-Chin-Chin'>

			<i className = 'exit-icon-gallery-private-events-2-Chin-Chin'> 
			    <AiFillCloseCircle onClick = {showGalleryContext.handleGallery} size = {30} /> 
			</i>


			<section className = 'container-for-gallery-img-private-events-Chin-Chin'>



				<h2 className = 'fs-400 ff-sans-Spect-SC h2-large-parties-events-gallery-Chin-Chin'> For Large Parties & Private Events </h2>
				<a className = 'fs-400 button-private-events-gallery-inquire-Chin-Chin' href = '#'>Inquire Now </a>

				



		 	   	<div className = 'container-img-private-events-gallery-large-screen-Chin-Chin'>
		 	   		{SliderDataGroup1.map((picture, ind) => <div className = 'box-img-private-events-gallery-large-screen-Chin-Chin {`box-${ind}`}' key = {ind}>
		 	   											<img className = 'img-private-events-gallery-large-screen-Chin-Chin' src ={picture.image} />
		 	   											</div>
		 	   		)}
		 	   	</div>


		 	   	<div className = 'container-img-private-events-gallery-large-screen-Chin-Chin container-row-second-img-private-events-gallery-large-screen-Chin-Chin'>
		 	   		{SliderDataGroup2.map((picture, ind) => <div className = 'box-img-private-events-gallery-large-screen-Chin-Chin {`box-${ind}`}' key = {ind}>
		 	   											<img className = 'img-private-events-gallery-large-screen-Chin-Chin' src ={picture.image} />
		 	   											</div>
		 	   		)}
		 	   	</div>

		 	   


		 		<div className = 'div-gallery-image-private-events-small-screen-Chin'> 
		 			<div className ='div-for-each-img-private-events-gallery-small-screen-Chin-Chin div-for-each-img-1-private-events-gallery-small-screen-Chin-Chin'>
		 	   			<img className = 'img-1-private-events-gallery-small-screen-Chin-Chin' src = {gallery[0]} />
		 	   		</div>

		 	   		<div className = 'div-for-each-img-private-events-gallery-small-screen-Chin-Chin div-for-each-img-2-private-events-gallery-small-screen-Chin-Chin'>
		 	   			<img className = 'img-2-private-events-gallery-small-screen-Chin-Chin' src = {gallery[1]} />
		 	   		</div>
		 	   		<div className = 'div-for-each-img-private-events-gallery-small-screen-Chin-Chin div-for-each-img-3-private-events-gallery-small-screen-Chin-Chin'>
		 	   			<img className = 'img-3-private-events-gallery-small-screen-Chin-Chin' src = {gallery[2]} />
		 	   		</div>

		 	   		<div className = 'div-for-each-img-private-events-gallery-small-screen-Chin-Chin div-for-each-img-4-private-events-gallery-small-screen-Chin-Chin'>
		 	   			<img className = 'img-4-private-events-gallery-small-screen-Chin-Chin' src = {gallery[3]} />
		 	   		</div> 

		 	   		<div className = 'div-for-each-img-private-events-gallery-small-screen-Chin-Chin div-for-each-img-5-private-events-gallery-small-screen-Chin-Chin'>
		 	   		   <img className = 'img-5-private-events-gallery-small-screen-Chin-Chin' src = {gallery[4]} />
		 	   		</div>

		 	   		<div className = 'div-for-each-img-private-events-gallery-small-screen-Chin-Chin div-for-each-img-6-private-events-gallery-small-screen-Chin-Chin'>
		 	   		   <img className = 'img-6-private-events-gallery-small-screen-Chin-Chin' src = {gallery[5]} />
		 	   		</div>
	
					<div className = 'div-for-each-img-private-events-gallery-small-screen-Chin-Chin div-for-each-img-7-private-events-gallery-small-screen-Chin-Chin'>
		 	   			<img className = 'img-7-private-events-gallery-small-screen-Chin-Chin' src = {gallery[6]} />
		 	   		</div>	
		 	   					 	   		
		 	   		<div className = 'div-for-each-img-private-events-gallery-small-screen-Chin-Chin div-for-each-img-8-private-events-gallery-small-screen-Chin-Chin'>
		 	   			<img className = 'img-8-private-events-gallery-small-screen-Chin-Chin' src = {gallery[7]} /> 
		 	   		</div>
		 	   		
		 	 		<div className = 'div-for-each-img-private-events-gallery-small-screen-Chin-Chin div-for-each-img-9-private-events-gallery-small-screen-Chin-Chin'>
			 	   		<img className = 'img-9-private-events-gallery-small-screen-Chin-Chin' src = {gallery[8]} />
			 	   	</div> 

			 	   	<div className = 'div-for-each-img-private-events-gallery-small-screen-Chin-Chin div-for-each-img-10-private-events-gallery-small-screen-Chin-Chin'>
		 	   			<img className = 'img-10-private-events-gallery-small-screen-Chin-Chin,' src = {gallery[9]} />
		 	   		</div> 

		 	   		 <div className = 'div-for-each-img-private-events-gallery-small-screen-Chin-Chin div-for-each-img-11-private-events-gallery-small-screen-Chin-Chin'>
		 	   			<img className = 'img-11-private-events-gallery-small-screen-Chin-Chin,' src = {gallery[10]} />
		 	   		</div>   

		 	   		 <div className = 'div-for-each-img-private-events-gallery-small-screen-Chin-Chin div-for-each-img-12-private-events-gallery-small-screen-Chin-Chin'>
		 	   			<img className = 'img-12-private-events-gallery-small-screen-Chin-Chin' src = {gallery[11]} />
		 	   		</div> 
		 	   	</div>   

			</section>

		</div>
	)
}

export default PrivateEventsGalleryT;



