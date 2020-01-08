import React, {useState, useEffect} from "react"
import axios from "axios"
import ImageCard from "./ImageCard"

export default function Image(){

    const [image, setImage] = useState([])

  useEffect(() => {

  axios
       .get(`https://api.nasa.gov/planetary/apod?api_key=1LpQz1CUGafnlruGjK2cJ5LaTDSCF3WrP7PXygjg`)
       .then((res) => {
           //console.log(res.data)
           setImage(res.data)
        })
       .catch( (err) => console.log("no image found", err))

  },[])

  return (
      <ImageCard 
      title = {image.title}
      date ={image.date}
      
      hdurl = {image.hdurl}
      explanation = {image.explanation}
      />
  )
}