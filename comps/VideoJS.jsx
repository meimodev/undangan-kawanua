import {useRef, useEffect} from "react";

export const VideoJS = (props) => {

    const videoRef = useRef(null);
    const playerRef = useRef(null);
    const {options, onReady} = props;

    useEffect(() => {

        if (!playerRef.current) {
            const videoElement = videoRef.current;
            if (!videoElement) return;

            const player = videojs(videoElement, options, () => {
                console.log("player is ready");
                onReady && onReady(player);
            });

        } else {
            // you can update player here [update player through props]
            // const player = playerRef.current;
            // player.autoplay(options.autoplay);
            // player.src(options.sources);
        }

    }, [onReady, options, videoRef]);

    useEffect(() => {
        const player = playerRef.current;

        return () => {
            if (player) {
                player.dispose();
                playerRef.current = null;
            }
        };
    }, [playerRef]);

    return (
        <div data-vjs-player="">
            <video ref={videoRef} className="video-js vjs-big-play-centered"/>
        </div>
    );
}

export default VideoJS;