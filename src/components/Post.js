import React, {Component} from 'react';

export default class Post extends Component {
	render() {
			return (
				<div className="post">
						<img src={this.props.src} alt={this.props.alt}></img>
					<div className="post__name">
						some account
					</div>
					<div className="post__desctiption">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, quod totam? Numquam excepturi facere accusantium quasi magnam cumque vel omnis dolores nobis! Eius eaque, iure. Adipisci ab est voluptatum ea.
					</div>
				</div>
				)
	}
}
