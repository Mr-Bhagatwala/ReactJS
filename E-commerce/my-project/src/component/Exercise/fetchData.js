export const ExerciseOptions = {
    method: 'GET',
    // url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/back',
    params: {limit: '10'},
    headers: {
      'X-RapidAPI-Key': '0e9d4cfcf7msh8e789a5b8c822ddp1d87d5jsnca4de8823a08',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };


export const fetchData = async(url,options)=>{
    const response = await fetch(url,options);
    const data = await response.json();

    return data;
}