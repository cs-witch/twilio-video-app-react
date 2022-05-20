import { styled } from '@material-ui/core/styles';
import React, { useEffect } from 'react';
import { IVideoTrack } from '../../types';

const Canvas = styled('canvas')({
  width: '100%',
  height: '100%',
});

interface CanvasProps {
  track: IVideoTrack;
}

export default function CanvasTrack({ track }: CanvasProps) {
  // TODO: attach to track here?
  const style = {
    border: '1px',
    position: 'absolute' as const,
  };

  const computeFrame = (ctx1: any, video1: any) => {
    ctx1.drawImage(video1, 0, 0, video1.videoWidth / 2, video1.videoHeight / 2);
  };

  useEffect(() => {
    const canvas = document.getElementById('canvas') as any;
    const ctx = canvas.getContext('2d', { alpha: true });
    const video = document.getElementById('video') as any;

    const timerCallback = (ctx1: any, video1: any) => {
      computeFrame(ctx1, video1);
      setTimeout(() => {
        timerCallback(ctx1, video1);
      }, 0);
    };

    if (video && ctx) {
      // drawing video into canvas context
      ctx.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
      timerCallback(ctx, video);
    } else {
      console.error('error drawing to canvas, no context found.');
    }
  }, []);

  return <Canvas id="canvas" style={style} />;
}
