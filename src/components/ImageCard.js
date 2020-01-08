import React from "react"


export default function ImageCard(props){
    return (
        <div>
           <h1 className="title">{props.title}</h1>
           <h5 className="date">{props.date}</h5>
           <img className="nasa" src={props.hdurl} alt="nasa"/>
           <h5 className="exp">{props.explanation}</h5>
         </div>

          )
}