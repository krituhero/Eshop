import React from "react";
import Navbar from "../Navbar/Navbar";

const About = () => {
  return(
    <>
    <Navbar />
    
    <div className="container mx-auto px-19 py-4">
        <h1 className="text-3xl font-semibold mb-4">About Us</h1>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 md:pr-8">
            <h2 className="text-xl font-semibold mb-2">Our Story</h2>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              malesuada lectus in velit tincidunt, nec consequat mi commodo.
              Aenean sed neque a ex cursus rutrum. Nulla facilisi. Phasellus
              consequat enim eget justo convallis, non tempor metus feugiat.
            </p>
            <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              malesuada lectus in velit tincidunt, nec consequat mi commodo.
              Aenean sed neque a ex cursus rutrum. Nulla facilisi. Phasellus
              consequat enim eget justo convallis, non tempor metus feugiat.
            </p>
            <h2 className="text-xl font-semibold mb-2">Our Values</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              malesuada lectus in velit tincidunt, nec consequat mi commodo.
              Aenean sed neque a ex cursus rutrum. Nulla facilisi. Phasellus
              consequat enim eget justo convallis, non tempor metus feugiat.
            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 ml-10">
            <h2 className="text-xl font-semibold mb-2 ">Our Team</h2>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-4">
                <img
                  src="https://via.placeholder.com/50"
                  alt="Team Member"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="font-semibold">Ram Bahadur</h3>
                  <p>Co-Founder</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <img
                  src="https://via.placeholder.com/50"
                  alt="Team Member"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="font-semibold">Shyam Bahadur</h3>
                  <p>Marketing Director</p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default About;