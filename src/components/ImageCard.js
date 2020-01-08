import React from "react"


export default function ImageCard(props){
    return (
        <div>
          <h1>{props.title}</h1>
          <h6>{props.date}<h6></h6>
          <h5>explanation : {props.explanation}</h5>
          <img src={props.hdurl} alt="nasa1"/>
          <img src={props.url} alt="nasa2" />
         </div>
          )
}