import React, {useState, useEffect} from 'react';
import LoaderComp from './loaderMain.js';
import Martini from './orange_cocktail/staff_martini.png';
import Together from './orange_cocktail/team_together_staff_member_chin_chin.jpg'; 
 

function StaffChinChin() {

	const [error, setError] = useState(null)
	const [response, setResponse] = useState(true)
	const [isLoaded,setIsLoaded] = useState(true)
	const [avatarAPI, setAvatarAPI] = useState('https://reqres.in/img/faces/10-image.jpg')
	const [datasArray, setDatasArray] = useState([])


		useEffect(() => {

		const url = 'https://reqres.in/api/users/';

		const fetchData = async () => {

			try{
				
				const result = await fetch(url);
				const json = await result.json();
				await setIsLoaded(false);
				await setDatasArray(json.data)
				
			

				} catch(error) {
				setError(error);
		 	}
		 };



		 	fetchData();
		 	
		 	


		},[])



	
    const sentence = {
    	1:"'s favourite drink is negroni. Founder of Chin-Chin, he loves spending time with his dog Rucco.",
    	2: "enjoys having margaritas! She is a former professinal poker player and is a very talented flamenco dancer.",
    	3:"loves martinis. She speaks fluently 5 languages and is able to prepare whatever cocktail you ask.",
    	4:"likes to have gin & tonic. His voice is angelic and gardening is one his biggest passion. ",
    	5:"usually has old fashioned. He plays guitar since he is 5 and loves to paint.",
    	6:", on the other hand is a fan of aperol apritz.  " 
    }

    const drinks = {
    	1:" You guess it... Negroni!",
    	2: "Margaritas!...",
    	3:"Martinis... What Else !",
    	4:"Old Fashioned... Surprising Uh ?",
    	5:"Gin & Tonic... Classy Charles !",
    	6:" Aperol Spritz... We All Are Tracey!"
    }




	const staff = datasArray.map(staffMember => <div className ={`div-individual-staff-member-${staffMember.id}-navbar-closed-Chin-Chin`} key = {staffMember.id}>
												{/*<div className ={`div-individual-staff-member-${staffMember.id}-navbar-closed-Chin-Chin`} key = {staffMember.id}>  */}
					                              <img className = {`avatar-staff-${staffMember.id}-navbar-closed-Chin-Chin`} src = {staffMember.avatar} alt = 'Chin-Chin-staff-member' />
					                           	  
					                              <p className = {`p-name-staff-${staffMember.id}-Chin-Chin`}>{staffMember.first_name} </p> 
					                           	  {/*<img className = {`avatar-staff-${staffMember.id}-navbar-closed-Chin-Chin`} src = {staffMember.avatar} {sentence[staffMember.id]} alt = 'Chin-Chin-staff-member' />*/}


					                              {/*<p className = {`p-name-staff-${staffMember.id}-Chin-Chin`}>{staffMember.first_name} {sentence[staffMember.id]}</p> */}

					                              {/*<p >{drinks[staffMember.id]}</p> */}
										       </div>
									)



	return(
		<div>
		     {/* {!isLoaded && response ? null : <LoaderComp> </LoaderComp>}  */}


		     <div className ='general-container-staff-navbar-closed-Chin-Chin' id = 'section-about-us'>
		          <h2 className = 'fs-500 ff-sans-Spect-SC h2-meet-staff-Navbar-Closed-Chin-Chin'> Come Meet Our Staff!</h2>
		          <div className = 'container-for-all-img-name-navbar-closed-Chin-Chin'>

		             {staff}
		          </div>
		          <div className ='container-p-staff-Chin-Chin'>
		          	<h3 className = 'fs-400 ff-sans-Spect-SC h3-About-Us-staff-Chin-Chin'> About Us</h3>
		          	<p className ='p-staff-Chin-Chin letter-spacing-2'>
		          		Founded by our staff members, Chin Chin was born from a common desire to 
		          		offer a pleasant meeting spot in the beautiful Seville, where people 
		          		can interact with each other  in a relaxed and fun atmosphere, while 
		          		enjoying their favorite cocktails or drinks. </p>
		          	
		          </div>

		         {/* <p className ='ff-sans-Spect-SC fs-400 p-favourite-drink-staff-navbar-closed-Chin-Chin'>...& Enjoy With Them Your Favourite Drinks!</p>*/}

		     </div>

		</div>

	)
}



export default StaffChinChin;

	

