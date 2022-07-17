import styles from './css_style/style.css';

import {CloseNavbarContextProvider} from './Components/ContextProvider/closeNavbarContext.js';
import {ShowGalleryEventsContextProvider} from './Components/ContextProvider/showGalleryEventsContext.js';
import {ShowFormContextProvider} from './Components/ContextProvider/showFormContext.js';


import GeneralHeader from './Components/HeaderComponents/generalHeader.js';
import GeneralMain from './Components/MainComponents/generalMain.js';
import GeneralFooter from './Components/FooterComponents/generalFooter.js';

import NavbarClosed from './Components/HeaderComponents/navbarClosed.js';

function App() {
  return (
    <div>
      <CloseNavbarContextProvider>
      <ShowGalleryEventsContextProvider>
      <ShowFormContextProvider>
     

        <GeneralHeader /> 
        <GeneralMain />
        <GeneralFooter />

      </ShowFormContextProvider>
      </ShowGalleryEventsContextProvider>
      </CloseNavbarContextProvider>

    </div>
  );
}

export default App;
