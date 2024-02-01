import React from 'react';
import './index.css'
import img1 from '../../../src/until/Image/study-medicine-in-Germany-480x325.jpg'
import img2 from '../../../src/until/Image/study-medicine-in-Romania-in-english-480x325.jpg'
import img3 from '../../../src/until/Image/study-medicine-in-sweden-in-english-480x325.jpg'
import { useNavigate } from 'react-router';
const Card = () => {
    const navigate = useNavigate();

    const data = [
        {
            id: 1,
            text: 'How to write college research papers? If you’re given the responsibility of writing a college research paper It’s crucial to know what you’re doing. …',
        },
        {
            id: 2,
            text: 'Where to Source For Academic Papers',
        },
        {
            id: 3,
            text: 'Studying Medicine in Germany in English for International Students',
            img: img1
        },
        {
            id: 4,
            text: 'study medicine in Romania for international students',
            img: img2
        },
        {
            id: 5,
            text: 'Top universities to study medicine in Sweden',
            img: img3
        }
    ]

    return (
        <div className='MainCardCategory'>
            {data.map((ele) => {
                return (
                    <div className='ContainerCard'>
                        {ele.img && <img src={ele.img} alt='image not found' />}
                        <div className='card-text'>
                            {ele.text && ele.text.includes('How') ? <p onClick={() => { navigate('/14128-2/') }}>{ele.text}</p> : <p>{ele.text}</p>}
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default Card;
