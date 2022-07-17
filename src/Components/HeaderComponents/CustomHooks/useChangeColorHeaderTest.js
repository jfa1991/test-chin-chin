import React, {useState, useEffect} from 'react';


function UseChangeColorHeaderT () {


{/*	const [whiteHeader, setWhiteHeader] = useState(false); */}
	const [containerWitheHeader, setContainerWitheHeader] = useState(false);


  {/*	function handleScrollT () {
    
   		const currentScrollPos = window.pageYOffset;
   		const topPage = 0
			
			if (currentScrollPos - topPage > 650) {
				setWhiteHeader(true)
			}

			else {
				setWhiteHeader(false)
			}

	} */}

	function handleResize () {

		const currentSize = window.pageXOffset;
		const currentScrollPos = window.pageYOffset;


		if (currentSize < 1200) {
			setContainerWitheHeader(false)

		}

		if (currentSize > 1200 && currentScrollPos < 650) {

			setContainerWitheHeader(false)
	    }

		if (currentSize  > 1200 && currentScrollPos > 650) {

			setContainerWitheHeader(true)
	    }
	}


	


  {/*		useEffect(() => {
  			window.addEventListener('scroll', handleScrollT);

    		return () => window.removeEventListener('scroll', handleScrollT);

  		}, [whiteHeader, handleScrollT]);


  		return[whiteHeader,handleScrollT]; */}



  		useEffect(() => {

  			
  			window.addEventListener('scroll', handleResize);
  			window.addEventListener('resize', handleResize);

    		return () => window.removeEventListener('resize', handleResize);
    		return () => window.removeEventListener('scroll', handleResize);

  		}, [containerWitheHeader, setContainerWitheHeader]);


  		return[containerWitheHeader,handleResize];

}

export default UseChangeColorHeaderT;