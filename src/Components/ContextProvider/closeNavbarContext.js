import React, {useState, useEffect} from 'react';



const CloseNavbarContext = React.createContext()

function CloseNavbarContextProvider(props) {

	const[isNavClosed, setIsNavClosed] = useState(true);
	const[isNavbarVisible, setIsNavbarVisible] = useState(false); 
	const [containerWhiteHeader, setContainerWhiteHeader] = useState(false);




	
	

	function handleClickNavClosed() { {/* function that makes navbar open or close */}
		
		
			setIsNavClosed(false);
			setIsNavbarVisible(true);
			setContainerWhiteHeader(false);


		

	}

	function handleClickHideNav() {

		setIsNavClosed(true);

  	
		

	}


	function handleResize () {

		const currentSize = window.pageXOffset;
		const currentScrollPos = window.pageYOffset;

		if (currentSize < 1200) {
			setContainerWhiteHeader(false)

		}

		if (currentSize > 1200 && currentScrollPos < 650) {

			setContainerWhiteHeader(false)
	    }

		if (currentSize > 1200 && currentScrollPos > 650) {

			setContainerWhiteHeader(true)
	    }
	}

	  	useEffect(() => {

  			window.addEventListener('scroll', handleResize);

  			window.addEventListener('resize', handleResize);

    		return () => window.removeEventListener('resize', handleResize);

  		}, [containerWhiteHeader, setContainerWhiteHeader]);











{/*function handleScrollNavbar() {
		
		const topPage = 0

		const currentScrollPos = window.pageYOffset 

		
   		



   		if (currentScrollPos >= topPage) {
				setIsNavClosed(true);
				setIsNavbarVisible(false);	
		}


	} 

	function handleScrollNavbar() {
		const currentScrollY = window.scrollY;
      	
      	if (prevScrollY.current < currentScrollY) {
      		setIsNavClosed(true);
			
			

      	}


     }



	useEffect(() => {
			
			
  			
  				window.addEventListener('scroll', handleScrollNavbar);
  				
			

    			return () => window.removeEventListener('scroll', handleScrollNavbar,{ passive: true });

  		}, [isNavClosed],[isNavbarVisible]); */}





	return(
		<CloseNavbarContext.Provider value = {{

			isNavClosed: isNavClosed, 
			handleClickNavClosed:handleClickNavClosed,
			isNavbarVisible:isNavbarVisible,
			handleClickHideNav: handleClickHideNav,
			containerWhiteHeader:containerWhiteHeader,

			
		}} >
			{props.children}
		</CloseNavbarContext.Provider>
	)
}

export {CloseNavbarContextProvider, CloseNavbarContext}
