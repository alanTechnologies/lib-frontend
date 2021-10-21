import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import {Button, Input} from "antd";
import setStudentDispatch from "../redux/dispatch/SetStudentDispatch";
import setCanShowNameDispatch from "../redux/dispatch/SetCanShowNameDispatch";
import setNotRecognizedCnpDispatch from "../redux/dispatch/SetNotRecognizedCnp";

class ReturnABookPage extends Component {

    render() {
        const onChange = event => {
            this.setState({
                cnp: event.target.value,
            })
            console.log(event.target.value)
        }

        const getRentBookOfStudentByStudentCnp = cnp => {

            return fetch('http://localhost:8080/student-rent-book-list/' + cnp)
                .then(r => r.json())
                .then(r=> console.log(r))
                .catch((err) => {console.log(err)
                })

        }
        return (
            <div className='return-book-container'>
                <Input onChange={event => onChange(event)} placeholder='Introduceti CNP' className='number'/>
                <Button onClick={() => getRentBookOfStudentByStudentCnp(this.state.cnp)} type="primary"
                        className='button-style-2'>Valideaza</Button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    books: state.setBooksReducer.books,
    student: state.setStudentReducer.student,
    canShowName: state.setCanShowNameReducer.canShowName,
})

const mapDispatchToProps = dispatch => bindActionCreators({
    setStudentDispatch: setStudentDispatch,
    setCanShowNameDispatch: setCanShowNameDispatch,
    setNotRecognizedCnpDispatch: setNotRecognizedCnpDispatch,

}, dispatch)

export default connect(mapStateToProps,
    mapDispatchToProps)
(ReturnABookPage);