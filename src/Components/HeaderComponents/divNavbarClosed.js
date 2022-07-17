import React, {useContext} from 'react';

import {CloseNavbarContext} from '../ContextProvider/closeNavbarContext.js';


import Logo from './orange_cocktail/chin_chin_logo.png';

import {GiHamburgerMenu} from 'react-icons/gi';



function DivForNavbarClosed (props) {

	const navCloseContext = useContext(CloseNavbarContext)


	return(
		<div className = 'container-logo-brand-icon-catchy-navbar'>
			<img className = 'logo-navbar-closed' src = {Logo} alt = 'logo'/>
			<span className = 'Chin-Chin-brand ff-sans-Spect'> Chin Chin</span>
			<p className = 'catchy-phrase-navbar-closed-Chin-Chin ff-sans-Spect fs-300'>Love the Fun  </p>


							  
				<i className = 'hamburger-Chin-Chin'>
			     	<GiHamburgerMenu onClick = {navCloseContext.handleClickNavClosed} size = {30} />
			  	</i>
		</div>
	)
}

export default DivForNavbarClosed;
