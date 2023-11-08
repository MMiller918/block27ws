import { useState } from "react"

let API_URL = "https://fsa-jwt-practice.herokuapp.com/signup"

function SignUpForm({ setToken }){
const [ username, setUserName ] = useState("")
const [ password, setPassword ] = useState("")
const [ error, setError ] = useState(null)

async function handleSubmit(event){
  event.preventDefault();
  // console.log("Hello World")

  
  try {
    const response = await fetch(API_URL,{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        password,
      })
    })
    const result = await response.json()
    // console.log(result)
    setToken(result.token)
  }catch(error) {
    setError(error.message);
  }

}


  return (
    <>
    <h2>Sign Up</h2>
    {error && <p>{error}</p>}

    <form onSubmit={handleSubmit}>
      <label>
      Username: <input value={username} onChange={(e) => setUserName(e.target.value)} />
      </label>
      <label>
        Password: <input value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button>Submit</button>
    </form>
  
    </>
  )
}

export default SignUpForm