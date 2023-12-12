import { FaGithub } from 'react-icons/fa';
const Projects = () => {

    return (
      <div id="projects" className="carousel w-full h-screen ">

        {/* Slider 1 */}
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/tsjPMyN/event.png"
            className="w-full h-screen bg-cover bg-no-repeat object-cover"
          />
          <div className="absolute inset-0 flex items-start mt-12 justify-center text-black z-50">
            <h2 className="text-5xl font-bold text-white">Projects</h2>
          </div>
          {/* Card */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="z-50 card w-96 md:w-1/3 glass">
              <figure>
                <img
                className="w-full h-72 object-cover"
                  src="https://i.ibb.co/tsjPMyN/event.png"
                  alt="car!"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Event Management System </h2>
                <p> Event Management System, You can start your Event Business with this Application, The Application help you very much like you can setup every event With time, money, size etc filter. </p>
                <div className="card-actions mt-5 flex justify-between items-center">
                    <a href="https://github.com/coderemran6910/Event-management-website-a-9.git" rel="noreferrer" target="_blank"> <FaGithub className="text-5xl" /> </a>
                  <button className="btn bg-[#FF2B2B] border-0 text-white "> <a href="https://social-event-react-project.web.app/"> Live Link </a></button>
                </div>
              </div>
            </div>
          </div>

          {/* opaity background */}
          <div className="absolute opacity-70 inset-0 z-0 bg-gradient-to-r from-black via-purple-500 to-[#FF2B2B]"></div>
  
          {/* Other carousel navigation */}
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 max-w-7xl mx-auto">
            <a href="#slide4" className="btn text-5xl w-20 h-20 btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn text-5xl w-20 h-20 btn-circle">
              ❯
            </a>
          </div>
        </div>







        {/* slider2 */}
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/tsjPMyN/event.png"
            className="w-full h-screen bg-cover bg-no-repeat object-cover"
          />
          <div className="absolute inset-0 flex items-start mt-12 justify-center text-black z-50">
            <h2 className="text-5xl font-bold text-white">Projects</h2>
          </div>
          {/* Card */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="z-50 card w-96 md:w-1/3 glass">
              <figure>
                <img
                className="w-full h-72 object-cover"
                  src="https://i.ibb.co/tsjPMyN/event.png"
                  alt="car!"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Event Management System</h2>
                <p> Event Management System, You can start your Event Business with this Application, The Application help you very much like you can setup every event With time, money, size etc filter. </p>
                <div className="card-actions mt-5 flex justify-between items-center">
                    <a href="https://github.com/coderemran6910/Event-management-website-a-9.git" rel="noreferrer" target="_blank"> <FaGithub className="text-5xl" /> </a>
                  <button className="btn bg-[#FF2B2B] border-0 text-white "> <a href="https://social-event-react-project.web.app/"> Live Link </a></button>
                </div>
              </div>
            </div>
          </div>

          {/* opaity background */}
          <div className="absolute opacity-70 inset-0 z-0 bg-gradient-to-r from-black via-purple-500 to-[#FF2B2B]"></div>
  
          {/* Other carousel navigation */}
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 max-w-7xl mx-auto">
            <a href="#slide1" className="btn text-5xl w-20 h-20 btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn text-5xl w-20 h-20 btn-circle">
              ❯
            </a>
          </div>
        </div>

        {/* slider-3 */}
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/tsjPMyN/event.png"
            className="w-full h-screen bg-cover bg-no-repeat object-cover"
          />
          <div className="absolute inset-0 flex items-start mt-12 justify-center text-black z-50">
            <h2 className="text-5xl font-bold text-white">Projects</h2>
          </div>
          {/* Card */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="z-50 card w-96 md:w-1/3 glass">
              <figure>
                <img
                className="w-full h-72 object-cover"
                  src="https://i.ibb.co/tsjPMyN/event.png"
                  alt="car!"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Event Management System</h2>
                <p> Event Management System, You can start your Event Business with this Application, The Application help you very much like you can setup every event With time, money, size etc filter. </p>
                <div className="card-actions mt-5 flex justify-between items-center">
                    <a href="https://github.com/coderemran6910/Event-management-website-a-9.git" rel="noreferrer" target="_blank"> <FaGithub className="text-5xl" /> </a>
                  <button className="btn bg-[#FF2B2B] border-0 text-white "> <a href="https://social-event-react-project.web.app/"> Live Link </a></button>
                </div>
              </div>
            </div>
          </div>

          {/* opaity background */}
          <div className="absolute opacity-70 inset-0 z-0 bg-gradient-to-r from-black via-purple-500 to-[#FF2B2B]"></div>
  
          {/* Other carousel navigation */}
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 max-w-7xl mx-auto">
            <a href="#slide2" className="btn text-5xl w-20 h-20 btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn text-5xl w-20 h-20 btn-circle">
              ❯
            </a>
          </div>
        </div>


      </div>
    );
  };
  
  export default Projects;
  