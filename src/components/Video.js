import React from "react";
import VideoDetails from "./VideoDetails";
import VideoComments from "./VideoComment"

function Video(props){
    return (
    <div>
    <iframe
        width="919"
        height="525"
        src={props.video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
    <VideoDetails 
    title={props.VideoData.title} 
    viewCount={props.VideoData.views} 
    createdAt={props.VideoData.createdAt}
    upVotes={props.VideoData.upVotes}
    downVotes={props.VideoData.downVotes}
    />
    <VideoComments />
    </div>
    )
}

export default Video;