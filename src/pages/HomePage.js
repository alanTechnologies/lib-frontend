import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import fetchBooksDispatch from "../redux/dispatch/FetchBooksDispatch";
import {Card} from "antd";
import '../css/HomePage.css';

class HomePage extends Component {

    componentDidMount() {
        const {fetchBooksDispatch} = this.props;
        fetchBooksDispatch();
    }

    render() {
        const { books, loading} = this.props;

        console.log(books);
        const mappedBooks = books.map(
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
            }}
            >
                {book.title},
                {book.author},
                {book.price},
                {book.genre}

            </Card>
        )


        return(
            <div>
                {loading ? <p style={{
                        textAlign: 'center',
                        fontSize: '200px',
                        fontWeight: 'bold',
                        color: 'red'
                    }}> loading...</p> :
                    <div>
                        {mappedBooks}
                    </div>}

            </div>
        )
    }
}

const mapStateToProps = state => ({
    books: state.fetchBooksReducer.books,
    loading: state.fetchBooksReducer.loading,
    error: state.fetchBooksReducer.error,
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchBooksDispatch: fetchBooksDispatch,
}, dispatch)

export default connect(mapStateToProps,
    mapDispatchToProps)
(HomePage);
