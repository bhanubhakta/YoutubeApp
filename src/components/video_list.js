import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  const {videos, onVideoSelect} = props;
  const videoListItems = videos.map((video) => (
      <VideoListItem
        onVideoSelect={onVideoSelect}
        video={video}
        key={video.etag}
      />
    )
  );

  return (
    <ul className = 'col-md-4 list-group'>
      {videoListItems}
    </ul>
  );
}

export default VideoList;
