import Navbar from "./components/Navbar/Navbar"
import Main from "./components/Main/Main"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    // These are fragments. A way to write several elements without adding one extra as a container
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  )
}

export default App