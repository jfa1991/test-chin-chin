import React, {useContext} from 'react';




import NavbarClosed from './navbarClosed.js'
import DivForNavbarClosed from './divNavbarClosed.js';


function GeneralHeaderNavbarClosed () {

	



	return(
		<div className ='general-wrapper'>
			<header className = 'header-navbar-closed-Chin-Chin'>
			
				<div className = 'container-div-and-navbar-closed-Chin-Chin'>
			  	
			  		<DivForNavbarClosed />
			   		<NavbarClosed />
				
				</div>

			</header>

			
		</div>
	)
}

export default GeneralHeaderNavbarClosed;