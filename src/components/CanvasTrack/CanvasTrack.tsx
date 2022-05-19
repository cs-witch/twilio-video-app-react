import React, { useEffect, useRef, useState } from 'react';
import { styled } from '@material-ui/core/styles';
import useMediaStreamTrack from '../../hooks/useMediaStreamTrack/useMediaStreamTrack';
import VideoTrack from '../VideoTrack/VideoTrack';
import { AudioTrack, Track } from 'twilio-video';
import { IVideoTrack } from '../../types';

const Canvas = styled('canvas')({
  width: '100%',
  height: '100%',
});

interface CanvasProps {
  track: IVideoTrack;
  // isLocal?: boolean;
  // priority?: Track.Priority | null;
}

export default function CanvasTrack({ track }: CanvasProps) {
  // const animate = (time: number) => {
  // if (previousTimeRef.current != undefined) {
  //   const deltaTime = time - previousTimeRef.current;

  //     // Pass on a function to the setter of the state
  //     // to make sure we always have the latest state
  //     setFrames(prevCount => (prevCount + deltaTime * 0.01) % 100);
  //   }
  //   previousTimeRef.current = time;
  //   requestRef.current = requestAnimationFrame(animate);
  // }

  // useEffect(() => {
  //   requestRef.current = requestAnimationFrame(animate);
  //   return () => cancelAnimationFrame(requestRef.current);
  // }, []); // Make sure the effect runs only once
  // TODO: attach to track here?
  const style = {
    border: '1px',
    // zIndex: 10,
    position: 'absolute' as const,
  };

  function computeFrame(ctx1: any, video1: any) {
    ctx1.drawImage(video1, 0, 0, video1.videoWidth / 2, video1.videoHeight / 2);
  }
  // @ts-ignore
  function timerCallback(ctx1, video1: any) {
    computeFrame(ctx1, video1);
    setTimeout(() => {
      timerCallback(ctx1, video1);
    }, 0);
  }
  useEffect(() => {
    const canvas = document.getElementById('canvas') as any;
    const ctx = canvas.getContext('2d', { alpha: true });
    const video = document.getElementById('video') as any;

    // let canvasStream = canvas.captureStream(50);

    if (video && ctx) {
      // drawing video into canvas context
      ctx.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
      timerCallback(ctx, video);

      // ctx.fillStyle = '#ff0000';
      // ctx.fillRect(0, 0, 100, 100);
      // request animation frames, <or> pass videoTrack as prop so CanvasT rerenders
      // using a timeout to compute frames
    } else {
      console.error('error drawing to canvas, no context found.');
    }
  }, [track]); //

  return <Canvas id="canvas" style={style} />;
}
