import React, {useState, useEffect} from 'react';


function UseChangeColorHeaderScroll () {


	const [whiteHeaderScroll, setWhiteHeaderScroll] = useState(false);


 	function handleScroll () {
    
   		const currentScrollPos = window.pageYOffset;

   		const topPage = 0
			
			if (currentScrollPos - topPage > 650) {
				setWhiteHeaderScroll(true)
			}

			else {
				setWhiteHeaderScroll(false)
			}

	}

	  useEffect(() => {

  			
  			window.addEventListener('scroll', handleScroll);

    		return () => window.removeEventListener('scroll', handleScroll);

  		}, [whiteHeaderScroll, setWhiteHeaderScroll]);


  		return[whiteHeaderScroll,handleScroll];

}

export default UseChangeColorHeaderScroll;