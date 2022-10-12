import logo from './logo.svg';
import './App.css';
import Confetti from 'react-confetti'
import useWindowSize from './useWindowSize';
import Countdown from 'react-countdown-simple';
import { useSprite } from 'react-sprite-animator'
import ditto_image from './assets/img/cbimage.png'
import { useEffect, useState } from 'react';
import heman from './assets/music/heman.mp3'

function App() {
  const { width, height } = useWindowSize()
  const audio = new Audio(heman);
  audio.loop = true;
  audio.autoplay= true
  useEffect(() => {
   
    
  }, [])

  const renderer = ({ days, hours, minutes, seconds }) =>{
    return(
      <h3 className='counter'>{`${days} day ${hours} hours ${minutes} minutes ${seconds} seconds `}</h3>
    )
  }

 
  

 
  
  const oneHour = new Date('15 October 2022 19:00 UTC').toISOString();
  const frame_w = 700/4, frame_h =154, sheet_w = 700, sheet_h=154, scale = 1;
  const styles = useSprite({
    sprite: ditto64,
    width: frame_w,
    height: frame_h,
    frame:4,
    fps:10,
    scale:1
  })

 

  return (
   <div className='m_container' style={{width:width, height:height}}>
        <div style={{width:'100%', height:'100%', zIndex:1, position:'absolute', opacity:0.5}}>
          <Confetti
            width={width}
            height={height}
            gravity={0.03}
          />
        </div>
        <div style={{width:'100%', height:'100%', zIndex:2, justifyContent:'center', alignItems:'center',  display:'flex'}}>
          <div className='counter'>
            <h1 >Elenuki's day</h1>
            <p className='date'>15 de Octubre a las 7 pm</p>
            <Countdown targetDate={oneHour} renderer={renderer} />
            <h4 >Until Elenukis birtay in su ksita</h4>
            <div style={{fontSize:10}}>si no sabes su dirección preguntasela, por <br /> motivos de security no pondremos esa información</div>
            <div style={{width:'100%', display:'flex', justifyContent:'center',alignItems:'center',height:300}}>
              <div style={styles} />
            </div>
            {/* <div className='cube'/> */}
            
            
          </div>
        </div>
         
   </div>
  );
}

export default App;

const ditto64 ="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAArwAAACaCAMAAAB8DmtzAAAADFBMVEX///+4YOA4ODj4+PhASPNeAAAABHRSTlMA////sy1AiAAAAAlwSFlzAAALEwAACxMBAJqcGAAABO1pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMi0xMC0xMVQyMjowMzo1Mi0wNTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjItMTAtMTFUMjI6MDg6MjgtMDU6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMTAtMTFUMjI6MDg6MjgtMDU6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIyIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjE2MzBjNmY2LTZiZTAtYjY0NC05MzQyLTkxZTcyNmUxNDA1NyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxNjMwYzZmNi02YmUwLWI2NDQtOTM0Mi05MWU3MjZlMTQwNTciIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoxNjMwYzZmNi02YmUwLWI2NDQtOTM0Mi05MWU3MjZlMTQwNTciPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjE2MzBjNmY2LTZiZTAtYjY0NC05MzQyLTkxZTcyNmUxNDA1NyIgc3RFdnQ6d2hlbj0iMjAyMi0xMC0xMVQyMjowMzo1Mi0wNTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pj59pqcAAAReSURBVHic7d3bcpswFAVQJdP//+S0D54GSmSJO2y61qODbcXZ0XCkYygFAACAW/q4egDw12ftwa+Fx0MC4SWW8BJLeIklvMSy2sAdfJZSyu/aT14Jra45mHmJJbzEEl5iCS+x5hVs04jPOn1u7OvBt/e12shHKT8TZeYllvASS3iJJbzE+tU74LOUf8q6r+8HvyYHTc+5pwedYvhnVC/exHGFvJmXWMJLLOEllvASS3iJ1doeHtYQqgXj6KnvN/ca3Zj7GQ1vGMl0haTxpPcHPcJ1KzDVVahp5Ho7w8OTbA/zGMJLLOEllvASq16wvSL9u/ZgKWX5if/wLnuXDPObQRsPTuvPhNqtV2+uKmL3M03QhvCUUhRsPI3wEkt4iSW8xOr28w42nOJXT9z3eellb9/4Z50edMuqbRh+tXt6pFrEHv07Tod38NRo5iWW8BJLeIklvMT6UbDN2rJar/7Kq6qHjSNtvN20DXQ49Lo+yt6W1XF/soZZVWIp5aAPysxLLOEllvASS3iJJbzE+tHqevBqQ0O1ZbPhvJEOH1L1y4RbK+nGEsas/db1779q+NVO4aPp5+VZhJdYwkss4SXWgn7enldZs/4cftiUvVsr7fvfabSRvGrQ7y9s3HvnSz6jK6p5d8DkiYSXWMJLLOEl1o+CbbhhytIz80u25XK9L34aH+R1pewetdrWkn7KzEss4SWW8BJLeIklvMTacXt4lh0LzmFdZNXL7V36XmHD77BLJ/JCe3/YZl5iCS+xhJdYwkusesH2OpE/onuz8XInlxC9kay/MePe3g/nPuXmIeVv79M18xJLeIklvMQSXmLt/gXMwSnVxPr244aDR750uEeUQYurzM5+5i0uDwwxhJdYwkss4SWW8BKrtdqwsGG2eu3axs/3Nn9Tdzi8buFCwIbLPZ3siibeA3Ng5iWW8BJLeIklvMQ68AuY5+0YjtqP57tuQ3PD90Wr7tPVW0rZqUCbVVqaeYklvMQSXmIJL7HOvmJOw31vqNIxujnlcSO/WVXWcN5IzbzEEl5iCS+xhJdYwkusG602hOstllxx69OpDe3Hdxj+lJmXWMJLLOEllvASq1WwXXGOvqqk2PtyT892ym72Kcy8xBJeYgkvsYSXWLfcYXtOSfEE9y2HzbzEEl5iCS+xhJdYwkus+mrDfQvMqTu2mXISMy+xhJdYwkss4SXWLbeHH2l0o9lSyuIqs3F93qnOKy+4fet15fCsa3+ZeYklvMQSXmIJL7HSC7ZRGTSrTlloQbEy6xYgo58vnDYWNDZ3Xvk5LdJmXmIJL7GEl1jCS6xWGbNxf6VXIVVfefSkVRfhfG9VnbLgf/s5ddDgDg2njQ1BMy+xhJdYwkss4SWW8BKru2m6Pt298rv6yk+s2XNZbYBjCC+xhJdYwkusVV2u/E96XxptRGhjrddrkTbzEkt4iSW8xBJeYinYmG/ppujGqXHVHi0kEF5iCS+xhJdYwgsAAADs6w/7Ir0WvyCSJQAAAABJRU5ErkJggg=="