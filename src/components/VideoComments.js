import React from "react"
import VideoComment from "./VideoComments"

function VideoComments(props){
    function renderComments (){
        return props.comments.map((comment, index) => {
            return(
                    <VideoComment key={index} comment={comment}/>
            )
        })
    }

    return(
        <div  id="video-comments-container">
        <h2>{props.comments.length}Comments</h2>
        {renderComments()}

        </div>
    )
}
export default VideoComments