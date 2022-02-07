
import './App.css';

import { useQuery } from '@apollo/client';
//import { loader } from 'graphql.macro';
import type { getPostmanList, getPostmanListVariables } from './__generated__/getPostmanList'

import { getPostmenList_query } from "./GET_POSTMEN_LIST"

function App() {


	const { data, loading, fetchMore } = useQuery<getPostmanList, getPostmanListVariables>(
		getPostmenList_query,
		{
			variables: {
				filterBy: { search: 'еле' }
			},
			//fetchPolicy: "no-cache"
		}
	)




	function clickHandler() {
		console.log('test')

		fetchMore({
			variables: {
				filterBy: { search: 'а' }
			},
			
			updateQuery: (prevResult, {fetchMoreResult}):any => {
				console.log(prevResult);
				console.log(fetchMoreResult);
			}
		})

	}

	// useEffect(()=>{
	//   client
	//   .query({
	//     query: getPostmenList_query
	//   })
	//   .then((result) => {
	//     setTest(JSON.stringify(result.data, null, 4)) 

	//   });
	// }) 


	return (
		<div className="App">
			<pre>

				{JSON.stringify(data, null, 4)}
				{loading}
			</pre>
			<button onClick={() => {
				clickHandler()
			}}>
				test
			</button>
		</div>
	);
}

export default App;