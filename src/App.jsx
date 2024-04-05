import Navbar from './Components/Navbar/Navbar'
import "./App.css"
// import Sustainability from './Pages/Sustainability/Sustainability'
import Commitments from './Pages/Sustainability/Commitments/Commitments'
function App() {

  return (
    <>
    <div className="app-container">
    <Navbar/>
    {/* <Sustainability/> */}
    <Commitments/>
    </div>
     
    </>
  )
}

export default App
