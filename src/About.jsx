import { useState } from "react";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import './About.css'

function About() {
  return (
    <>
      <Navigation />
      <div style={{width: "calc(300px + 20vw)", margin: "auto", fontSize: "1.45rem", textAlign: "justify"}}>
        <p style={{marginBottom: "40px"}}>We are Mean Time Management - a think tank/para-intelligence agency covering current issues related to business, finance, labour, time management, technology, climate change, and their materialities as they unite under the issue of time and timeliness in and around the meridian line. </p>
        <p style={{marginBottom: "40px"}}>The rationale for taking this form is, mainly, that we see quite a lot of research potential in the intersection of these – admittedly very broad – themes, so we are constructing a research platform that can both act as a performance – co-opting some of the style of those in power – as well as an actual site for research and production of theory. In a way, it is also an exercise in publishing and scientific representation.</p>
        <p style={{marginBottom: "40px"}}>Walking through and around Canary Wharf (as we are about to do), one of the world's major financial centres, it becomes obvious that there is an obsession with time – clocks as artworks, clocks everywhere, a dominant business rhythm, in our walks previously we even found a dispenser that gives out poems according to available reading time – 1, 3 and 5 minutes. The structuring and control of time seeps into the deep psychogeography of the place – notwithstanding its closeness to Greenwich, the historic, trade-linked locus of time commensuration, arguably marking the foundation of the abstractions that are to come in 'advanced' capitalism. Under the phantom of the laser that traces the fictitious border between East and West – measured on the model movement of a fictitious sun – there now stands this privatised, international, neutralised Island of Capital, marking the development of time as uncoupled from clockworks of old – digital, and accelerated. </p>

      </div>
      <Footer />
    </>
  )
}

export default About
