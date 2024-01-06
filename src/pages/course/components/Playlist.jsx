import React from 'react'
import ReactPlayer from 'react-player'

function Playlist({thumbnail , description , topic , onButtonClick}) {
  return (
  
        <div onClick={()=>onButtonClick(thumbnail,description,topic)}>



            {/* <ReactPlayer
             width={150}
             height={90}
              url={thumbnail}
              volume={0}
              controls={false}
            /> */}




            <div className="details" >
            <h3>{topic}</h3>
            <span>12d ago</span>
            {/* <p>{description} </p> */}
          </div>
          </div>


  )
}

export default Playlist