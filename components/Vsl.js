import React from 'react';
import VideoPlayer from './VideoPlayer';
const Vsl = () =>{




  return(
    <>
    <section id="vsl" className="py-12">
     <div className="relative w-full py-10 mx-auto text-center md:py-32 md:my-12 md:w-10/12">
     <h2 className='font-semibold text-base md:text-lg lg:text-xl'>Toque o player abaixo</h2>
            <div className="relative z-10">
      
              <VideoPlayer/>
            </div>
            <p className="z-10 my-8 text-sm font-medium text-gray-500">
              Sem tempo ou paciência pra video? Role pra baixo.
            </p>
            
      </div>
      
    </section>
    </>
  )
}

export default Vsl