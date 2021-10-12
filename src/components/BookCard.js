import React, {Component} from 'react';
import '../css/BookCard.css'
import {Button} from 'antd';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import setBookToBuyOrRentDispatch from '../redux/dispatch/SetBookToBuyOrRentDispatch'

class BookCard extends Component {
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
                        style={{backgroundColor: '#d3ac2b', color: 'white'}}
                    >
                        Cumparati
                    </Button>

                    <Button onClick={() => {
                        history.push('/inchiriaza-o-carte')
                        console.log(this.props.book)
                        this.props.setBookToBuyOrRentDispatch(this.props.book)
                    }}
                            style={{backgroundColor: '#333d51', color: 'white'}}
                    >
                        Inchiriati
                    </Button>
                </div>
                <p>{this.props.book.stock} carti in stoc</p>

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
    mapDispatchToProps)(withRouter(BookCard));
