import React from 'react'
import YouTube from 'react-youtube'
import getYouTubeId from 'get-youtube-id'

const YouTubeEmbed = ({node}) => {
  const {url} = node
  const id = getYouTubeId(url)
  return (<YouTube
    videoId={id}
  />)
}

export default YouTubeEmbed
