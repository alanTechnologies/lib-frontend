import React, {Component} from 'react';
import {Button, Input} from 'antd';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import setStudentDispatch from "../redux/dispatch/SetStudentDispatch";
import setCanShowNameDispatch from '../redux/dispatch/SetCanShowNameDispatch';
import setNotRecognizedCnpDispatch from "../redux/dispatch/SetNotRecognizedCnp";
import '../css/InputCnp.css';

class InputCnp extends Component {

    state = {
        cnp: '',
        rentBookButtonDisabled: true,
    }

    render() {

        const onChange = event => {
            this.setState({
                cnp: event.target.value,
            })
            console.log(event.target.value)
        }

        const getStudentByCnpFromBackend = cnp => {

            return fetch('http://localhost:8080/students/by-cnp/' + cnp)
                .then(r => r.json())
                .then(r => this.props.setStudentDispatch(r))
                .then(() => this.props.setCanShowNameDispatch(true))
                .then(() => this.props.setNotRecognizedCnpDispatch(false))
                .then(() => this.setState({rentBookButtonDisabled: false}))
                .catch(() => {
                    this.props.setCanShowNameDispatch(false)
                    this.props.setNotRecognizedCnpDispatch(true)
                    this.setState({rentBookButtonDisabled : true})
                })

        }

        return (
            <div className='container-button-input'>
                <Input onChange={event => onChange(event)} placeholder='Introduceti CNP' className='number'/>
                <Button onClick={() => getStudentByCnpFromBackend(this.state.cnp)} type="primary"
                        className='button-style-2'>Valideaza</Button>
            </div>
        )
    }
}


const mapStateToProps = state => ({
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
(InputCnp);
