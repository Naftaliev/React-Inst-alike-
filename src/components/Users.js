import React from 'react';
import User from './User';

export default function Users() {
	return (
			<div className ="right">
				<User 
					src="https://avatars.mds.yandex.net/get-pdb/2864424/edc10308-d02b-4f09-9447-c9bd5f874dbc/s1200" 
					alt="man" 
					name="Scott"/>
				<div className="users__block">
					<User 
					src="https://avatars.mds.yandex.net/get-pdb/2864424/edc10308-d02b-4f09-9447-c9bd5f874dbc/s1200" 
					alt="man" 
					name="Scott"
					min/>
					<User 
					src="https://avatars.mds.yandex.net/get-pdb/2864424/edc10308-d02b-4f09-9447-c9bd5f874dbc/s1200" 
					alt="man" 
					name="Scott"
					min/>
					<User 
					src="https://avatars.mds.yandex.net/get-pdb/2864424/edc10308-d02b-4f09-9447-c9bd5f874dbc/s1200" 
					alt="man" 
					name="Scott"
					min/>
					<User 
					src="https://avatars.mds.yandex.net/get-pdb/2864424/edc10308-d02b-4f09-9447-c9bd5f874dbc/s1200" 
					alt="man" 
					name="Scott"
					min/>
				</div>
			</div>
		)
}