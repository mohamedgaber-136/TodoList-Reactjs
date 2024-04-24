import { TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import ModalBtn from "./ModalBtn";
import { TodoDoContext } from "../context/TodoData";
import SelectDropDown from "./SelectDropDown";
export const NavBar = () => {
const {data,setData}=useContext(TodoDoContext)
  const date = new Date().toLocaleDateString();
  
  return (
    <div className="w-100 d-flex align-items-center flex-wrap flex-column flex-md-row">
      <ModalBtn />
      <nav
        className="row p-0  gap-1 justify-content-between align-items-center border w-75 mx-auto my-2 rounded rounded-4 p-2"
        style={{ backgroundColor: "rgba(164, 255, 0, 1)    " }}
      >
        <div className="col-7 flex-fill text-center col-md-3 ">
          <h4> Mohamed Gaber</h4>
        </div>
        <div className="col-7 flex-fill col-md-4 ">
        <SelectDropDown/>
       
        </div>
        <div className="col-7 col-md-3 flex-fill text-center ">
          <h4> {date}</h4>
        </div>
      </nav>
    </div>
  );
};
