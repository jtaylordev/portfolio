import { Link } from "react-router-dom";

function App() {

  return (
    <>
      <h1>JT_DEV Portfolio</h1>
        <div>
            <Link to="/home">HOME</Link>
            <Link to="/contact"><button>CONTACT</button></Link>
            <Link to="/projects"><button>PROJECTS</button></Link>
        </div>
    </>
  )
}

export default App
