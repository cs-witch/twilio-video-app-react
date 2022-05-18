import React, { useEffect, useRef } from 'react';
import { styled } from '@material-ui/core/styles';
import useMediaStreamTrack from '../../hooks/useMediaStreamTrack/useMediaStreamTrack';

const Canvas = styled('canvas')({
  width: '100%',
  height: '100%',
});

export default function CanvasTrack() {
  // const canvasRef = useRef<HTMLCanvasElement>(null!);
  // TODO: attach to track here?
  const style = {
    border: '1px',
    zIndex: 10,
    position: 'absolute' as const,
  };

  useEffect(() => {
    // const canvas: HTMLCanvasElement = canvasRef.current;
    const canvas = document.getElementById('canvas') as any;
    const ctx = canvas.getContext('2d', { alpha: true });
    const video = document.getElementById('video') as HTMLCanvasElement;

    if (canvas) {
      let canvasStream = canvas.captureStream(50);
    }

    if (ctx) {
      // drawing video into canvas context
      ctx.drawImage(video, 0, 0, video.width, video.height);
      // ctx.drawImage(video, 0, 0, ctx.canvas.width, ctx.canvas.height);
      // video.videoWidth, video.videoHeight);
      ctx.fillStyle = '#ff0000';
      ctx.fillRect(0, 0, 100, 100);
      // ctx.canvas.width, ctx.canvas.height);
      // request animation frames, <or> pass videoTrack as prop so CanvasT rerenders
    } else {
      console.error('error drawing to canvas, no context found.');
    }
  }, []);

  return <Canvas id="canvas" style={style} />;
}
