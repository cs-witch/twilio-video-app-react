import React, { useEffect, useRef } from 'react';
import { styled } from '@material-ui/core/styles';

const Canvas = styled('canvas')({
  width: '100%',
  height: '100%',
});

export default function CanvasTrack() {
  const canvasRef = useRef<HTMLCanvasElement>(null!);
  // TODO: attach to track here?
  const style = {
    border: '1px',
    zIndex: 10,
  };

  useEffect(() => {
    const canvas: HTMLCanvasElement = canvasRef.current;
    const ctx = canvas.getContext('2d');

    if (ctx !== null) {
      // draw function
      ctx.fillStyle = 'green';
      ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    } else {
      console.error('error drawing to canvas, no context found.');
    }
  }, []);

  return <Canvas id="canvas" ref={canvasRef} style={style} />;
}
