import React from 'react'
import './video.scss'

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
    <div className="video">
      <iframe
        src={videoSrcURL}
        title={videoTitle}
        allow="autoplay;"
        frameBorder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
        width="100%"
        height="auto"
      />
    </div>
  )

export default Video;