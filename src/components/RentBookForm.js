import React, {Component} from "react";
import {Button, DatePicker} from "antd";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import '../css/RentBookForm.css';
import setBookToBuyOrRentDispatch from '../redux/dispatch/SetBookToBuyOrRentDispatch'

class RentBookForm extends Component {
    state = {
        dateRent: new Date(),
        dateReturn: new Date(),
    }

    render() {
        const {canShowName,bookToRentOrBuy} = this.props;

        return (
            <div style={{alignSelf: 'center', justifySelf: 'center'}}>

                {canShowName ?
                    <div className='container-dates'>
                        <div style={{marginInline:'1vw'}}>
                            <p>Data ridicare</p>
                            <DatePicker
                                selected={this.state.dateRent}
                                onSelect={date => {
                                    this.setState({dateRent: date})
                                    console.log(this.state.dateRent)
                                }} //when day is clicked
                                onChange={date => console.log(date)} //only when value has changed
                            />
                        </div>

                        <div style={{marginInline:'1vw'}}>
                            <p>Data returnare</p>
                            <DatePicker
                                selected={this.state.dateReturn}
                                onSelect={date => {
                                    this.setState({dateReturn: date})
                                    console.log(this.state.dateReturn)
                                }} //when day is clicked
                                onChange={date => console.log(date)} //only when value has changed
                            />
                        </div>
                    </div> : null}

                <div className='container-book-card'>
                    <img
                        src={bookToRentOrBuy.url}
                        style={{height: '60%', width: '80%'}}/>

                    <div className='container-price' style={{fontWeight: 'bolder', fontSize: '1.5vw'}}>
                        {bookToRentOrBuy.title}
                    </div>
                    <div className='container-books' style={{fontWeight: 'bold', fontSize: '1vw',}}>
                        {bookToRentOrBuy.author}
                    </div>

                    <div className='buttons-container'>
                        <Button
                            style={{backgroundColor: '#d3ac2b', color: 'white'}}
                        >
                            Cumparati
                        </Button>

                        <Button onClick={() => {
                            // history.push('/inchiriaza-o-carte')
                            this.props.setBookToBuyOrRentDispatch(bookToRentOrBuy)
                        }}
                                style={{backgroundColor: '#333d51', color: 'white'}}
                        >
                            Inchiriati
                        </Button>
                    </div>
                    <p>{bookToRentOrBuy.stock} carti in stoc</p>

                </div>



            </div>
        )
    }

}

const mapStateToProps = state => ({
        student: state.setStudentReducer.student,
        canShowName: state.setCanShowNameReducer.canShowName,
        bookToRentOrBuy: state.setBookToRentOrBuyReducer.bookToRentOrBuy,

    }

)

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        setBookToBuyOrRentDispatch:setBookToBuyOrRentDispatch,
    }
    , dispatch)

export default connect(mapStateToProps,
    mapDispatchToProps)(withRouter(RentBookForm));
