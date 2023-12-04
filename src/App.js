import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (

        <div className=' w-[100vw] h-[100vh] overflow-hidden bg-[#090322] text-white'>
            
            <div>
                <Navbar />    
            </div>

            <div>
                {/* hero section */}
                <Hero />
            </div>

        </div>
  );
}

export default App;
