
import './App.css'
import Experties from './Components/Experties/Experties'
import Footer from './Components/Footer/Footer'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import Projects from './Components/Projects/Projects'

function App() {


  return (
    <>

    
      <Navbar></Navbar>
      <Hero></Hero>
      <Experties></Experties>
      {/* <div>
                <h1 className="font-bold md:text-5xl text-center pt-2 md:pt-7  ">PROJECTS</h1>
            </div> */}
      <Projects></Projects>
      <Footer></Footer>


    </>
  )
}

export default App
