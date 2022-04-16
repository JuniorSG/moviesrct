import "./App.css"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import {} from "react-router"
import MovieDetails from "./pages/MovieDetails";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <Router>
      <header>
        <Link to="/"> <h1 className="title">MOVIES</h1> </Link>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<LandingPage/>}></Route>
          <Route path="/movies/:movieId" element={<MovieDetails/>}></Route>
        </Routes>
      </main>
    </Router>
  )
}

export default App