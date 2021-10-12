import React, {Component} from 'react';
import '../css/RentABook.css';
import InputCnp from "../components/InputCnp";
import {withRouter} from "react-router";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import RentBookForm from "../components/RentBookForm";
import setBookToBuyOrRentDispatch from "../redux/dispatch/SetBookToBuyOrRentDispatch";


class RentABookPage extends Component {
    state = {
        showCnpField: false,
        notRecognizedCnp: false,
    }

    render() {
        const {student, canShowName, notRecognizedCnp,bookToRentOrBuy } = this.props;
        console.log(student)

        return (
            <div className='container-inchiriaza-carte'>
                <InputCnp/>
                <div className='container-name-or-error'>
                    {canShowName ? <p>Salut, {student.name} </p> : null}
                    {notRecognizedCnp ? <p>Nu exista nicio persoana cu acest CNP</p> : null}
                </div>
                <RentBookForm/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    student: state.setStudentReducer.student,
    canShowName: state.setCanShowNameReducer.canShowName,
    notRecognizedCnp: state.setNotRecognizedCnpReducer.notRecognizedCnp,
    bookToRentOrBuy: state.setBookToRentOrBuyReducer.bookToRentOrBuy,
})

const mapDispatchToProps = dispatch => bindActionCreators({

    setBookToBuyOrRentDispatch:setBookToBuyOrRentDispatch,
}, dispatch)

export default connect(mapStateToProps,
    mapDispatchToProps)(withRouter(RentABookPage));
