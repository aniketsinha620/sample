import React, { useEffect } from 'react'
import review1 from '../homeassets/re1.svg'
import review2 from '../homeassets/re2.svg'
import review3 from '../homeassets/re3.svg'
import routeopti from '../homeassets/routehai.svg'
import realtime from '../homeassets/realtimetracking.svg'
import analytic from '../homeassets/analytic.svg'
import pathselection from '../homeassets/pathselection.svg'
import { Link } from 'react-router-dom'
import './Home.css'
import Footer from './Footer'
import Hero from './Hero'
import Contact from './Contact'
import BackgroundBeams from '../components/ui/background-beams'
import { motion } from "framer-motion";
import { LampContainer } from "../components/ui/lamp.js";



const Home = () => {

  return (
    <div className='wrapup'>



  <section className='firstabout mt-[70px] w-[100%] hidden md:block'>
        <div className='aboutmainview flex w-[100%]'>
          <div className='mainview-left  md:[40%] mt-[20vh] pl-[20px]'>
            <div className='text-[24px]'>Streamline Your Ride Booking Experience with Our Tracking Website </div>
            <div className='mt-[20px]'> <button className='btnsweet text-[20px]'>Explore more</button> </div>
          </div>
          <div className='landingimagehai w-[60%]' >
            <img src='./car05.png' alt="Students"
              widht={55}
              height={49}
              loading='lazy'
            />

          </div>
        </div>

      </section>
      <div className="  mt-[80px] block md:hidden">
        <div className="bg-cover bg-center w-full h-screen " style={{ backgroundImage: "url('photo-.avif')" }}>
          <div className="flex justify-center align-center h-screen item-center  flex ">
            <div className="absolute inset-0 bg-black opacity-10 top-20"></div>
            <div className="text-white text-center  flex flex-col justify-center">
              <h1 className="text-2xl md:text-6xl font-bold">Streamline Your Ride Booking Experience with Our Tracking Website</h1>
              <div className='mt-[20px]'> <button className='btnsweet'>Explore more</button> </div>
            </div>
          </div>
        </div>
      </div>  
      {/* <section className='mt-[20px]'>
        <LampContainer>
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
          >
           Streamline Your Ride Booking Experience with Our Tracking Website
          </motion.h1>
        </LampContainer>

      </section> */}



      {/*  background-color: #696969; */}

      <section className='p-0 '>
        <div className='vichiledivhai'>
          <div className='vechieleselection ml-0 text-[30px] w-[100%]'>Vehicle Selection Process</div>
          <div className='textselectionprocess text-white'>A4 network provide you a simplest way to select your seat with help of illustration and map so that you can easily use our interface</div>
          <div className='selctionpathclass p-4'>   <img src={pathselection} alt="Students"
            widht={80}
            height={69}
            loading='lazy'


          />
          </div>
        </div>
      </section>

      {/* <div className="bg-blue-500 text-white rounded-lg shadow-lg overflow-hidden">
        <img className="w-full h-[100%] sm:h-[100%] object-cover object-center" src="insideP.jpg" alt="Background" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Your Title Here</div>
          <p className="text-sm leading-relaxed mb-2">
            Your paragraph content here. This can be multiple lines if needed.
          </p>
          <p className="text-sm leading-relaxed">
            Another paragraph goes here, providing additional information.
          </p>
        </div>
      </div> */}


      <section>
        <div className='vechieleselection  ml-0 text-[40px] mt-[40px]  w-[100%]'>
          Vehicle Type Selection
        </div>
        <div className='primisesdivhai mt-[40px]  flex flex-col md:flex-row '>

          <div className=" md:w-[30%] text-white md:h-[80vh] h-[70vh] rounded-lg shadow-lg overflow-hidden relative">
            <div className="bg-cover bg-center absolute inset-0" style={{ backgroundImage: "url(./insideP.jpg)" }} />
            <div className="px-6 py-4  md:top-60 top-48 relative z-10">
              <div className="font-bold text-xl mb-2">INSIDE PREMISES</div>
              <p className="text-sm leading-relaxed mb-2 text-grey">
                Welcome to our plant transportation service, where we offer convenient and efficient rides within our facility. Whether you need to travel between different sections of the plant, visit specific workstations, or reach important meetings on time, our dedicated transportation system is here to assist you.
              </p>
              <div>  <Link to='/services/inside'><button className='btnsweet'> Click to Enter</button></Link>
              </div>

            </div>
          </div >




          <div className=" md:w-[30%] text-white h-[60vh] md:h-[80vh]  rounded-lg shadow-lg overflow-hidden relative">
            <div className="bg-cover bg-center absolute inset-0" style={{ backgroundImage: "url(./outsideP.jpg)" }} />
            <div className="px-6 py-4   md:top-60 top-48 relative z-10">
              <div className="font-bold text-xl mb-2">OUTSIDE PREMISES</div>
              <p className="text-sm leading-relaxed mb-2 text-grey">
                We understand that there may be times when you need transportation services beyond the boundaries of our plant. Whether it's attending off-site meetings, running errands, or traveling to nearby locations, our reliable and convenient ride booking service is here to cater to your needs.
              </p>
              <div>  <Link to='/services/outside'><button className='btnsweet'> Click to Enter</button></Link>
              </div>

            </div>
          </div >

        </div>

      </section>

      <section>
        <div className='mt-[40px]'>
          <div className='Reviewhaibhai'>Review’s</div>
          <div className='reviewsectionhai flex flex-col gap-3 md:flex-row flex-grow'>
            <div class="max-w-md mx-auto bg-[#696969]  rounded-xl shadow-md overflow-hidden md:max-w-xl">
              <div class="p-0 md:p-8 flex">
                <div class="flex items-center justify-center w-[40%] md:w-[20%]">
                  <img class="h-20 w-20 object-cover rounded-full" src={review3} alt="Profile Picture" />
                </div>
                <div class="mt-4 w-[60%] md:w-[80%]">
                  <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Comment</div>
                  <p class="mt-2  text-[10px] md:text-[15px] text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec mauris ut tellus efficitur lobortis. Integer sed elit eu urna varius accumsan.</p>
                  <div class="mt-4">
                    <div class="flex items-center">
                      <div class="ml-3">
                        <div class="text-gray-900 font-semibold">John Doe</div>
                        <div class="text-gray-600">Developer</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="max-w-md mx-auto bg-[#696969]  rounded-xl shadow-md overflow-hidden md:max-w-xl">
              <div class="p-0 md:p-8 flex">
                <div class="flex items-center justify-center w-[40%] md:w-[20%]">
                  <img class="h-20 w-20 object-cover rounded-full" src={review2} alt="Profile Picture" />
                </div>
                <div class="mt-4 w-[60%] md:w-[80%]">
                  <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Comment</div>
                  <p class="mt-2  text-[10px] md:text-[15px] text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec mauris ut tellus efficitur lobortis. Integer sed elit eu urna varius accumsan.</p>
                  <div class="mt-4">
                    <div class="flex items-center">
                      <div class="ml-3">
                        <div class="text-gray-900 font-semibold">John Doe</div>
                        <div class="text-gray-600">Developer</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div class="max-w-md mx-auto bg-[#696969]  rounded-xl shadow-md overflow-hidden md:max-w-xl">
              <div class="p-0 md:p-8 flex">
                <div class="flex items-center justify-center w-[40%] md:w-[20%]">
                  <img class="h-20 w-20 object-cover rounded-full" src={review1} alt="Profile Picture" />
                </div>
                <div class="mt-4 w-[60%] md:w-[80%]">
                  <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Comment</div>
                  <p class="mt-2  text-[10px] md:text-[15px] text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec mauris ut tellus efficitur lobortis. Integer sed elit eu urna varius accumsan.</p>
                  <div class="mt-4">
                    <div class="flex items-center">
                      <div class="ml-3">
                        <div class="text-gray-900 font-semibold">John Doe</div>
                        <div class="text-gray-600">Developer</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>



      <section>
        <div>
          <div className='whatwedohm'>What We Do</div>
          <div className='whatwedodivhai flex flex-col'>
            <div class="p-3 flex">
              <div class="flex items-center justify-center w-[40%] md:w-[20%]">
                <img class="h-20 w-20 md:h-50 md:w-50 object-cover rounded-full" src={realtime} alt="Profile Picture" />
              </div>
              <div class="mt-4 w-[80%] md:w-[80%]">
                <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Real-Time Bus Tracking:</div>
                <p class="mt-2  text-[10px] md:text-[15px] text-white">Our system utilizes GPS and cellular   to track buses in real time. Passengers can conveniently access accurate arrival and departure times, allowing them to plan their journeys more effectively.</p>
                <div class="mt-4">

                </div>
              </div>

            </div>

            <div class="p-3 flex">
              <div class="flex items-center justify-center w-[40%] md:w-[20%]">
                <img class="h-20 w-20 md:h-50 md:w-50 object-cover rounded-full" src={routeopti} alt="Profile Picture" />
              </div>
              <div class="mt-4 w-[80%] md:w-[80%]">
                <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Route Optimization:</div>
                <p class="mt-2  text-[10px] md:text-[15px] text-white">We go beyond tracking and offer  intelligent route optimization solutions. By analyzing traffic patterns, passenger demand, and other factors, our system suggests optimal routes for buses to minimize travel time</p>
                <div class="mt-4">

                </div>
              </div>

            </div>
            <div class="p-3 flex">
              <div class="flex items-center justify-center w-[40%] md:w-[20%]">
                <img class="h-20 w-20 md:h-50 md:w-50 object-cover rounded-full" src={analytic} alt="Profile Picture" />
              </div>
              <div class="mt-4 w-[80%] md:w-[79%]">
                <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Data Analytics and Reporting:</div>
                <p class="mt-2  text-[10px] md:text-[15px] text-white">We provide comprehensive data analytics and reporting tools to help administrators and operators make informed decisions. Our system collects and analyzes data .</p>
                <div class="mt-4">

                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      <Contact />

      <Footer />





    </div >
  )
}

export default Home