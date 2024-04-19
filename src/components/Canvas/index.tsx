import { useRef, useEffect, ComponentProps } from 'react';

interface CanvasProps extends ComponentProps<'canvas'> {
  draw: (ctx: CanvasRenderingContext2D) => void;
}

export const Canvas: React.FC<CanvasProps> = ({ draw, ...rest }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        draw(ctx);
      }
    }
  }, [draw]);

  return <canvas ref={canvasRef} {...rest} />;
};

export default Canvas;
