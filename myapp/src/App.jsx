import Sidebar from "./components/Sidebar.jsx"
import Main from "./components/Main.jsx"

import { useState } from 'react'

const App = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('dark_mode') === 'true'
  )

  const toggleDark = () => {
    const newMode = !darkMode
    setDarkMode(newMode)
    localStorage.setItem('dark_mode', newMode)
  }

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="flex gap-5 selection:bg-[#a5d9b3] bg-[#E0DCBF] dark:bg-[#0a0a0a]">
        <Sidebar darkMode={darkMode} toggleDark={toggleDark} setDarkMode={setDarkMode} />
        <Main darkMode={darkMode} toggleDark={toggleDark} setDarkMode={setDarkMode} />
      </div>
    </div>
  )
}

export default App