import React, {useState, useEffect} from "react"
import axios from "axios"
import ImageCard from "./ImageCard"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Image(){

    const [image, setImage] = useState([])

  useEffect(() => {

  axios
       .get(`https://api.nasa.gov/planetary/apod?api_key=1LpQz1CUGafnlruGjK2cJ5LaTDSCF3WrP7PXygjg`)
       .then((response) => {
           //console.log(res.data)
           setImage(response.data)
        })
       .catch( (err) => console.log(err))

  },[])

  return (
      <ImageCard 
      title = {image.title}
      date ={image.date}
      url = {image.url}
      explanation = {image.explanation}
      />
  )
};