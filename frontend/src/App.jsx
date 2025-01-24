import React from 'react'
import './App.css'
import { setTheme } from './store/themeSlice.js'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";

function App() {
  const dispatch = useDispatch()
  const theme = useSelector((state) => state.theme.theme) 

  const handleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    dispatch(setTheme(newTheme))
  }

  return (
    <div className={`w-full h-full ${theme === 'dark' ? 'dark:bg-custom-black dark:text-white' : ''}`}>
      <Button variant="outlined" onClick={handleTheme} className='mt-4'>
        {theme === 'light' ? <IoMoonOutline /> : <IoSunnyOutline />}
      </Button>
      <Outlet />
    </div>
  )
}

export default App