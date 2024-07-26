import React from 'react'
import "./BusdetailCard.css"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


export default function Busdriver(props) {

    const handleClick = () => {
        if (props.onClose) {
            props.onClose();
        }
    };


    return (
        <div className='cardcollection2'>
            <div className='image'>
                <img src={props.img}></img>
                <div className='route-busdriver'>

                    <div className="route-busdriver-path">
                        <p className='from-route'>{`FROM:- ${props.source}`}</p>
                        <p>{`TO:- ${props.destination}`}</p>
                    </div>
                </div>
                
                <button className="iconBusDriver   text-richblack-900 " onClick={handleClick}><ArrowBackIcon /></button>
            </div>



            <div className='detail-busdriver'>
                <h2>{props.busname}</h2>

                <div className='information-busdriver'>

                    <p >BUS PLATE NO :-</p>
                    <p className='information-value'>JH-09-AM1981</p>
                </div>
                <div className='information-busdriver'>
                    <p >BUS OWNER NAME::-</p>
                    <p className='information-value'>ANAND KESHRI</p>
                </div>
                <div className='information-busdriver'>
                    <p >BUS OWNER PHONE NO  :-</p>
                    <p className='information-value'>8340283015</p>
                </div>
                <div className='information-busdriver'>
                    <p >DRIVER NAME:-</p>
                    <p className='information-value'>ANAND KESHRI</p>
                </div>
                <div className='information-busdriver'>
                    <p >TOTAL  CAPACITY:-:-</p>
                    <p className='information-value'>231</p>
                </div>
                <div className='information-busdriver'>
                    <p >STATUS :-</p>
                    <p className='information-value'>NOT RUNNING</p>
                </div>

            </div>

        </div>
    )
}
// onClick={() => setbool(prev => !prev)}