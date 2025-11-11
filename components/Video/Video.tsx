import React, { useRef, useEffect } from 'react';
import styles from './video.module.css'; 

interface VideoProps {
  mp4Src: string;
  initialSpeed?: number; 
}

const DEFAULT_SPEED = 0.4;

const Video: React.FC<VideoProps> = ({ mp4Src, initialSpeed = DEFAULT_SPEED }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = initialSpeed;
      console.log(`Video playback speed set to: ${initialSpeed}x`);
    }
  }, [initialSpeed]);

  return (
    <video 
      ref={videoRef}
      className={styles.videoPlayer} 
      autoPlay={true} 
      loop={true} 
      muted={true}
    >
      <source src={mp4Src} type="video/mp4" />
      {'Your browser does not support the video tag.'}
    </video>
  );
};

export default Video;