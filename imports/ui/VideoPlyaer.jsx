import React from 'react';

//영상
const videoUrl = 'https://example.com/path/to/video.mp4';

const VideoPlayer = ({videoSrc}) =>{
    return(
        <div>
        <video controls className='h-auto w-full rounded-lg'>
            <source src={videoSrc} type='video/mp4'/>
            Your brower does not support the video tag.
        </video>
    </div>
    ); 
};

export default VideoPlayer;