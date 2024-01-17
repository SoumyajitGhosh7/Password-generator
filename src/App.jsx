import { useState, useCallback, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setnumAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [Password, setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numAllowed) str += "1234567890"
    if (charAllowed) str += "~!@#$%^&*()_+=|}{"
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * (str.length-1) + 1)
      pass += str[char]
    }
    setPassword(pass)
  }, [length, numAllowed, charAllowed, setPassword])


  useEffect(()=>{passwordGenerator()},[length, numAllowed, charAllowed, setPassword,passwordGenerator])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-400 bg-gray-700'>
        <h1 className='text-white text-center '>Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={Password}
            className='outline-none w-full py-1 px-3 '
            placeholder='password'
            readOnly
          />
          <button
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range"
            min={8}
            max={20}
            value={length}
            className='cursor-pointer'
            onChange={e => setLength(e.target.value)} />
          <label>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
            defaultChecked={numAllowed}
            onChange={() => setnumAllowed((prev) => !prev)}
          />
          <label>Numbers</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
            defaultChecked={charAllowed}
            onChange={() => setcharAllowed((prev) => !prev)}
          />
          <label>Characters</label>

        </div>
      </div>
     </div>
    </>
  )
}

export default App
