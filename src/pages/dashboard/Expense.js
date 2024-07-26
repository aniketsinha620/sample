import React, { useState } from 'react'
import sittingillustrator from "../../assets/pana.svg"
import btillustrator from "../../assets/rafiki.svg"
// import Piachart from '../../components/Piachart'
// import Areachat from '../../components/Areachat'
import Graph from './Graph'
import Graph1 from './Graph1'
import Busdriver from './Busdriver'

import BusdetailCard from './BusdetailCard'

import Barchat from '../../components/Barchat'

const Expense = () => {
    const [bool, setbool] = useState(true)
    const [img, setImg] = useState(null)
    const [busname, setBusname] = useState(null)
    const [source, setSource] = useState(null)
    const [destination, setDestination] = useState(null)

    const handleClick1 = (e) => {
        // console.log(e)
        if (e) {
            setbool(prev => !prev)
            // setImg(e.img)
            setBusname(e.name)
            setSource(e.source)
            // setDestination(e.destination)
            console.log(e)
        }
    }


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
                                img={"/bus2.jpg"} busname={"ATT KING"} source={"25000"} destination={"expense"} />
                            <BusdetailCard callback={handleClick1}
                                img={"/car1.jpg"} busname={"SHIV SHAKTI"} source={"20000"} destination={"expense"} /><BusdetailCard callback={handleClick1}
                                    img={"/bus1.jpg"} busname={"SHIV SHAKTI"} source={"60000"} destination={"expense"} />
                            <BusdetailCard callback={handleClick1}
                                img={"/bus3.jpg"} busname={"SRS TRAVEL"} source={"90000"} destination={"expense"} />
                            <BusdetailCard callback={handleClick1}
                                img={"/bus1.jpg"} busname={"VRL TRAVELS "} source={"100000"} destination={"expense"} /><BusdetailCard callback={handleClick1}
                                    img={"/car2.jpg"} busname={"VRL TRAVELS "} source={"100000"} destination={"expense"} />
                            <BusdetailCard callback={handleClick1}
                                img={"/bus2.jpg"} busname={"ASHOK LEYLAND"} source={"70000"} destination={"expense"} />
                            <BusdetailCard callback={handleClick1}
                                img={"/bus3.jpg"} busname={"ATT KING"} source={"90000"} destination={"expense"} />

                        </div> </> :
                            <div className='cardcollection'>
                                {/* <Busdriver
                                    
                                    img={img}
                                    source={source}
                                    destination={destination}
                                    onClose={handleClose}
                                /> */}
                                <Graph busname={busname}
                                    source={source}
                                    onClose={handleClose} />

                            </div>}

                        <div className='cardcollect'>
                            <Barchat />
                        </div>

                    </div>
                    <div className='rightdiv-dashboard'>
                        <div className='dashboardmap'>
                            <Graph1 />
                        </div>



                        <img className='btillustrator' src={btillustrator} alt="sitting"


                        />
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Expense