import React, {Component} from 'react';
import '../css/RentABook.css';
import InputCnp from "../components/InputCnp";
import {withRouter} from "react-router";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";


class RentABookPage extends Component {
    state = {
        showCnpField: false,
    }

    render() {
        const {student, canShowName} = this.props;
        console.log(this.props)
        return (
            <div className='container-inchiriaza-carte'>
                <InputCnp/>
                {canShowName ? <p>Salut, {student.name}</p> : null}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    student: state.setStudentReducer.student,
    canShowName: state.setCanShowNameReducer.canShowName,

})

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch)

export default connect(mapStateToProps,
    mapDispatchToProps)(withRouter(RentABookPage));
