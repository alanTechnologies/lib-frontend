import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import {Button, Input} from "antd";
import setStudentDispatch from "../redux/dispatch/SetStudentDispatch";
import setCanShowNameDispatch from "../redux/dispatch/SetCanShowNameDispatch";
import fetchRentBooksByStudentCnpDispatch from "../redux/dispatch/FetchRentBooksByStudentCnpDispatch";
import setNotRecognizedCnpDispatch from "../redux/dispatch/SetNotRecognizedCnp";
import BookCardToReturn from "../components/BookCardToReturn";
import PaginationList from "react-pagination-list";

class ReturnABookPage extends Component {

    render() {
        const {rentBooks,
            } = this.props;

        const onChange = event => {
            this.setState({
                cnp: event.target.value,
            })
            console.log(event.target.value)
        }

        const getStudentByCnpFromBackend = cnp => {
            return fetch('http://localhost:8080/students-by-CNP/' + cnp)
                .then(r => r.json())
                .then(r => this.props.setStudentDispatch(r))
                .catch((err) => {console.log(err)
                })
        }


        return (
            <div className='return-book-container'>
                <Input onChange={event => onChange(event)} placeholder='Introduceti CNP' className='number'/>
                <Button onClick={() => {
                    console.log(this.state.cnp)
                    getStudentByCnpFromBackend(this.state.cnp).then(r=> this.props.setStudentDispatch(r.payload.student))
                    this.props.fetchRentBooksByStudentCnpDispatch(this.state.cnp)
                }}
                        type="primary"
                        className='button-style-2'>Valideaza</Button>

                <PaginationList
                    data={rentBooks}
                    pageSize={3}
                    renderItem={(rentBook) => (<BookCardToReturn cnp={this.state.cnp} rentBook={rentBook} book={rentBook.book}/>)}
                />


            </div>
        )
    }
}

const mapStateToProps = state => ({
    rentBooks: state.fetchRentBooksReducer.rentBooks,
    student: state.setStudentReducer.student,
    canShowName: state.setCanShowNameReducer.canShowName,

})

const mapDispatchToProps = dispatch => bindActionCreators({
    setStudentDispatch: setStudentDispatch,
    setCanShowNameDispatch: setCanShowNameDispatch,
    setNotRecognizedCnpDispatch: setNotRecognizedCnpDispatch,
    fetchRentBooksByStudentCnpDispatch: fetchRentBooksByStudentCnpDispatch,


}, dispatch)

export default connect(mapStateToProps,
    mapDispatchToProps)
(ReturnABookPage);
