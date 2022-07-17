{/* import React , {useState, useEffect, useRef} from 'react';

import Picture1Premise from '../orange_cocktail/private_event_3_img.jpg';
import Picture2Premise from '../orange_cocktail/private_events_premise_1.jpg';
import Picture3Premise from '../orange_cocktail/private_events_premise_2.jpg'
import Picture4Premise from '../orange_cocktail/private_events_premise_3.jpg';
import Picture5Premise from '../orange_cocktail/private_events_premise_4.jpg';
import Picture6Premise from '../orange_cocktail/private_events_premise_5.jpg';



function UseGalleryPremises () {

	const [index,setIndex] = useState(0);
	const [showGallery, setShowGallery] = useState(true)
	const [gallery,setGallery] =  useState([Picture1Premise,Picture2Premise,Picture3Premise,Picture4Premise, Picture5Premise,Picture6Premise])
	

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

		if(index + 1 === gallery.length) {
			setIndex(0)
		}

		else if (index + 1 < gallery.length) {
			setIndex(prevIndex => prevIndex + 1)
		}
	}

	function onClickPreviousPicture() {
		
		if(index === 0 ) {
			setIndex(gallery.length-1)
		}

		else if (index -1 >= 0) {
			setIndex(prevIndex => prevIndex -1)
		}
	}




	function onClickPicture1() {
		setIndex(0)
	}

	function onClickPicture2() {
		setIndex(1)
	}


	function onClickPicture3() {
		setIndex(2)
	}

	function onClickPicture4() {
		setIndex(3)
	}

	function onClickPicture5() {
		setIndex(4)
	}

	function onClickPicture6() {
		setIndex(5)
	}




	return[index,gallery, showGallery, size, onClickNextPicture, onClickPreviousPicture, onClickPicture1,onClickPicture2,onClickPicture3,onClickPicture4,onClickPicture5,onClickPicture6]
}



export default UseGalleryPremises; */}