import React, {Component} from "react";
import {Button, DatePicker, Modal, Popover} from "antd";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import setBookToBuyOrRentDispatch from '../redux/dispatch/SetBookToBuyOrRentDispatch'
import setIsModalVisibleDispatch from '../redux/dispatch/SetIsModalVisibleDispatch'
import setModalTitleDispatch from "../redux/dispatch/SetModalTitleDispatch";
import setModalBodyDispatch from "../redux/dispatch/SetModalBodyDispatch";
import '../css/RentBookForm.css';
import 'antd/dist/antd.css';
import axios from 'axios';
import setBooksDispatch from "../redux/dispatch/SetBooksDispatch";

class RentBookForm extends Component {
    state = {
        dateRent: new Date(),
        dateReturn: new Date(),
    }

    render() {
        const {
            canShowName,
            history,
            bookToRentOrBuy,
            student,
            isModalVisible,
            title,
            body,
        } = this.props;
        const content = (
            <div>
                <p> nu poti inchiria deoarece ai prea multe intarzieri</p>
            </div>
        );

        const handleOkAndCancel = () => this.props.setIsModalVisibleDispatch(false)

        const sendBookToRentData = (startDate, endDate, idBook, cnp) => {
            const startDay = startDate.toISOString().substring(0, 10);
            const endDay = endDate.toISOString().substring(0, 10);

            console.log(axios.post(`http://localhost:8080/rent-a-book?cnp=${cnp}&idBook=${idBook}&startDay=${startDay}&endDay=${endDay}`,)
                .then(r =>{
                    if (r.status === 200) {
                        this.props.setModalBodyDispatch('Lectura placuta')
                        this.props.setModalTitleDispatch('Multumim')
                    }})
                .catch(err => {
                        if (err.response.status === 406) {
                            this.props.setModalBodyDispatch('Ati inchiriat deja aceasta carte')
                            this.props.setModalTitleDispatch('Ne pare rau')
                        }
                    }))
        }

        return (
            <div style={{alignSelf: 'center', justifySelf: 'center'}}>

                {canShowName ?
                    <div>
                        <div className='container-dates'>
                            <div style={{marginInline: '1vw'}}>
                                <p>Data ridicare</p>
                                <DatePicker
                                    selected={this.state.dateRent}
                                    onSelect={date => {
                                        this.setState({dateRent: date})
                                        console.log(student.validForRental)
                                    }} //when day is clicked
                                    onChange={date => console.log(date)} //only when value has changed
                                />
                            </div>

                            <div style={{marginInline: '1vw'}}>
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
                        </div>
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
                                {student.validForRental ?
                                    <Button
                                        disabled={false}
                                        onClick={() => {
                                            sendBookToRentData(this.state.dateRent, this.state.dateReturn, bookToRentOrBuy.id, student.cnp)
                                            this.props.setIsModalVisibleDispatch(true)
                                        }}
                                        type="primary">
                                        Inchiriati
                                    </Button> :
                                    <Popover content={content} title="Title">
                                        <Button
                                            disabled={true}
                                            onClick={() => {
                                                sendBookToRentData(this.state.dateRent, this.state.dateReturn, bookToRentOrBuy.id, student.cnp)
                                                this.props.setIsModalVisibleDispatch(true)
                                            }}
                                            type="primary">
                                            Inchiriati
                                        </Button>
                                    </Popover>
                                }
                            </div>
                            <p>{bookToRentOrBuy.stock} carti in stoc</p>
                        </div>
                    </div>
                    : null}
                <Modal title={title} visible={isModalVisible} onOk={()=>{
                    this.props.setBooksDispatch([]);
                    history.push('/available-books')
                    this.props.setIsModalVisibleDispatch(false);
                }}
                       onCancel={handleOkAndCancel}>
                    <p>{body}</p>
                </Modal>
            </div>
        )
    }

}

const mapStateToProps = state => ({
        student: state.setStudentReducer.student,
        canShowName: state.setCanShowNameReducer.canShowName,
        bookToRentOrBuy: state.setBookToRentOrBuyReducer.bookToRentOrBuy,
        isModalVisible: state.setIsModalVisibleReducer.isModalVisible,
        title: state.setModalTitleReducer.title,
        body: state.setModalBodyReducer.body,
    }
)

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        setBookToBuyOrRentDispatch: setBookToBuyOrRentDispatch,
        setIsModalVisibleDispatch: setIsModalVisibleDispatch,
        setModalTitleDispatch: setModalTitleDispatch,
        setModalBodyDispatch: setModalBodyDispatch,
        setBooksDispatch: setBooksDispatch,
    }
    , dispatch)

export default connect(mapStateToProps,
    mapDispatchToProps)(withRouter(RentBookForm));
