import React from 'react'
import { useRef, useEffect } from 'react'
import Star from './star'

export function CanvasStar() {
  const bgRef = useRef(null)
  const starRef = useRef(null
  )
  useEffect(() => {
    const tempArr = [];
    for (let i = 0; i < 50; i++) {
      const star = new Star(
        Math.random() * 1000,
        Math.random() * 1000,
        Math.random() * 3,
        Math.random(),
        Math.random()
      );
      tempArr.push(star);
    }
    starRef.current = tempArr;
  }, []);

  useEffect(() => {
    const canvas = bgRef.current;
    const ctx = canvas.getContext('2d');
    let starAnimation: any;
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      starRef.current.forEach((item, index) => {
        item.draw(ctx);
        item.move();
        for (let i = index + 1; i < starRef.current.length; i++) {
          if (
            Math.abs(item.x - starRef.current[i].x) < 120 &&
            Math.abs(item.y - starRef.current[i].y) < 120
          ) {
            item.connectLine(starRef.current[i].x, starRef.current[i].y, ctx);
          }
        }
      });

      starAnimation = requestAnimationFrame(render);
    };
    render();
    return () => {
      cancelAnimationFrame(starAnimation);
    };
  }, []);
  return (
    <>
      <canvas width={1000} height={1000} ref={bgRef} style={{ background: 'black' }}></canvas>
    </>
  )
} 