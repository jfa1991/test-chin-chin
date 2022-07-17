import React, {useState, useEffect} from 'react';


function UseChangeColorHeaderResize () {


	const [whiteHeaderResize, setWhiteHeaderResize] = useState(false);


  {/* 	function handleScroll () {
    


 		useEffect(() => {
  			window.addEventListener('scroll', handleScroll);

    		return () => window.removeEventListener('scroll', handleScroll);

  		}, [whiteHeader, handleScroll]); 





  		return[whiteHeader,handleScroll]; 

} */}

	{/*	function handleScroll() {

			let currentSize = window.pageXOffset;
			let currentScrollPos = window.pageYOffset;
			const topLeft = 0
			const topPage = 0 
			
			if (currentScrollPos - topPage > 650) {
				setWhiteHeader(true)
			}

			else {
				setWhiteHeader(false)
			} 


		} */}



		function handleResize () {

			let top = window.pageYOffset;


			if(window.innerWidth > 1200 && top > 650) {
				setWhiteHeaderResize(true);
	 			
	 		} else if (window.innerWidth) {
	 			setWhiteHeaderResize(false)
	 		}

	 			
	 	}


		


	 useEffect(() => {


  			window.addEventListener('resize', handleResize);
  			window.addEventListener('scroll', handleResize);



    		return () => window.removeEventListener('resize', handleResize);
    		return () => window.removeEventListener('scroll', handleResize);

  		}, [whiteHeaderResize, handleResize]); 





  		return[whiteHeaderResize,handleResize];
 }




export default UseChangeColorHeaderResize;


