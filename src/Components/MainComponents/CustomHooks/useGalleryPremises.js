import Picture1PremiseSmall from './orange_cocktail/private_event_3_img_440_small_screen.png';
import Picture2PremiseSmall from './orange_cocktail/private_events_premise_3_440.png';
import Picture3PremiseSmall from './orange_cocktail/private_events_premise_10_440_small_screen.png';
import Picture4PremiseSmall from './orange_cocktail/private_events_premise_9_440_small_screen.png';
import Picture5PremiseSmall from './orange_cocktail/private_events_premise_14_440_small_screen.png';
import Picture6PremiseSmall from './orange_cocktail/private_events_premise_4_440_small_screen.png'; 
import Picture7PremiseSmall from './orange_cocktail/private_events_premise_5_440_small_screen.png';
import Picture8PremiseSmall from './orange_cocktail/private_events_premise_2_440_small_screen.png';
import Picture9PremiseSmall from './orange_cocktail/private_events_premise_1_440_small_screen.png'; 
import Picture10PremiseSmall from './orange_cocktail/private_events_premise_13_440_small_screen.png'; 
import Picture11PremiseSmall from './orange_cocktail/private_events_premise 16_440_small_screen.png';
import Picture12PremiseSmall from './orange_cocktail/private_events_premise 15_440_small_screen.png'; 

import React , {useState, useEffect, useRef} from 'react';



function UseGalleryPremises () {

	const [current,setCurrent] = useState(0);
	const [showGallery, setShowGallery] = useState(true)
	const [gallery,setGallery] =  useState([Picture1PremiseSmall,Picture2PremiseSmall,Picture3PremiseSmall,Picture4PremiseSmall,Picture5PremiseSmall,Picture6PremiseSmall,Picture7PremiseSmall,Picture8PremiseSmall,Picture9PremiseSmall,Picture10PremiseSmall,Picture11PremiseSmall,Picture12PremiseSmall])


	const [size, setSize] = useState(window.innerWidth)



	function handleResize() {

		const currentSize = window.innerWidth

		setSize(window.innerWidth);

		if (currentSize > 1200) {
			setShowGallery(false)

		}

		else {
			setShowGallery(true)
		}


	}




	useEffect(() => {

		window.addEventListener('resize', handleResize);



    	
    	return () => window.removeEventListener('resize', handleResize);

    }, []);




	function onClickNextPicture() {

	{/*	if(index + 1 === gallery.length) {
			setIndex(0)
		}

		else if (index + 1 < gallery.length) {
			setIndex(prevIndex => prevIndex + 1)
		} */}

		setCurrent(current === gallery.length -1 ? 0 : current + 1);




	}

	function onClickPreviousPicture() {
		
		{/*if(index === 0 ) {
			setIndex(gallery.length-1)
		}

		else if (index -1 >= 0) {
			setIndex(prevIndex => prevIndex -1)
		}*/}


		setCurrent(current === 0 ? gallery.length - 1 : current -1)
	


	}




	function onClickPicture1() {
		setCurrent(0)
	}

	function onClickPicture2() {
		setCurrent(1)
	}


	function onClickPicture3() {
		setCurrent(2)
	}

	function onClickPicture4() {
		setCurrent(3)
	}

	function onClickPicture5() {
		setCurrent(4)
	}

	function onClickPicture6() {
		setCurrent(5)
	}




	return[current,gallery, showGallery, size, onClickNextPicture, onClickPreviousPicture, onClickPicture1,onClickPicture2,onClickPicture3,onClickPicture4,onClickPicture5,onClickPicture6]
}



export default UseGalleryPremises;