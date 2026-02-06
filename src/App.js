import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from "./Screens/HomeScreen.jsx";
import DetailScreen from "./Screens/DetailScreen.jsx";

function App() {
  return (
    <>
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen />} exact />
            <Route path='/projects/:id' element={<DetailScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
    </>
  );
}

export default App;
