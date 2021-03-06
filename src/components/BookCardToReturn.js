import React, {Component} from 'react';
import '../css/BookCard.css'
import {Button, Modal} from 'antd';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import setBookToBuyOrRentDispatch from '../redux/dispatch/SetBookToBuyOrRentDispatch'
import axios from "axios";
import setIsModalVisibleDispatch from "../redux/dispatch/SetIsModalVisibleDispatch";
import setModalTitleDispatch from "../redux/dispatch/SetModalTitleDispatch";
import setModalBodyDispatch from "../redux/dispatch/SetModalBodyDispatch";
import fetchRentBooksByStudentCnpDispatch from "../redux/dispatch/FetchRentBooksByStudentCnpDispatch";

class BookCardToReturn extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {
            student,
            isModalVisible,
            title,
            body,
            cnp
        } = this.props;

        const returnABook = (cnp, idBook) => {
            axios.delete(`http://localhost:8080/return-a-book?cnp=${cnp}&idBook=${idBook}`)
                .then(r => console.log(r.status))
                .catch(err => {
                    console.log(err)
                })
        }

        const handleOkAndCancel = () => this.props.setIsModalVisibleDispatch(false)


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
                        onClick={() => {
                            returnABook(student.cnp, this.props.rentBook.book.id)
                            this.props.setModalTitleDispatch("Multumim")
                            this.props.setModalBodyDispatch("Va mai asteptam")
                            this.props.setIsModalVisibleDispatch(true);
                        }
                        }
                        style={{backgroundColor: 'indianred', color: 'white'}}
                    >
                        Returneaza
                    </Button>
                </div>
                <p style={{fontWeight: 'bolder'}}> Inchiriata la {this.props.rentBook.startDate} </p>


                <Modal title={title} visible={isModalVisible} onOk={() => {
                    // history.push('/available-books')
                    this.props.fetchRentBooksByStudentCnpDispatch(cnp)
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
    bookToRentOrBuy: state.setBookToRentOrBuyReducer.bookToRentOrBuy,
    rentBooks: state.fetchRentBooksReducer.rentBooks,
    isModalVisible: state.setIsModalVisibleReducer.isModalVisible,
    title: state.setModalTitleReducer.title,
    body: state.setModalBodyReducer.body,

})

const mapDispatchToProps = dispatch => bindActionCreators({
    setBookToBuyOrRentDispatch: setBookToBuyOrRentDispatch,
    setIsModalVisibleDispatch: setIsModalVisibleDispatch,
    setModalTitleDispatch: setModalTitleDispatch,
    setModalBodyDispatch: setModalBodyDispatch,
    fetchRentBooksByStudentCnpDispatch: fetchRentBooksByStudentCnpDispatch,

}, dispatch)

export default connect(mapStateToProps,
    mapDispatchToProps)(withRouter(BookCardToReturn));
