import About from "./Components/About"
import ContactSection from "./Components/ContactSection"
import  Course from "./Components/Courses"
import Expertise from "./Components/Expertise"
import Footer from "./Components/Footer"
import HeroSection from "./Components/HeroSection"
import Mission from "./Components/Mission"
import Navbar from "./Components/Navbar"
import Review from "./Components/Review"



function App() {
  
  return (
    <main className="overflow-y-hidden text-neutral-200 antialiased">
      <HeroSection/>
      <Navbar/>
      <Course/>
      <About/>
      <Mission/>
      <Expertise/>
      <Review/>
      <ContactSection/>
      <Footer/>
    </main>
  )
}

export default App