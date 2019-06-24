import React from 'react';
import VideoItem from './VideoItem';

//short term for props from the App.js <VideoList/>
const VideoList = ({videos, onVideoSelect}) => { 
    
    // loop all the videos and create a list
    // call the VideoItem.js to render each video
    const renderedlist = videos.map( (video) =>{
        return <VideoItem 
                key={video.id.videoId}     
                video={video}
                onVideoSelect={onVideoSelect}
        />
    });
  
    // the final list
    return (
        <div className="ui relaxed divided list">
          {renderedlist}
        </div>
    );
};

export default VideoList;