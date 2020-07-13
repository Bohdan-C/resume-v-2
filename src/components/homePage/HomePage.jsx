import React from 'react'
import Header from '../header/Header'
import About from '../about/About'
import What from '../what/What'
import Skills from '../skills/Skills'
import Portfolio from '../portfolio/Portfolio'
import Contacts from '../contacts/Contacts'

function HomePage() {
    return (
        <div>
            <Header />
            <About />
            <Skills />
            <Portfolio />
            <Contacts />
        </div>
    )
}

export default HomePage