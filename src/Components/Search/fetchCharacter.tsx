import axios from 'axios'
import React from 'react'
import Search from './search'


const Fetch = () => {

    const [values, setValues] = React.useState([])

    const fetchData = () =>{
        axios.get("https://www.anapioficeandfire.com/api/characters")
        .then((response) => {setValues(response.data);
            console.log(response.data)})
    }

    React.useEffect(()=>{
        fetchData()
    },[])

  return (
    <div>
        <Search CHAR={values}/>
    </div>
  )
}

export default Fetch