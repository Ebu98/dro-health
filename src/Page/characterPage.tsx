import React, {useState, useEffect} from "react";
import axios from "axios";
import CharacterList from "../Components/Characters/characterList";


function Char() {
    const [characters, setCharacters] = useState<any[]>([]);

    const fetchCharactersData = () => {
        
        axios
          .get("https://www.anapioficeandfire.com/api/characters")
          .then((response) => {
            setCharacters(response.data);
            console.log(response.data)
          })
          .catch((error) => console.log(error));
      };
    
      useEffect(() => {
        fetchCharactersData();
      }, []);
  return (
      <div>
          <CharacterList characters={characters}/>
      </div>
  );
}

export default Char;
