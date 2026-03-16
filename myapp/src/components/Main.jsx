import Header from "./Header"
import MobileNav from "./MobileNav"
import Grid from "./Grid"

import { useState } from "react"

const Main = ({ darkMode, setDarkMode, toggleDark }) => {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <main className="flex-1">
      <Header name="Name" navOpen={navOpen} setNavOpen={setNavOpen} />
      <MobileNav navOpen={navOpen} toggleDark={toggleDark} darkMode={darkMode} setDarkMode={setDarkMode} />
      <Grid />
    </main>
  )
}

export default Main