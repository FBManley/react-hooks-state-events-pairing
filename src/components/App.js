import React from "react"
import video from "../data/video.js";
import Video from "./Video.js"


function App() {
  // Video Component -Child App.js
  // Video Details Component - CHild of Video.js
  // Video Comments Component - Child of Video.js
  // Video Comment Component - Child of VideoComments.js
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <Video video={video}/>
    </div>
  );
}

export default App;
