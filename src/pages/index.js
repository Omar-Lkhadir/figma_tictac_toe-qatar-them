// Step 1: Import React
import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import { useEffect } from 'react'
import { Link, Element } from 'react-scroll';
import AOS from "aos";
import "aos/dist/aos.css";
import '../styles/global.css';


// Step 2: Define your component
const IndexPage = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
    AOS.refresh();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  };

  return (
    <main class="scroll-behavior: smooth;">
  
      <div className="b">

       <nav class="bg-[#9A1032] w-[1521px] h-[84px] ">
        <StaticImage class="mt-5 ml-56"
        alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
        src="../images/l1.png"/>

        
      <div class="text-center -mt-10 mr-48  ">
    <a href="/" class="mx-4 text-white text-3xl ">Home</a>
    <select class=" mx-4 text-white text-3xl bg-transparent hover:text-black">
    
    <option ><a href="/" class="mx-4 ">tictactoe</a></option>
    <option><a href="/" class="mx-4 text-black  ">1vs1</a></option>
    <option><a href="/" class="mx-4   ">vs cmp</a></option>
    </select >
    <a href="/" class="mx-4 text-white text-3xl  ">About</a>
    <a href="/" class="mx-4 text-white text-3xl ">Pricing</a>
  </div>
  <div class="flex justify-end mr-14 -mt-12 -space-x-14">
       
    <a href="/ams/sigup" class="text-white text-4xl mr-16 border-white border-solide border-2 flex w-62 pr-8 pl-8 h-16 pt-1 ">Sign Up</a>
    <a href="/signup" class="flex w-62  h-16   p-3 text-[#9A1032] text-4xl relativ bg-white  border-2 pl-8 pr-8  pt-1 ">Sign In</a>
    </div></nav>
    <div class="text-center text-white text-5xl font-black font-['Qatar2022 Arabic'] capitalize leading-[55px] mt-16">
    <p>Play TICTACTOE with</p>
     <p>your Friends and family</p>

    </div>
    <p class="text-center text-white text-2xl font-medium font-['Qatar2022 Arabic'] capitalize tracking-[13.68px] ">While Watching the world cup</p>
        
    <a href="/ans/1vs1" class="block w-40 mx-auto border border-solid border-[#9A1032] rounded-lg py-3 text-[#9A1032] text-2xl font-bold text-center bg-white hover:bg-[#9A1032] hover:text-white transition duration-300 ease-in-out mt-16">Get Started</a>
     
    <StaticImage class="  absolute top-32 left-8 w-12"
        alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
        src="../images/a2.png"/>
    
    <StaticImage class=" absolute bottom-72 right-10 w-11"
        alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
        src="../images/a3.png"/>
    
    <StaticImage class=" absolute bottom-10 left-12 w-40 "
        alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
        src="../images/a4.png"/>
    
    <StaticImage class=" absolute bottom-10 right-10 w-24 "
        alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
        src="../images/a5.png"/>

    <div class=" w-full text-center -mt-24  ">
    <StaticImage 
        alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
        src="../images/l.png"/>
    </div>

    <div class=" flex justify-center items-center mt-32 ml-72 w-44  translate-x-96 ">
    <StaticImage 
        alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
        src="../images/a20.png"/>
    </div>
    </div>
    
     <section className="f ">
      
     <div class="min-h-screen flex items-center justify-center z-0" data-aos="zoom-out-down" >
  <StaticImage
    class=" w-32 mb-40"
    alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
    src="../images/m.png"
  />
</div>
     
      
     <div class="relative  z-40 "   >
  <div class="absolute -mt-80 right-11 w-auto  ">
    <StaticImage
      alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
      src="../images/ad.png"
    />
  </div>
</div>
 </section> 
 <section class="c" >
 <StaticImage class="  absolute  w-8 ml-7 mt-32"
        alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
        src="../images/a2.png"/>

<StaticImage class=" absolute right-8 w-8 mt-20"
        alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
        src="../images/a3.png"/>
      
  
  

 
<div class="relative">

 
  <div class="absolute mt-80 ml-8 z-10  " data-aos="fade-up" >
    <StaticImage
      alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
      src="../images/a10.png"
    />
    <button
     onClick={scrollToTop}
    
    class="bg-yellow-400 text-black font-bold py-2 px-4 rounded -translate-x-20 translate-y-10 z-40">
  <svg class=" w-4 h-4 inline-block align-text-top z-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
  </svg>
</button>
  </div>


  


  <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  mt-96 z-1">
  
    <StaticImage
      class="w-32"
      alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
      src="../images/m.png"
    />
    

  </div>
  

</div>






 </section>
 
 </main>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>

// Step 3: Export your component
export default IndexPage