import React from 'react'
// import Dashboardform from './Dashboardform'
import sittingillustrator from "../../assets/pana.svg"
import btillustrator from "../../assets/rafiki.svg"
import Dashboardform from "../../pages/dashboard/Dashboardform"
import Mapdashboard from './Mapdashboard'
import Runningbus from './Runningbus detail/Runningbus'



export const Layout = () => {
    const [scordinate, setScordinate] = React.useState([85.99106894165021, 23.699127949999998])
    const [dcordinate, setDcordinate] = React.useState([86.1828, 23.6362])

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
                        <Dashboardform />
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
