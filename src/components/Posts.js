import React, {Component} from 'react';
import Post from'./Post';


export default class Posts extends Component {
	render() {
		return (
				<div className="left">
					<Post src="https://im0-tub-ru.yandex.net/i?id=b349d936e4d033184ee2f6012452f4c2&n=13" alt="inst"/>
					<Post src="https://im0-tub-ru.yandex.net/i?id=b349d936e4d033184ee2f6012452f4c2&n=13" alt="second"/>
				</div>
			)
	}
}