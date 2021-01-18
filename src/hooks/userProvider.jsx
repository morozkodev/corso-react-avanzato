import axios from 'axios'; 

const BASIC_DATA_URL = 'https://reqres.in/api/users';

export async function getUsers( params ) {
	return await axios.get( BASIC_DATA_URL, {params} );
}