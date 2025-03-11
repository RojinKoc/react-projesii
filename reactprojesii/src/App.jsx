import Navbar from "./components/navbar"
import PizzaList from "./components/pizzaList"
import Footer from "./components/Footer"

export default function App() {
    return (
      <>
        <Navbar />
        <div className='container'>
          <PizzaList />
          <Footer/>
        </div>
      </>
    )
  }