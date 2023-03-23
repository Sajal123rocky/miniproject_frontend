import React from 'react'
import { Link } from "react-router-dom";
import MainLayout from '../mainlayout/MainLayout';
import { AiOutlineSearch } from "react-icons/ai";
import Card from "../components/Card"
import project from "../ProjectContract"
import TextField from "@mui/material/TextField";
function Project() {
  function projects(entry){
    return(
      <Card
      key={entry.id}
      name={entry.name}
      img={entry.img}
      />
    );
  }
  const [inputText, setInputText] = React.useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  return (
    <MainLayout>
      <div>
        {/* <input type="text" placeholder={ AiOutlineSearch }></input>
        <button type="submit">search</button> */}
        <h2>Project List</h2>
        {/* {project.map(projects)} */}
        <div className="main">
      <div className="search">
        <TextField
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div>
      {project.map(projects)}
    </div>
        
    </div>
    </MainLayout>
    
  )
}

export default Project