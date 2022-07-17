import {useState,useEffect} from 'react';

function useStaffChinChin() {

	const [response, setResponse] = useState([])
	const [error, setError] = useState(null)
	const [isLoaded,setIsLoaded] = useState(true)
	const [avatarAPI, setAvatarAPI] = useState('https://reqres.in/img/faces/10-image.jpg')

	async function FetchData() {
		const url = 'https://reqres.in/api/users?page=2';	
	

	try{

		const result = await fetch(url);
		const json = await result.json();
		await setResponse(json);
		await setIsLoaded(false);
		setAvatarAPI(json.data[0].avatar)

	} catch (error) {
		setError(error);

	}


	useEffect(() => {

		FetchData();

	},[]);


	return [response, error, isLoaded,avatarAPI,FetchData]

	}

}

export default useStaffChinChin;
