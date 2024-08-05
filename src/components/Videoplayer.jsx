import React from "react";

export default function Videoplayer() {
  return (
    <>
      <video style={{ marginTop: "50px" }} width="100%" height="500px" controls>
        <source src="./assets/video.mp4" type="video/mp4" />
      </video>
    </>
  );
}
