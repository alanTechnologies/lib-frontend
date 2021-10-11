import React, {Component} from 'react';
import '../css/RentABook.css';
import InputCnp from "../components/InputCnp";
import {withRouter} from "react-router";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";


class RentABookPage extends Component {
    state = {
        showCnpField: false,
        notRecognizedCnp: false,
    }

    render() {
        const {student, canShowName,notRecognizedCnp} = this.props;
        console.log(this.props)

        return (
            <div className='container-inchiriaza-carte'>
                <InputCnp/>
                {canShowName ? <p>Salut, {student.name}</p> : null}
                {notRecognizedCnp ? <p>Nu exista nicio persoana cu acest CNP</p> : null}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    student: state.setStudentReducer.student,
    canShowName: state.setCanShowNameReducer.canShowName,
    notRecognizedCnp: state.setNotRecognizedCnpReducer.notRecognizedCnp,

})

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)

export default connect(mapStateToProps,
    mapDispatchToProps)(withRouter(RentABookPage));
