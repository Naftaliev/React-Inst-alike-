import React, {Component} from 'react';
import User from './User';


export default class Post extends Component {
	render() {
			return (
				<div className="post">
					<User 
					src="https://avatars.mds.yandex.net/get-pdb/2864424/edc10308-d02b-4f09-9447-c9bd5f874dbc/s1200" 
					alt="man" 
					name="Scott"
					min/>
						<img src={this.props.src} alt={this.props.alt}></img>
					<div className="post__name">
						some account
					</div>
					<div className="post__description">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, quod totam? Numquam excepturi facere accusantium quasi magnam cumque vel omnis dolores nobis! Eius eaque, iure. Adipisci ab est voluptatum ea.
					</div>
				</div>
				)
	}
}
