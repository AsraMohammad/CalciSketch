import { Button } from '@/components/ui/button';
import { SWATCHES } from '@/constants';
import { ColorSwatch, Group } from '@mantine/core';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';

interface Response {
  expr: string;
  result: string;
  assign: boolean;
}
interface GeneratedResult {
  expression: string;
  answer: string;
}

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState('rgb(255, 255, 255)'); // Fixed parentheses
  const [reset, setReset] = useState(false);
  const [result, setResult] = useState<GeneratedResult>();
  const [dictOfVars, setDictOfVars] = useState({});

  // useEffect for resetting the canvas
  useEffect(() => {
    if (reset) {
      resetCanvas();
      setReset(false);
    }
  }, [reset]);

  // useEffect to set up the canvas context
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight - canvas.offsetTop;
        ctx.lineCap = 'round';
        ctx.lineWidth = 3;
      }
    }
  }, []);

  // Define the sendData function inside the component
  const sendData = async () => {
    const canvas = canvasRef.current;
    if (canvas) {
      console.log('Sending data...', '${import.meta.env.VITE_API_URL}/calculate');
      const response = await axios({
        method: 'post',
        url: `${import.meta.env.VITE_API_URL}/calculate`, // Correct template literal
        data: {
          image: canvas.toDataURL('image/png'),
          dict_of_vars: dictOfVars,
        },
      });
      const respData = response.data;
      console.log('Response: ', respData);
    }
  };

  // Reset the canvas
  const resetCanvas = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }
  };

  // Start drawing on mouse down
  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.style.background = 'black'; // Optional: Can remove if you want a transparent background
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.beginPath();
        ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
        setIsDrawing(true);
      }
    }
  };

  // Stop drawing on mouse up or leave
  const stopDrawing = () => {
    setIsDrawing(false);
  };

  // Draw function for continuous drawing
  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.strokeStyle = color;
        ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
        ctx.stroke();
      }
    }
  };

  return (
    <> {/* Correct fragment syntax */}
      <div className='grid grid-cols-3 gap-2'>
        <Button
          onClick={() => setReset(true)}
          className='z-20 bg-black text-white'
          variant='default'
          color='black'
        >
          Reset
        </Button>
        <Group className='z-20'>
          {SWATCHES.map((swatchColor: string) => (
            <ColorSwatch
              key={swatchColor}
              color={swatchColor}
              onClick={() => setColor(swatchColor)}
            />
          ))}
        </Group>
        <Button
          onClick={sendData}
          className='z-20 bg-black text-white'
          variant='default'
          color='black'
        >
          Calculate
        </Button>
      </div>
      <canvas
        ref={canvasRef}
        id="canvas"
        className="absolute top-0 left-0 w-full h-full"
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
      />
    </> // Close fragment properly
  );
}
