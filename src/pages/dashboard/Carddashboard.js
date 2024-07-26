import React, { useState } from 'react'
import sittingillustrator from "../../assets/pana.svg"
import btillustrator from "../../assets/rafiki.svg"
import Barchat from '../../components/Barchat'
import Piachart from '../../components/Piachart'
import BusdetailCard from './BusdetailCard'
import Busdriver from './Busdriver'
import Runningbus from './Runningbus detail/Runningbus'

import Mapdashboard from './Mapdashboard'

const Carddashboard = () => {
  const [bool, setbool] = useState(true)
  const [img, setImg] = useState(null)
  const [busname, setBusname] = useState(null)
  const [source, setSource] = useState(null)
  const [destination, setDestination] = useState(null)
  const [scordinate, setScordinate] = useState([85.99106894165021, 23.699127949999998])
  const [dcordinate, setDcordinate] = useState([86.1828, 23.6362])

  const handleClick1 = (e) => {
    // console.log(e)
    if (e) {
      setbool(prev => !prev)
      setImg(e.img)
      setBusname(e.name)
      setSource(e.source)
      setDestination(e.destination)
      console.log(e)
    }}


  const handleClose = () => {
    setbool(true);
  };
  return (
    <div className=' dashboard flex justify-center items-center  bg-richblack-2 text-3xl h-full ' >
      <div className='background-dashboard'>

        <div className='maindiv'>
          <div className='leftdiv-dashboard'>

            <div className='Heading-dashboard'>Dashboard</div>

            <div className='illustrator-bgtop'></div>

            <img src={sittingillustrator} alt="sitting"

              className="sittingillustrator "
            />










            {bool ? <><div className='cardcollection'>
              <h1 className='cardcollection1-h1'>REGISTERED VEHICLE</h1>

              <BusdetailCard callback={handleClick1}
                img={"/bus2.jpg"} busname={"ATT KING"} source={"CHAS"} destination={"BOKARO"} />
              <BusdetailCard callback={handleClick1}
                img={"/car1.jpg"} busname={"SHIV SHAKTI"} source={"RMHS GATE"} destination={"4 LANE"} />
              <BusdetailCard callback={handleClick1}
                img={"/bus3.jpg"} busname={"SRS TRAVEL"} source={"CHAS"} destination={"SINDRI"} />
              <BusdetailCard callback={handleClick1}
                img={"/car2.jpg"} busname={"VRL TRAVELS "} source={"LOHANCHAL"} destination={"BADHADIH"} />
              <BusdetailCard callback={handleClick1}
                img={"/bus2.jpg"} busname={"ASHOK LEYLAND"} source={"BOKARO"} destination={"SECTOR 4"} />
              <BusdetailCard callback={handleClick1}
                img={"/bus3.jpg"} busname={"ATT KING"} source={"CHAS"} destination={"SECTOR 2"} />
                <BusdetailCard callback={handleClick1}
                img={"/bus2.jpg"} busname={"ATT KING"} source={"CHAS"} destination={"SECTOR 2"} />

            </div> </> :
              <div> <Busdriver
                busname={busname}
                img={img}
                source={source}
                destination={destination}
                onClose={handleClose}
              />
              </div>}



            <div className='cardcollect'>
              <Barchat className='chatcss' />

            </div>
          </div>
          <div className='rightdiv-dashboard'>
            <div className='dashboardmap'>
              <Mapdashboard scordinate={scordinate} dcordinate={dcordinate} />
            </div>
            <div className='runningbus'>

              <Runningbus
                img={"/bus1.jpg"} busname={"ATT KING"} source={"CHAS"} destination={"SECTOR 2"} />
            </div>
            <div className='runningbus'>
              <Runningbus
                img={"/bus2.jpg"} busname={"SRS"} source={"CHAS"} destination={"SINDRI"} />
            </div>

            <img className='btillustrator' src={btillustrator} alt="sitting"


            />
          </div>

        </div>
      </div>
    </div>

  )
}

export default Carddashboard