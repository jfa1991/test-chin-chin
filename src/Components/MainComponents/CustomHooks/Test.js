import React , {useState, useEffect, useRef} from 'react';

import {GrPrevious} from 'react-icons/gr';
import {GrNext} from 'react-icons/gr';

import {SliderData} from '../slideImage.js';

import UseGalleryPremises from './useGalleryPremises.js';



function Test () {

	const [current,gallery, showGallery, size, onClickNextPicture, onClickPreviousPicture, onClickPicture1,onClickPicture2,onClickPicture3,onClickPicture4,onClickPicture5,onClickPicture6] = UseGalleryPremises();



	return(
		<div>
			<section>

				<i className = 'icon-gallery-img-private-events-Chin-Chin left-icon'>
					<GrPrevious  className = 'icon-previous-img-Chin-Chin' onClick ={onClickPreviousPicture} size = {30} />
				</i>
					{SliderData.map((slide,index) => <div className = {index === current ? 'slide-active' : 'slide'}   key = {index}>
			                    			
			                    			{index === current && <img className = 'img-test' src = {slide.image} />}
			                  			</div>
			                 )}
			    <i className = 'icon-gallery-img-private-events-Chin-Chin right-icon'>
		 			<GrNext className = 'icon-next-img-Chin-Chin' onClick = {onClickNextPicture} size = {35}  /> 
		 		</i>
		 	</section>
		</div>

	)
}

{/* <img className = 'img-test' src = {slide.image} /> */}

export default Test;




