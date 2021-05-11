import React, { useState } from 'react'
import HeroSection from '../compoments/HeroSection';
import Navbar from '../compoments/Navbar'
import Sidebar from '../compoments/Sidebar'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
        </>
    )
}

export default Home
