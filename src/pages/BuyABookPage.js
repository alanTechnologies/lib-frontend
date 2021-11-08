import React, {Component} from 'react';
import '../css/RentABook.css';
import {withRouter} from "react-router";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import setBookToBuyOrRentDispatch from "../redux/dispatch/SetBookToBuyOrRentDispatch";
import {Button, Input, Modal} from "antd";
import axios from "axios";
import setIsModalVisibleDispatch from "../redux/dispatch/SetIsModalVisibleDispatch";
import setModalTitleDispatch from "../redux/dispatch/SetModalTitleDispatch";
import setModalBodyDispatch from "../redux/dispatch/SetModalBodyDispatch";
import setBooksDispatch from "../redux/dispatch/SetBooksDispatch";

class BuyABookPage extends Component {

    state = {
        email: '',
        adress: '',
        name: ''
    }

    render() {

        const handleOkAndCancel = () => this.props.setIsModalVisibleDispatch(false)

        const onChangeEmail = event => {
            this.setState({
                email: event.target.value,
            })
            console.log(event.target.value)
        }
        const onChangeAdress = event => {
            this.setState({
                adress: event.target.value,
            })
            console.log(event.target.value)
        }
        const onChangeName = event => {
            this.setState({
                name: event.target.value,
            })
        }
        const {isModalVisible, bookToRentOrBuy, history, title, body} = this.props;

        const buyBook = (name, adress, email, idBook) => {
            axios.post(`http://localhost:8080/bought-books?name=${name}&adress=${email}&email=${adress}&idBook=${idBook}`)
                .then(r => console.log(r.status))
                .catch(err => {
                    console.log(err)
                })
        }

        return (
            <div className='container-inchiriaza-carte'>

                <Input onChange={event => onChangeEmail(event)} placeholder='email' className='email'/>
                <Input onChange={event => onChangeAdress(event)} placeholder='adresa'/>
                <Input onChange={event => onChangeName(event)} placeholder='nume'/>
                <Button
                    style={{backgroundColor: '#d3ac2b', color: 'white', margin: '1vw'}}
                    onClick={() => {
                        buyBook(this.state.name, this.state.adress, this.state.email, bookToRentOrBuy.id)
                        this.props.setIsModalVisibleDispatch(true);
                    }
                    }
                >
                    Cumparati
                </Button>

                <Modal title={title} visible={isModalVisible} onOk={() => {
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
    bookToRentOrBuy: state.setBookToRentOrBuyReducer.bookToRentOrBuy,
    isModalVisible: state.setIsModalVisibleReducer.isModalVisible,
    body: state.setModalBodyReducer.body,
})

const mapDispatchToProps = dispatch => bindActionCreators({
    setBookToBuyOrRentDispatch: setBookToBuyOrRentDispatch,
    setIsModalVisibleDispatch: setIsModalVisibleDispatch,
    setModalTitleDispatch: setModalTitleDispatch,
    setModalBodyDispatch: setModalBodyDispatch,
    setBooksDispatch: setBooksDispatch,

}, dispatch)

export default connect(mapStateToProps,
    mapDispatchToProps)(withRouter(BuyABookPage));
