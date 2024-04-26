import { useState,useCallback } from 'react'

import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed,setnumberAllowed]=useState(false);
  const [charactersAllowed,setcharactersAllowed]=useState(false)
  const [password,setPasswrod]=usestate("")
    const passwordGenerator= useCallback(()=>{
let pass=""
let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
if(numberAllowed) str+="1234567890"
if(charactersAllowed) str+="~!@#$%^&*()_+{}[]\|;:><,.?/`"
for (let i = 1; i <= array.length; i++) {
  
 
  let char= Math.floor(Math.random()*str.length+1)//random index picker//
  pass=str.charAt(char);


}
setPasswrod(pass)




    }, [length,numberAllowed,charactersAllowed,setPasswrod])

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4
     '>TailWind test</h1>
    </>
  )
}

export default App
