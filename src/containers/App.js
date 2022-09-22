import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import './App.css';
import Firstsection from '../components/Firstsection';
import Secondsection from '../components/Secondsection';
import Thirdsection from '../components/Thirdsection';
import Finalsection from '../components/Finalsection';

const App = () => {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Firstsection />
                <Secondsection />
                <Thirdsection />
            </main>
            <Finalsection />
        </>
    );
}

export default App;