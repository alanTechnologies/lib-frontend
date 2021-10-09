import React from 'react';
import '../css/BookCard.css'



const BookCard = props => {

    return (
        <div className='container-book-card'>
            <div className='container-books'>
                <p style={{fontWeight: 'lighter', fontSize: '2em'}}>{props.book.id}</p>
                <p>{props.book.author}</p>
            </div>
            <div className='container-price'>
                <p style={{fontSize: '2em', fontWeight: 'bold', marginInline: '.5em'}}>{props.book.title}</p>
                <p>{props.book.price}</p>
            </div>
        </div>
    )
}

export default BookCard;
