import React, {useState, useEffect, useContext} from 'react';

import {CloseNavbarContext} from '../ContextProvider/closeNavbarContext.js';
import {ShowGalleryEventsContext} from '../ContextProvider/showGalleryEventsContext.js';
import {ShowFormContext} from '../ContextProvider/showFormContext.js';


import UseChangeColorHeaderScroll from './CustomHooks/useChangeColorHeaderScroll.js';

import GeneralHeaderNavbarClosed from './generalHeaderNavbarClosed.js';
import GeneralHeaderNavbarOpened from './generalHeaderNavbarOpened.js';



function GeneralHeader (props) {

	const navCloseContext = useContext(CloseNavbarContext);
	const showGalleryContext = useContext(ShowGalleryEventsContext); 
	const showFormContext = useContext(ShowFormContext);




	const [whiteHeaderScroll,handleScroll] =  UseChangeColorHeaderScroll();



  	  	const headerStyles = {
  		position: 'sticky',
		top: '0',
		backgroundColor: 'orange',
		backgroundImage: "linear-gradient(45deg, orange, #FFF)",
		zIndex: '2',


  	}

	return(
		<div style={{ ...headerStyles, backgroundImage: whiteHeaderScroll ? "linear-gradient(45deg, #eff1e4, #eff1e4)" : "linear-gradient(45deg, orange, #FFF)" }}>

		    
			
			{navCloseContext.isNavClosed && !showGalleryContext.isGalleryEventsShown && !showFormContext.isFormShowed && <GeneralHeaderNavbarClosed /> } 
			

			{!navCloseContext.isNavClosed && navCloseContext.isNavbarVisible && !showGalleryContext.isGalleryEventsShown && !showFormContext.isFormShowed && <GeneralHeaderNavbarOpened/> } 
		
		</div>
	)
}

export default GeneralHeader;