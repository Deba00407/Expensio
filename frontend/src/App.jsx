import React from 'react'
import './App.css'
import { setTheme } from './store/themeSlice.js'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
// import { Button } from '@mui/material'
// import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";

function App() {
  const dispatch = useDispatch()
  const theme = useSelector((state) => state.theme.theme)

  const handleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    dispatch(setTheme(newTheme))
  }

  return (
    <div className={`w-full h-full ${theme === 'dark' ? 'dark:bg-custom-black dark:text-white' : ''}`}>
      {/* <Button
        variant="outlined"
        onClick={handleTheme}
        sx={{
          borderRadius: '50%',
          minWidth: 50,
          minHeight: 50,
        }}
      >
        {theme === 'light' ? <IoMoonOutline size={'20px'} /> : <IoSunnyOutline size={'20px'} />}
      </Button> */}

      <Outlet />
    </div>
  )
}

export default App