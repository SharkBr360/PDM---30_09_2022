import React from 'react'

const imagem = ({pic, alt}) => {
  return (
    <div>
        <img src={pic} alt={alt} />
    </div>
  )
}

export default imagem