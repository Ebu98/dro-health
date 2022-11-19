import React from 'react'
import './character.scss'

const CharacterList = ({characters}:any) => {

    const sortedData = [...characters].sort((a,b) =>{
        return a.name  
    })
  return (
    <div className="characters">
        <h1>Character List</h1>
        {sortedData.map((character: any) =>(
            <h4>{character.name}</h4>
        ))}
    </div>
  )
}

export default CharacterList