
function VideoComment(props){

    return (
            <div>each comment
                <h3>{props.comment.user}</h3>
                <p>{props.comment.comment}</p>
            </div>
    )
}
export default VideoComment