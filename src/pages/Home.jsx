import React from 'react';
import Hero from "../components/Hero";
import Analytics from "../components/Analytics";
import Newsletter from '../components/Newsletter';
import Card from '../components/Cards';
import Footer from '../components/Footer';



export default function Homepage(){
    return(
      
        <div>
            <Hero/>
            <Analytics/>
            <Newsletter/>
            <Card />
            <Footer />

           

        </div>
       

    )
} 

