import React, {useContext} from 'react';

import { HashLink as Link } from 'react-router-hash-link';

import {CloseNavbarContext} from '../ContextProvider/closeNavbarContext.js'




function NavbarOpened (props) {


	const navCloseContext = useContext(CloseNavbarContext)


	return(
		<div>

		    <nav className = 'navbar-opened-Chin-Chin'>
			   <ul className = 'ff-sans-Spect ul-navbar-opened-Chin-Chin'>
				     
				     <li onClick = {navCloseContext.handleClickHideNav} className = 'fs-400 ff-sans-Spect li-ul-navbar-opened-Chin-Chin'><Link className = 'Link-navbar-opened-Chin-Chin'to = '#section-home'>Home</Link></li>
				     <li onClick = {navCloseContext.handleClickHideNav} className = 'fs-400 ff-sans-Spect li-ul-navbar-opened-Chin-Chin'><Link className = 'Link-navbar-opened-Chin-Chin' to = '#section-info'>Info</Link></li>
				     <li onClick = {navCloseContext.handleClickHideNav} className = 'fs-400 ff-sans-Spect li-ul-navbar-opened-Chin-Chin '><Link className = 'Link-navbar-opened-Chin-Chin' to = '#section-private-events'>Private Events</Link></li>
				     <li onClick = {navCloseContext.handleClickHideNav} className = 'fs-400 ff-sans-Spect li-ul-navbar-opened-Chin-Chin'><Link className = 'Link-navbar-opened-Chin-Chin'to = '#section-about-us'>About US</Link></li>
				     <li onClick = {navCloseContext.handleClickHideNav} className = 'fs-400 ff-sans-Spect li-ul-navbar-opened-Chin-Chin li-contact-us-navbar-Chin-Chin'><Link className = 'Link-navbar-opened-Chin-Chin Link-navbar-contact-us-Chin-Chin'to = '#section-contact-us'>Contact US</Link></li>
		     	
		     	</ul>
		   </nav>

	</div>
   )
}


export default NavbarOpened ;