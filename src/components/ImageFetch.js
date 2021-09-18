import React, { useState, useEffect } from "react";
import axios from "axios";
function ImageFetch() {
	const [images, setImage] = useState([]);
	useEffect(() => {
		axios
			.get("https://jsonplaceholder.typicode.com/photos")
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
	});
	return (
		<div>
			<ul>
				{images.map((image) => (
					<li key={image.id}>{image.thumbnailUrl}</li>
				))}
			</ul>
		</div>
	);
}

export default ImageFetch;
