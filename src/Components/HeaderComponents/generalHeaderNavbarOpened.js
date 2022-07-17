import React, {useContext} from 'react';

import {CloseNavbarContext} from '../ContextProvider/closeNavbarContext.js';
import UseChangeColorHeaderT from './CustomHooks/useChangeColorHeaderTest.js';
import useChangeColorHeaderResize from './CustomHooks/useChangeColorHeaderResize.js';



import NavbarOpened from './navbarOpened.js'
import DivForNavbarOpened from './divNavbarOpened.js';


function GeneralHeaderNavbarOpened (props) {

	const navCloseContext = useContext(CloseNavbarContext);

	const [whiteHeaderResize,handleResize,currentScrollPos] =  useChangeColorHeaderResize();


	 const containerInHeaderStyles = {

		backgroundColor: 'orange',
		backgroundImage: "linear-gradient(45deg, orange, #FFF)",


  	}


	return(
		<div className = 'header-navbar-opened-Chin-Chin'className ='general-wrapper general-wrapper-navbar-opened'>
			<header style={{ ...containerInHeaderStyles, backgroundImage: whiteHeaderResize ? "linear-gradient(45deg, #eff1e4, #eff1e4)" : "linear-gradient(45deg, orange, #FFF)" }} className ='header-navbar-opened-Chin-Chin' >
			  
			  <div className = 'container-div-and-navbar-opened-Chin-Chin'>

			  	<DivForNavbarOpened />

			  	 <NavbarOpened />

			  	 <p>{currentScrollPos}</p>




			  </div>

			</header>

			
		</div>
	)
}

export default GeneralHeaderNavbarOpened;