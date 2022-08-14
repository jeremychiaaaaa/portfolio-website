import { useState, createContext,useContext,useEffect } from "react";
import NavBar from "./Components/NavBar";
import HomePage from "./Components/HomePage";
import AboutPage from "./Components/AboutPage";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
export const BlurContext = createContext()
function App() {
  const context = useContext(BlurContext)
  const [openPhoneMenu,setOpenPhoneMenu] = useState(false)
  const[phone,setPhone] = useState(window.matchMedia("(max-width: 768px)").matches)
  useEffect(() => {
    window.matchMedia("(max-width: 1060px)").addEventListener('change', e => setPhone(e.matches))
  },[])
  return (
    <div >
    <BlurContext.Provider value={{openPhoneMenu, setOpenPhoneMenu}}>
      <NavBar/>
      <HomePage/>
      <AboutPage/>
      <Skills/>
      <Projects />
      <Contact />
    </BlurContext.Provider>
    </div>
  );
}

export default App;
