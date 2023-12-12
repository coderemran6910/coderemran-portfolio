import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { Carousel } from "react-responsive-carousel";
import { FaGithub } from "react-icons/fa";

const Projects2 = () => {
  return (
    <Carousel>
      <div>
        <img src="https://i.ibb.co/tsjPMyN/event.png" alt="" />
        {/* opacity background */}
        <div className="absolute opacity-80 inset-0 z-0 bg-gradient-to-r from-black via-black to-[#000000]"></div>
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
              <p>
                {" "}
                Event Management System, You can start your Event Business with
                this Application, The Application help you very much like you
                can setup every event With time, money, size etc filter.{" "}
              </p>
              <div className="card-actions mt-5 flex justify-between items-center">
                <a
                  href="https://github.com/coderemran6910/Event-management-website-a-9.git"
                  rel="noreferrer"
                  target="_blank"
                >
                  {" "}
                  <FaGithub className="text-5xl" />{" "}
                </a>
                <button className="btn bg-[#FF2B2B] border-0 text-white ">
                  {" "}
                  <a href="https://social-event-react-project.web.app/">
                    {" "}
                    Live Link{" "}
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <img
          src="https://i.ibb.co/HxHGCg6/Screenshot-2023-12-12-154800.png"
          alt=""
        />
        {/* opacity background */}
        <div className="absolute opacity-80 inset-0 z-0 bg-gradient-to-r from-black via-black to-[#000000]"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="z-50 card w-96 md:w-1/3 glass">
            <figure>
              <img
                className="w-full h-72 object-cover"
                src="https://i.ibb.co/HxHGCg6/Screenshot-2023-12-12-154800.png"
                alt="car!"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Restaurent Management System </h2>
              <p>
                At Emran's Food, we're passionate about preserving the rich
                tapestry of culinary traditions while infusing them with a
                modern twist. Our restaurant is a place where the authenticity
                of flavors meets innovation. With a diverse menu that pays
                homage to the finest ingredients and recipes from around the
                world,
              </p>
              <div className="card-actions mt-5 flex justify-between items-center">
                <a
                  href="https://github.com/coderemran6910/Rastaurent-management-a11.git"
                  rel="noreferrer"
                  target="_blank"
                >
                  {" "}
                  <FaGithub className="text-5xl" />{" "}
                </a>
                <button className="btn bg-[#FF2B2B] border-0 text-white ">
                  {" "}
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://rastaurent-management-a-11.web.app/"
                  >
                    {" "}
                    Live Link{" "}
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <img
          src="https://i.ibb.co/L6hJmP6/Screenshot-2023-12-12-162208.png"
          alt=""
        />
        {/* opacity background */}
        <div className="absolute opacity-80 inset-0 z-0 bg-gradient-to-r from-black via-black to-[#000000]"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="z-50 card w-96 md:w-1/3 glass">
            <figure>
              <img
                className="w-full h-72 object-cover"
                src="https://i.ibb.co/L6hJmP6/Screenshot-2023-12-12-162208.png"
                alt="car!"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title"> Contest Management </h2>
              <p>
                Dive into a World of Innovation and Recognition! ContestHub
                beckons as the dynamic hub for creatives, offering a seamless
                Project Contest Creation Platform. Fuel your creativity, engage
                vibrant communities, and bask in the spotlight of your talent
                across myriad domains.
              </p>
              <div className="card-actions mt-5 flex justify-between items-center">
                <a
                  href="https://github.com/coderemran6910/contest-management-system.git"
                  rel="noreferrer"
                  target="_blank"
                >
                  {" "}
                  <FaGithub className="text-5xl" />{" "}
                </a>
                <button className="btn bg-[#FF2B2B] border-0 text-white ">
                  {" "}
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://contest-creation-platform.web.app/"
                  >
                    {" "}
                    Live Link{" "}
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Projects2;
