import React from "react";
import "./App.css";
import Image from "./components/Image"
import ImageCard from "./components/ImageCard"

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun !
      </p>
      <Image />
      <ImageCard />
    </div>
  );
}

export default App;
