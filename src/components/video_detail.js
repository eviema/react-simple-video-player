import React from 'react';

const VideoDetail = ({video}) => {

    // check for and handle null props
    // but usually we don't do this in every component
    // otherwise we end up with multiple loading msgs on one page
    // instead we would have one in a parent component
    if (!video) {
        return <div>loading...</div>;
    }

    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`; // ES6 sugar
    // const url = 'https://www.youtube.com/embed/' + videoId;

    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );
};

export default VideoDetail;