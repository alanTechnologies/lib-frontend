import React, {Component} from 'react';
import '../css/BookCard.css'
import {Button} from 'antd';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import setBookToBuyOrRentDispatch from '../redux/dispatch/SetBookToBuyOrRentDispatch'

class BookCardToReturn extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const {history} = this.props;

        return (
            <div className='container-book-card'>
                <img
                    src={this.props.book.url}
                    style={{height: '60%', width: '80%'}}/>

                <div className='container-price' style={{fontWeight: 'bolder', fontSize: '1.5vw'}}>
                    {this.props.book.title}
                </div>
                <div className='container-books' style={{fontWeight: 'bold', fontSize: '1vw',}}>
                    {this.props.book.author}
                </div>

                <div className='buttons-container'>
                    <Button
                        style={{backgroundColor: 'indianred', color: 'white'}}
                    >
                        Returneaza
                    </Button>
                </div>
                <p style={{fontWeight:'bolder'}}> Inchiriata la {this.props.rentBook.startDate} </p>

            </div>
        )
    }

}

const mapStateToProps = state => ({
    student: state.setStudentReducer.student,
    bookToRentOrBuy: state.setBookToRentOrBuyReducer.bookToRentOrBuy,
})

const mapDispatchToProps = dispatch => bindActionCreators({
    setBookToBuyOrRentDispatch:setBookToBuyOrRentDispatch,
}, dispatch)

export default connect(mapStateToProps,
    mapDispatchToProps)(withRouter(BookCardToReturn));
