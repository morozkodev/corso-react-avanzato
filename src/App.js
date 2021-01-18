import React from 'react';
import './App.css';
import { List, Avatar, Alert, Pagination } from 'antd';

import useFetch from './hooks/useFetch';
import { getUsers } from './hooks/userProvider';

const UserList = () => {

    const [{isLoading, hasError, response}, setParams] = useFetch( {
		providerFunc: getUsers,
		initialParams: { per_page: 4 }
	} );
	
	/*
		https://ant.design/components/list/#API
	 */
	
    function cambiaPagina( current, pageSize ){
        setParams( { page:current, per_page: pageSize } );
    }
	
    return (
        <React.Fragment>
            <h1>User List</h1>
			<List
				header={"Lista utenti"}
				footer={response && <Pagination defaultCurrent={response.page} total={response.total} pageSize={response.per_page} onChange={cambiaPagina} />}
				loading={isLoading}
				bordered
				dataSource={response && response.data}
				pagination={true}
				renderItem={
					user => <List.Item key={user.id}>
						<List.Item.Meta avatar={<Avatar src={user.avatar}/>}
							title={`${user.first_name} ${user.last_name}`}
							description={user.email}></List.Item.Meta>
					</List.Item>
				}>
			</List>
			{!isLoading && hasError && (
				<Alert message="Error" type="error" showIcon />
			)} 
        </React.Fragment>
    )
}

function App (){
    return (
        <div className="App">
            <h1>App React</h1>
            <UserList />
        </div>
    )
}

export default App;
