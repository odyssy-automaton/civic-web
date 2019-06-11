import React from 'react'
import './video.scss'

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
    <div className="video">
      <iframe
        src={videoSrcURL}
        title={videoTitle}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
        width="560"
        height="315"
      />
    </div>
  )

export default Video;