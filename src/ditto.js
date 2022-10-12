import React, { useState } from 'react'
import { useEffect } from "react";
import useWindowSize from './useWindowSize';

const Ditto = () => {
    const [sprites, setSprites] = useState({})
    const { width, height } = useWindowSize()
    const [protagonist, setProtagonist] = useState()
    const [entities, seteEntities] = useState([])
    const containerWidth=500,containerHeight=500
    useEffect(() => {
        creteImage()
    }, [])

    const creteImage = () => { 
        const characterImage = new Image()
        characterImage.onload = () => {
          const characterSize = { width: 33, height: 29 }
          const characterCount = 4
          const characterSprite = new Sprite(characterImage, Sprite.GeometryHorizontalLinear(characterSize.width, characterSize.height, characterCount))
            
          setSprites({ ditto: characterSprite })
        }
        
        characterImage.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAAAdAgMAAAAWQyy/AAAADFBMVEX///+4YOA4ODj4+PhASPNeAAAAAXRSTlMAQObYZgAAAStJREFUeF6l08FqhEAMBuBhbk6fYyj6Pgmul3pZEN9hWV8i9FgvC3X6PELpe2zP9Y/pyCLLFprLoP83STzo/lv+/ZEoGGwMw10RacmePmML4PfOjyqev6WGKDs/Kth40QiEXInxLPzxle+WHUS8kgoi6vU8zzaobIQB31R4QrU4T9RVKl5ngpheaBP1KlmWLlU4z0iCJioORKxCmzm5nDSJAOx0jxthdEBwzOLIkJyFIEGgQpvVqxSMhVRxQKCiEYhozQtbPV/Fmx6iJE5ErYkWgi8mlOYkEiVZxQRpglUojSZB9wJUTDoxkTeMN4J3ot0JT79CTMifRUmUEtV5803EJcD3+5ScS+MmML+feHBhCcKSWOVvw9s07H+LTdwvL/1Fp9yvaggJUx/WD0e0wREEScedAAAAAElFTkSuQmCC"
      
    }

    const createEntity= () =>{
        const characterSprite = sprites.ditto
        const firstAnimationFrame = characterSprite.frames[0]
        
        const direction = integerValue(0, 1)
        const scale = integerValue(4, 16)
        const opacity = floatValue(0.1, 1.0)
        const translationX = integerValue(400, 1000) * (direction ? 1 : -1)
            
        const containerWidth = width, containerHeight = height
        const intrinsicSize = { width: firstAnimationFrame.width, height: firstAnimationFrame.height }
        
        const size = { width: intrinsicSize.width * scale, height: intrinsicSize.height * scale }
        const origin = { x: (direction ? -size.width : containerWidth), y: integerValue(0, containerHeight - size.height) }
        
        return {
          sprite: characterSprite,
          animationFrameDuration: .085,
          animationFrame: 0,
          time: 0.0,
          speed: { x: translationX, y: 0 },
          size,
          origin,
          opacity,
          intrinsicSize
        }
    }

    const first = () => { 
        if (!protagonist) {
            let _prota = createEntity()
            _prota.speed.x = 0
            _prota.opacity = 1
            
            entities.push(_prota)
            setProtagonist(protagonist)
          }
        if (protagonist) {
            const maximumImageSize = { width: Math.min(containerWidth * .8, 600), height: Math.min(containerHeight * .8, 600) }
            const size = protagonist.intrinsicSize
            
            const xScale = maximumImageSize.width / size.width
            const yScale = maximumImageSize.height / size.height
            const minScale = Math.min(xScale, yScale)
            const scaledSize = { width: size.width * minScale, height: size.height * minScale }
            
            protagonist.size = scaledSize
            protagonist.origin.x = Math.round((containerWidth - scaledSize.width) * .5)
            protagonist.origin.y = Math.round((containerHeight - scaledSize.height) * .5)
          }
    }


    return ( 
        <div>
            
        </div>
    );
}
 
export default Ditto;

class Sprite {
  
    constructor(image, frames){
      const width = image.width, height = image.height
    
      let canvas = document.createElement("canvas")
      canvas.width = width
      canvas.height = height
      
      let context = canvas.getContext("2d")
      context.drawImage(image, 0, 0)
      
      this.canvas = canvas
      this.context = context
      this.frames = frames
    }
    
    drawFrame(ctx, frame, dx, dy, targetWidth, targetHeight){    
      const { x, y, width, height } = this.frames[frame]
      
      dx |= 0
      dy |= 0
      targetWidth |= width
      targetHeight |= height
      
      ctx.drawImage(this.canvas, x, y, width, height, dx, dy, targetWidth, targetHeight)
    } 
}

Sprite.GeometryHorizontalLinear = (width, height, count) => {
    let frames = [];
    
    for (var idx = 0; idx < count; idx += 1) {
      var frame = { x: (width * idx), y: 0, width: width, height: height }
      frames.push(frame)
    }
    
    return frames
}




 function floatValue(min, max) {
    return Math.random() * (max - min) + min
  }
  
   function integerValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
  
   function color() {
    return '#'+Math.floor(Math.random()*16777215).toString(16)
  }
  

 