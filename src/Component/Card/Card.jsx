import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'

const Card = (props) => {
    return (
        <>
            
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <div className='card-container'>
                        <div className='card-container-img'>
                            <img src={props.Imgsrc} alt="" />
                        </div>
                        <div className='card-content'>
                            <button>{props.first_btn_desc}</button>
                            <button style={{ marginLeft: '5px' }}> {props.lang}</button>
                            <p className='heading'> {props.heading}</p>
                            <p className='starting-time'>{props.startingdate}</p>
                            <p className='starting-time'>{props.startingtime}</p>

                            <div className='price-btn-section'>
                                <div>
                                    <p style={{ fontSize: '12px', color: 'grey' }}>Price:-</p>
                                    <p style={{ fontSize: '18px', color: 'black' }}>{props.price}</p>
                                </div>
                                <p className='more-det-btn'>
                                    More Details
                                </p>

                            </div>
                        </div>
                    </div>
                </Link>
        </>
    )
}

export default Card