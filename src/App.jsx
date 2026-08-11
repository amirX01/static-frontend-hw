import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import './components/Navbar.css';
import './components/Footer.css';

function App() {
  return (
    <div>
      <Navbar />
      <h1>Welcome to Frontend HW - Hello React</h1>
      <Hero />
      <Footer />
    </div>
  )
}
export default App
