import { Outlet } from "react-router-dom"
import Header from "./component/Header"
import NavBar from "./component/NavBar"
import Footer from "./component/Footer"

const App = () => {
  return (
    <>
      <Header />
      <NavBar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default App