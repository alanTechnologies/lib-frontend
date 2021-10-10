import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import fetchBooksDispatch from "../redux/dispatch/FetchBooksDispatch";
import '../css/HomePage.css';
import SearchBookComponent from "./SearchBookComponent";
import PaginationList from "react-pagination-list";
import BookCard from "../components/BookCard";

class HomePage extends Component {

    componentDidMount() {
        const {fetchBooksDispatch} = this.props;
        fetchBooksDispatch();
    }

    render() {
        const {books} = this.props;

        return (
            <div className='home-page-container'>
                    <div style={{justifyContent:'center'}}>
                        <SearchBookComponent/>
                        <PaginationList
                            data={books}
                            pageSize={3}
                            renderItem={(book) => (
                                            <BookCard book={book}/>
                            )}
                        />
                    </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    books: state.setBooksReducer.books,
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchBooksDispatch: fetchBooksDispatch,

}, dispatch)

export default connect(mapStateToProps,
    mapDispatchToProps)
(HomePage);
