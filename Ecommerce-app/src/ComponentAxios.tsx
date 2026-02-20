import axios from "axios";
import { useState,useEffect } from "react";

interface Voter {
  id: number;
  name: string;
  age: number;
  city: string;
  has_voted: boolean;
}


function ComponentAxios(){
const [voters,setVoters]=useState<Voter[]>([]);
useEffect(()=>{
    axiosVoters();
},[]);

const axiosVoters=async()=>{
    try{
        const response=await axios.get<Voter[]>('http://localhost:4000/voters');
        setVoters(response.data);
        console.log("Voters fetched with Axios:", response.data);

    }catch(err){
        console.error("Error fetching voters with Axios:", err);
    }
}



    return(
        <div className="app-container row">
            <div className="card col-md-4">
                {voters.map((voter: Voter) => (
                    <div key={voter.id} className="voter-card">
                        <h3>Voter Name:{voter.name}</h3>
                        <p>Age: {voter.age}</p>
                        <p>City: {voter.city}</p>
                        <p>Voted: {voter.has_voted ? "Yes" : "No"}</p>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default ComponentAxios;