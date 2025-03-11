import Navbar from "./components/navbar"
import PizzaList from "./components/pizzaList"

export default function App() {
    return (
      <>
        <Navbar />
        <div className='container'>
          <PizzaList />
        </div>
      </>
    )
  }