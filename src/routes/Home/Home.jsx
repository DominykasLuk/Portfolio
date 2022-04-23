import React from 'react'
import Header from '../../components/home/header/Header'
import Nav from '../../components/home/nav/Nav'
import About from '../../components/home/about/About'
import Experience from '../../components/home/experience/Experience'
import Services from '../../components/home/services/Services'
import Portfolio from '../../components/home/portfolio/Portfolio'
import Testimonials from '../../components/home/testimonials/Testimonials'
import Contact from '../../components/home/contact/Contact'
import Footer from '../../components/home/footer/Footer'

function Home() {
    return (
        <>
            <Header />
            <Nav />
            <About />
            <Experience />
            <Services />
            <Portfolio />
            <Testimonials />
            <Contact />
            <Footer />
        </>
    )
}

export default Home