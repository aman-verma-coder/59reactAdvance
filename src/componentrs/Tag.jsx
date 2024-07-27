import React, { useState,useEffect } from "react";
import axios from "axios";
import Spinner from "./Spinner.jsx";
import useGif from "../hooks/useGif.js";
const API_KEY=import.meta.env.VITE_REACT_APP_GIPHY_API_KEY;
const Tag=()=>{
    const [tag,setTag]=useState('bike');
    const{gif,loading,fetchData}=useGif(tag);
    function changeHandler(event) {
        setTag(event.target.value);
        console.log(tag);
    }
    return(
        <div className="w-1/2 bg-blue-400 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
            <h1 className="mt-[15px] text-2xl underline uppercase font-bold">Random {tag} Gif</h1>
            {loading ?(<Spinner></Spinner>):(<img src={gif} alt="" width="450"/>)}
            <input type="text" className="w-10/12 text-lg py-2 rounded-lg mb-[4px] text-center" onChange={changeHandler} value={tag}/>
            <button onClick={()=>fetchData} className="w-10/12 bg-white opacity-60 text-lg py-2 rounded-lg mb-[20px]">
                Generate
            </button>
        </div>
    )
}
export default Tag;