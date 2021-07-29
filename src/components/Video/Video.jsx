import React from 'react';
// import ReactDOM from 'react-dom';
import { useStyles } from './Style.js';

function Video(props) {

    const classes = useStyles();

    const handleMute = (e) => {
        e.preventDefault();
        e.target.muted = !e.target.muted;
    }

    // const handleAutoScroll = (e) => {
    //     let next = ReactDOM.findDOMNode(e.target).parentNode.nextSibling;
    //     console.log(next);
    //     if (next) {
    //         next.scrollIntoView({ behaviour: 'smooth' });
    //         e.target.muted = true;
    //     }
    // }

    return (
        <>
            <video
                className={classes.videoStyles}
                // onEnded={handleAutoScroll}
                onClick={handleMute}
                controls
                muted='muted'
                type='video/mp4'
                autoPlay
            >
                <source
                    src={props.source}
                    type='video/webm'
                />
            </video>
        </>
    );
}

export default Video;
