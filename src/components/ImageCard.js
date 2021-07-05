import React from "react"
import styled from 'styled-components'

const H1 = styled.h1`
color: white;
font-size: 50px;
margin-left: 700px;

`
const Img = styled.img`
  max-width: 60%;
  margin-left: 450px;
  
`
const Body = styled.body`
background-image: url("https://serving.photos.photobox.com/5464082564f25551a03f14ac28dcc22c291c248787623e363318616ba32dc6c87847ca22.jpg");
   font-family: 'Ibarra Real Nova', serif;
   background-repeat:repeat;
 
   
`
const H6 = styled.h6`
   margin-left: 900px;
   color: yellow;  
`

const H5 = styled.h5`
  width: 700px;
  margin-left: 620px;
  color: lightgray;
  font-size: 17px;
  margin-top: 15px;

`

export default function ImageCard(props){
    return (
        
        <Body>
           <H1 className="title">{props.title}</H1>
           <H6 className="date">{props.date}</H6>
           <Img src={props.url}/>
           <H5 className="exp">{props.explanation}</H5>
         </Body>
           
          )
}