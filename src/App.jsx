import './App.sass';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Home from './components/Home/Home.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Softskills from './components/Softskills/Softskills.jsx';
import About from './components/About/About.jsx';
import Skills from './components/Skills/Skills.jsx';
import Works from './components/Works/Works.jsx';

function App() {

    useEffect(() => {
        AOS.init({
          duration: 1000, // Durée des animations en ms
          once: true,     // Animation se déclenche une seule fois (ne se répète pas lors du scroll)
        });
    }, []);

    return (
        <div className='App'>
            <Navbar />
            <Home />
            <Softskills />
            <About />
            <Skills />
            <Works/>
        </div>
    );
}

export default App;

