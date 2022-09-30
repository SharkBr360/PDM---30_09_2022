import React from 'react'
import Imagem from './imagem'

const ListaImagens = ({pics}) => {
    return (
        pics.map((pic, key) =>(
            <Imagem
            pic={pic.src.small}
            alt={pic.alt}
            />
        ))
    )
}

export default ListaImagens