import React from "react";
import ReactPlayer from "react-player";

function Video({ thumbnail, description, topic }) {
	return (
		<>
			<ReactPlayer
				height={"100%"}
				width={"100%"}
				url={thumbnail}
				controls={true}
				playing = {true}
			/>

			<div className='details'>
				<h3>{topic}</h3>
				{/* <span>12d ago</span>
				<p>{description} </p>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
					deserunt, quas mollitia explicabo eaque et! Nihil, alias aspernatur.
					Commodi odit ipsa perferendis tenetur possimus non quidem quaerat
					sunt? Doloribus, nisi!
				</p> */}
			</div>
		</>
	);
}

export default Video;
