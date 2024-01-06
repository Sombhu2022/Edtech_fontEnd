import React from "react";
import ReactPlayer from "react-player/youtube";
import "./video.scss";

import { useState } from "react";
import { useParams } from "react-router-dom";
import Playlist from "../../components/Playlist";
import Video from "../../components/Videos";
// import Nav from "../../headers/nav/Nav";

function AllVideo() {
	const { topic } = useParams();
	const [video, setVedio] = useState({
		thumbnail: "https://youtu.be/7wnove7K-ZQ?si=Mbi8-HUzjl73FgyG",
		description: "this is a python topic",
		topic: topic,
	});

	const changeVedio = (thumbnail, description, topic) => {
		setVedio({ thumbnail: thumbnail, description: description, topic: topic });
		console.log(thumbnail, description, topic);
	};

	return (
		<>
			{/* <Nav/> */}

			<div className='vedio_container'>
				<div className='vedio'>
					<Video
						thumbnail={video.thumbnail}
						description={video.description}
						topic={video.topic}
					/>
				</div>

				<div className='playlist'>
					<Playlist
						onButtonClick={changeVedio}
						thumbnail='https://youtu.be/xwKO_y2gHxQ?si=kO5cXth9-EnMvoPy'
						description={video.description}
						topic='First Video'
					/>
					<Playlist
						onButtonClick={changeVedio}
						thumbnail='https://youtu.be/7IWOYhfAcVg?si=6veW2o8NQqJztqCp'
						description={video.description}
						topic='first python program'
					/>
					<Playlist
						onButtonClick={changeVedio}
						thumbnail='https://youtu.be/xwKO_y2gHxQ?si=kO5cXth9-EnMvoPy'
						description={video.description}
						topic='module and pip'
					/>
					<Playlist
						onButtonClick={changeVedio}
						thumbnail='https://youtu.be/7IWOYhfAcVg?si=6veW2o8NQqJztqCp'
						description={video.description}
						topic='first python program'
					/>
					<Playlist
						onButtonClick={changeVedio}
						thumbnail='https://youtu.be/xwKO_y2gHxQ?si=kO5cXth9-EnMvoPy'
						description={video.description}
						topic='module and pip'
					/>
					<Playlist
						onButtonClick={changeVedio}
						thumbnail='https://youtu.be/7IWOYhfAcVg?si=6veW2o8NQqJztqCp'
						description={video.description}
						topic='first python program'
					/>
					<Playlist
						onButtonClick={changeVedio}
						thumbnail='https://youtu.be/xwKO_y2gHxQ?si=kO5cXth9-EnMvoPy'
						description={video.description}
						topic='module and pip'
					/>
					<Playlist
						onButtonClick={changeVedio}
						thumbnail='https://youtu.be/7IWOYhfAcVg?si=6veW2o8NQqJztqCp'
						description={video.description}
						topic='first python program'
					/>
					<Playlist
						onButtonClick={changeVedio}
						thumbnail='https://youtu.be/xwKO_y2gHxQ?si=kO5cXth9-EnMvoPy'
						description={video.description}
						topic='module and pip'
					/>
					<Playlist
						onButtonClick={changeVedio}
						thumbnail='https://youtu.be/7IWOYhfAcVg?si=6veW2o8NQqJztqCp'
						description={video.description}
						topic='first python program'
					/>
					<Playlist
						onButtonClick={changeVedio}
						thumbnail='https://youtu.be/xwKO_y2gHxQ?si=kO5cXth9-EnMvoPy'
						description={video.description}
						topic='module and pip'
					/>
					<Playlist
						onButtonClick={changeVedio}
						thumbnail='https://youtu.be/7IWOYhfAcVg?si=6veW2o8NQqJztqCp'
						description={video.description}
						topic='first python program'
					/>
				</div>
			</div>
		</>
	);
}

export default AllVideo;
