import React from 'react'
import { StyledImage } from './styled';

const ImageComponent = ({alt, width, height, ...rests }) => {
  return (
    <StyledImage 
        alt={alt}
        width={width}
        height={height}
        {...rests} 
    />
  )
}

export default ImageComponent;