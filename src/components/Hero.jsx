import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


const Hero = () => {
    useGSAP(()=>{
        gsap.to('#hero', { opacity:1 })

    },[]);

    return(
        <section className="w-full nav-height bg-black relative">
            <div className="h-5/6 w-full flex-col">
            <p id="hero" className="hero-title">Transforming MR Operations with AI-Powered, Scalable Workflows</p>

            </div>

        </section>
    )
}

export default Hero;