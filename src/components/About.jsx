import bg from '../assets/aboutbg.svg'

const About = () => {
 

  return (
    <div style={{backgroundImage: `url(${bg})`  }} id="about" className="  w-full bg-no-repeat bg-cover  py-40 ">
      <div className="max-w-7xl mx-auto  flex sm:flex-row flex-col  justify-between items-center p-5  ">
        <div className=" border-l border-t  sm:border-b-0 md:border-b sm:border-r md:border-r-0 border-white text-white py-20 px-20 mb-10">
          <h2 className=" text-9xl font-bold   ">
            2 <span className="text-[#FF2B2B]">.</span>
          </h2>
          <h3 className="text-2xl text-right ">Years <br /> Experience <br /> Working</h3>
        </div>
        <div className='text-white'>
          <h2 className='text-5xl font-bold mb-5 '>Great Experience</h2>
          <p> I have a good experience in web development and software development .  </p>

          <div className='mt-5 px-5 py-10'>
            <p className='text-xl uppercase flex justify-between'>JavaScript.js <span>90%</span></p>
          <input type="range" min={0} max="100" value="90" className=" bg-white h-1.5 range range-xs range-secondary text-white" /> 


            <p className='text-xl uppercase flex justify-between'>React.js <span>80%</span></p>
          <input type="range" min={0} max="100" value="80" className=" bg-white h-1.5 range range-xs range-secondary text-white" /> 

            <p className='text-xl uppercase flex justify-between'>Tailwind CSS <span>95%</span></p>
          <input type="range" min={0} max="100" value="95" className=" bg-white h-1.5 range range-xs range-secondary text-white" /> 

            <p className='text-xl uppercase flex justify-between'>Node.js <span>75%</span></p>
          <input type="range" min={0} max="100" value="75" className=" bg-white h-1.5 range range-xs range-secondary text-white" /> 

            <p className='text-xl uppercase flex justify-between'>Express.js <span>70%</span></p>
          <input type="range" min={0} max="100" value="70" className=" bg-white h-1.5 range range-xs range-secondary text-white" /> 

            <p className='text-xl uppercase flex justify-between'>Firebase <span>70%</span></p>
          <input type="range" min={0} max="100" value="70" className=" bg-white h-1.5 range range-xs range-secondary text-white" /> 

            <p className='text-xl uppercase flex justify-between'>Bootstrap <span>70%</span></p>
          <input type="range" min={0} max="100" value="70" className=" bg-white h-1.5 range range-xs range-secondary text-white" /> 

            <p className='text-xl uppercase flex justify-between'>Next.js <span>70%</span></p>
          <input type="range" min={0} max="100" value="40" className=" bg-white h-1.5 range range-xs range-secondary text-white" /> 


          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
