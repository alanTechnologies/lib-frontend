import React, {Component} from 'react';
import {Button} from 'antd';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import setStudentDispatch from "../redux/dispatch/SetStudentDispatch";
import setCanShowNameDispatch from '../redux/dispatch/SetCanShowNameDispatch';
import setNotRecognizedCnpDispatch from "../redux/dispatch/SetNotRecognizedCnp";

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

            return fetch('http://localhost:8080/students-by-CNP/' + cnp)
                .then(r =>r.json())
                .then(r => this.props.setStudentDispatch(r))
                .then(() => this.props.setCanShowNameDispatch(true))
                .then(()=> this.setState({rentBookButtonDisabled:false}))
                .then(() => this.props.setNotRecognizedCnpDispatch(false))
                .catch(() => this.props.setNotRecognizedCnpDispatch(true))
                .catch(() => this.props.setCanShowNameDispatch(false))
                .catch(() => this.setState({rentBookButtonDisabled:true}))

        }

        return (
            <div className='container-button-input'>
                <input onChange={event => onChange(event)} placeholder='Introduceti CNP' className='number'/>
                <Button onClick={() => getStudentByCnpFromBackend(this.state.cnp)} type="primary"
                        className='button-style-2'>Valideaza</Button>

                <Button  disabled={this.state.rentBookButtonDisabled} onClick={() => console.log("am inchiriat o carte")} type="primary"
                        className='button-style-2'>Inchiriaza</Button>
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
