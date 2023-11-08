import { useState } from "react";

let API_URL = "https://fsa-jwt-practice.herokuapp.com/signup"

function Authenticate( { token }){
const [successMessage, setSuccessMessage] = useState("");
const [error, setError] = useState("")

async function handleClick(){
  try{
    const response = await fetch(API_URL,{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    setSuccessMessage("Token authenticated successfully")
  }catch(err){
   setError(error.message)
  }
}

  return (
    <div>
      <h2>Authenticate</h2>
      {successMessage && <p>{successMessage}</p>}
      {error && <p>{error}</p>}
      <button onClick={handleClick}>Authenticate Token!</button>
    </div>
  )
}

export default Authenticate