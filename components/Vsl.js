import React from 'react';
import VideoPlayer from './VideoPlayer';
import Link from 'next/link';
const Vsl = () =>{




  return(
    <>
    <section id="vsl" className="py-12">
 
     <div className=" w-full  mx-auto text-center ">
     
     <h2 className='font-semibold text-base md:text-lg lg:text-xl'>Toque o player abaixo</h2>
            <div className=" z-10">
        
              <VideoPlayer/>
              
            </div>
            <Link href='/#features' className="z-10 my-8 text-sm font-medium text-gray-500">
              Sem tempo ou paciência pra video? Role pra <span className='font-bold text-lg animate-bounce'> BAIXO </span>.
            </Link>
            
      </div>
      
    </section>
    </>
  )
}

export default Vsl