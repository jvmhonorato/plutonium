import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';

const VideoPlayer = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const videoRef = useRef(null);

  // Ensure the component only renders on the client
  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (!hasMounted) return;

    const handleTimeUpdate = () => {
      if (videoRef.current && videoRef.current.currentTime >= 300) {
        setShowButton(true);
        videoRef.current.removeEventListener('timeupdate', handleTimeUpdate);
      }
    };

    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener('timeupdate', handleTimeUpdate);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener('timeupdate', handleTimeUpdate);
      }
    };
  }, [hasMounted]);

  if (!hasMounted) return <div className="flex items-center justify-center h-screen">Loading...</div>;

  return (
    <>
           <div
  className="w-full h-full bg-cover bg-center"
  style={{ backgroundImage: "url('/images/blur.png')" }}
>
    <div className="flex flex-col relative items-center justify-center h-screen">

        
      <video ref={videoRef} width="940" controls>
        <source src="caminho-do-seu-video.mp4" type="video/mp4" />
        Seu navegador não suporta a reprodução de vídeo.
      </video>
      

      {showButton && (
        <Link href="/#pricing" className="mt-4">Clique aqui</Link>
      )}
    </div>
    </div>
    </>
  );
};

export default VideoPlayer;