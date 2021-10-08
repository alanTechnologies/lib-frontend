import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import fetchBooksDispatch from "../redux/dispatch/FetchBooksDispatch";
import {Card} from "antd";
import '../css/HomePage.css';
import SearchBookComponent from "./SearchBookComponent";

class HomePage extends Component {

    componentDidMount() {
        const {fetchBooksDispatch} = this.props;
        fetchBooksDispatch();
    }

    render() {
        const {books} = this.props;

        const mappedBooks =
                books.map(
                    book =>
                        <Card
                            key={book.id}
                            size={'small'}
                            className={'CardBook'}
                            style={{
                                width: 300,
                                marginTop: '2vh',
                                borderRadius: '1vw',
                                backgroundColor: '#f5f5f5'
                            }}>
                            {book.title},
                            {book.author},
                            {book.price},
                            {book.genre}
                        </Card>)

        return (
            <div>
                    <div>
                        <SearchBookComponent/>
                        {mappedBooks}
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
