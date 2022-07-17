import React, {useEffect, useState} from 'react';


const ShowGalleryEventsContext = React.createContext();

function ShowGalleryEventsContextProvider (props) {

	const [isGalleryEventsShown, setIsGalleryEventsShown] = useState(false);

	

	function handleGallery() {
		setIsGalleryEventsShown(!isGalleryEventsShown);
	}



	return(
		<ShowGalleryEventsContext.Provider value = {{

			isGalleryEventsShown: isGalleryEventsShown,
			handleGallery:handleGallery
		
			
		}} >
			{props.children}
		</ShowGalleryEventsContext.Provider>
	)
}

export {ShowGalleryEventsContextProvider, ShowGalleryEventsContext};

