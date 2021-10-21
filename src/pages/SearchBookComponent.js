import React, {Component} from 'react';
import '../css/SearchBookComponent.css';
import {Button, Input, Radio} from 'antd';
import 'antd/dist/antd.css';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import setTypeOfSearchBookDispatch from '../redux/dispatch/SetTypeOfSearchBookDispatch';
import setBooksDispatch from "../redux/dispatch/SetBooksDispatch";
import logo from '../assets/library logo.PNG';
import {withRouter} from "react-router";

class SearchBookComponent extends Component {
    state = {
        searchCondition: 'Title',
        valueFromTextField: '',
        books: [],
    }

    render() {

        const {history} = this.props;

        const onChangeInput = event => this.setState({
            valueFromTextField: event.target.value
        })

        const {
            typeOfSearchCondition,
        } = this.props;

        const onChange = event => {
            this.props.setTypeOfSearchBookDispatch(event.target.value)
            console.log(typeOfSearchCondition)
        }

        const fetchBooksByAuthor = searchCondition => {
            return fetch('http://localhost:8080/filtered-books-author/' + searchCondition)
                .then(r => r.json())
                .then(r => this.props.setBooksDispatch(r))
                .catch(err => console.log(err))
        }

        const fetchBooksByTitle = searchCondition => {
            return fetch('http://localhost:8080/filtered-books-title/' + searchCondition)
                .then(r => r.json())
                .then(r => this.props.setBooksDispatch(r))
                .catch(err => console.log(err))
        }

        const fetchBooksByTitleOrAuthor = (typeOfSearchCondition, valueFromTextField) => {
            typeOfSearchCondition === 'Author' ? fetchBooksByAuthor(valueFromTextField) : fetchBooksByTitle(valueFromTextField)
        }

        return (
            <div className='search-book-container'>

                <img src={logo} alt="Canvas Logo" className="logo"/>
                <div className='input-button-container'>

                    <Input onChange={onChangeInput} placeholder='Search...'/>
                    <Button
                        style={{backgroundColor: '#333d51', color: 'white'}}
                        onClick={() => fetchBooksByTitleOrAuthor(typeOfSearchCondition, this.state.valueFromTextField)}> Cauta </Button>
                    <Button
                        style={{backgroundColor: 'indianred', color: 'white'}}
                        onClick={() => history.push('/returneaza-o-carte')}> Returneaza o carte </Button>
                </div>
                <div className='checkbox-container'>
                    <Radio.Group onChange={onChange} value={typeOfSearchCondition} className='container-radio-buttons'>
                        <Radio value='Author'>
                            <p>Search by author</p>
                        </Radio>

                        <Radio value='Title'>
                            <p>Search by title</p>
                        </Radio>
                    </Radio.Group>
                </div>
            </div>

        )
    }
}

const mapStateToProps = state => ({
    typeOfSearchCondition: state.setTypeOfSearchBookReducer.typeOfSearchCondition,
    books: state.setBooksReducer.books,
})

const mapDispatchToProps = dispatch => bindActionCreators({
    setTypeOfSearchBookDispatch: setTypeOfSearchBookDispatch,
    setBooksDispatch: setBooksDispatch,
}, dispatch)

export default connect(mapStateToProps,
    mapDispatchToProps)
(withRouter(SearchBookComponent));
