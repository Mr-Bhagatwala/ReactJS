import React from 'react'
import { useEffect ,useState } from 'react'
// import { Pagination } from '@mui/material/Pagination'
import {Box , Stack ,Typography} from '@mui/material'
import {ExerciseOptions , fetchData} from "./fetchData"

const ExerciseShow = () => {
    const [Search , setSearch] = useState('')
    const handleSearch  = async ()=>{
        const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPart',ExerciseOptions);

        console.log(exerciseData)
    }

  return (
    <>
      
    </>
  )
}

export default ExerciseShow
