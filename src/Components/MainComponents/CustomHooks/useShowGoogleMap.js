import React , {useState, useEffect, useRef} from 'react';


function UseShowGoogleMap() {

	function showInMapClicked () {

		window.open("https://maps.google.com?q="+37.401340+","+-5.988830 )

	}

	return [showInMapClicked]


}


export default UseShowGoogleMap;

