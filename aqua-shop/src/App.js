import Navbar from "./Navbar"
import Home from "./pages/Home" 
import AllProducts from "./pages/AllProducts"
import Services from "./pages/Services"
import AboutUs from "./pages/AboutUs"
import ContactUs from "./pages/ContactUs" 

function App() {
  let component
  switch (window.location.pathname) {
    case "/home":
      component = <Home />
      break
    case "/allproducts":
      component = <AllProducts />
      break  
    case "/services":
      component = <Services />
      break  
    case "/about":
      component = <AboutUs />
      break
    case "/contactus":
      component = <ContactUs />
      break   
  }
  return(
   <> 
    <Navbar />
    <div className="container">{component}</div>
    
   </>
  )
}

export default App;
