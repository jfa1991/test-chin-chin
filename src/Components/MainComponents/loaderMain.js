import Loader from 'react-loader-spinner';


const LoaderComp = () => {

	return(

		<Loader 
		  type = 'BallTriangle'
		  color = '#6495ED'
		  height= {70}
		  width = {70}
		  timeout = {6000}

		  />
	);

}

export default LoaderComp;