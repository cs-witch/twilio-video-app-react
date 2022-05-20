import { render } from '@testing-library/react';
import 'jest-canvas-mock';
import React from 'react';
import CanvasTrack from './CanvasTrack';

//TODO mock the style object

describe.skip('the CanvasTrack component', () => {
  // const canvasRef = useRef<HTMLCanvasElement>(null!);
  // const canvas: HTMLCanvasElement = canvasRef.current;
  // const ctx = canvas.getContext('2d');
  it('should render my styledcomponent', () => {});

  it.skip('should share same dimensions as VideoTrack', () => {
    let a, b;
    a = 1;
    b = 1;
    expect(a + b).toEqual(3);
  });

  it.skip('should draw a rectangle', () => {
    let a, b;
    a = 1;
    b = 1;
    expect(a + b).toEqual(3);
    // expect(ctx.)
  });

  it.skip('should fill the rectangle with a color ', () => {
    let a, b;
    a = 1;
    b = 1;
    expect(a + b).toEqual(3);
    // expect((ctx)=>{ctx.fillStyle})
  });
});
