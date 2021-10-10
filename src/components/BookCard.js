import React from 'react';
import '../css/BookCard.css'
import {Button} from 'antd';

const BookCard = props => {

    return (
        <div className='container-book-card'>
            <img src ="https://humanitas.ro/assets/images/products/978-973-50-3283-8.jpg" style={{height:'60%', width:'80%'}} />

            <div className='container-price' style={{fontWeight:'bolder',fontSize:'1.5vw'}}>
                {props.book.title}
            </div>
            <div className='container-books' style={{fontWeight:'bold',fontSize:'1vw'}}>
                {props.book.author}
            </div>

            <div className='buttons-container'>
                <Button onClick={() => console.log('am platit :)')}
                        className='button-style-1'
                >
                    Cumparati
                </Button>

                <Button onClick={() => console.log('am inchiriat :)')}
                        className='button-style-2'
                >
                    Inchiriati
                </Button>
            </div>
        </div>
    )
}

export default BookCard;
