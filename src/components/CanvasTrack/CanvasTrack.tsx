import React, { useEffect, useRef } from 'react';
import useCanvas from '../../hooks/useCanvas/useCanvas';
import { styled } from '@material-ui/core/styles';

//canvas should be getting the videoref and attaching a canvas element to it
// TODO: toggle on/off
type Canvas = {
  context?: RenderingContext | null;
};
const Canvas = styled('canvas')({
  width: '100%',
  height: '100%',
  // position: 'absolute',
  // z-index: '10',
});

// console.log(typeof );
export default function CanvasTrack() {
  const canvasRef = useRef<HTMLCanvasElement>(null!);
  // TODO: attach to track here?

  const c = document.getElementById('canvas');
  console.log(c);

  const style = {
    border: '1px',
    // backgroundColor: 'red',
    zIndex: 10,
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    //Our first draw
    // @ts-ignore
    context.fillStyle = 'green';
    // @ts-ignore
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
  }, []);

  return <Canvas id="canvas" ref={canvasRef} style={style} />;
}
