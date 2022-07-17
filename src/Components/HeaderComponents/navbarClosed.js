import React, {useContext} from 'react';

import { HashLink as Link } from 'react-router-hash-link';

import {CloseNavbarContext} from '../ContextProvider/closeNavbarContext.js'


function NavbarClosed (props) {

	const navCloseContext = useContext(CloseNavbarContext)



	return(
		<div>
			<nav className = 'navbar-closed-Chin-Chin'>
				
				<ul className = 'ul-navbar-closed-Chin-Chin ff-sans-Spect'>
						
					<li className = 'fs-400 ff-sans-Spect li-ul-navbar-closed-Chin-Chin'><Link className = 'Link-navbar-closed-Chin-Chin'to = '#section-home'>Home</Link></li>
					<li className = 'fs-400 ff-sans-Spect li-ul-navbar-closed-Chin-Chin'><Link className = 'Link-navbar-closed-Chin-Chin' to = '#section-info'>Info</Link></li>
					<li className = 'fs-400 ff-sans-Spect li-ul-navbar-closed-Chin-Chin'><Link className = 'Link-navbar-closed-Chin-Chin' to = '#section-private-events'>Private Events</Link></li>
					<li className = 'fs-400 ff-sans-Spect li-ul-navbar-closed-Chin-Chin'><Link className = 'Link-navbar-closed-Chin-Chin'to = '#section-about-us'>About US</Link></li>
					<li className = 'fs-400 ff-sans-Spect li-ul-navbar-closed-Chin-Chin'><Link className = 'Link-navbar-closed-Chin-Chin Link-navbar-contact-us-Chin-Chin'to = '#section-contact-us'>Contact US</Link></li> 
					
				</ul>

			</nav> 			
		</div>																				
	)
}

export default NavbarClosed ;