import React, {useContext} from 'react';



import {CloseNavbarContext} from '../ContextProvider/closeNavbarContext.js'


import Logo from './orange_cocktail/chin_chin_logo.png';

import {GiHamburgerMenu} from 'react-icons/gi';
import {AiFillCloseCircle} from 'react-icons/ai';




function DivForNavbarOpened (props) {

	const navCloseContext = useContext(CloseNavbarContext)
 
	return(
		<div className = 'container-logo-brand-icon-catchy-navbar'>
			<img className = 'logo-navbar-opened' src = {Logo} alt = 'logo'/>
			<span className = 'Chin-Chin-brand ff-sans-Spect'> Chin Chin</span>
			<p className = 'ff-sans-Spect catchy-phrase-navbar-opened-Chin-Chin fs-200'>Love the Fun </p>
					
				  
			<i className = 'exit-icon-NavbarOpened-Chin-Chin' > 
			    <AiFillCloseCircle onClick = {navCloseContext.handleClickHideNav} size = {30} /> 
			</i>

		</div>
	)
}

export default DivForNavbarOpened;