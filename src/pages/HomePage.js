import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import fetchBooksDispatch from "../redux/dispatch/FetchBooksDispatch";
import {Card} from "antd";
import '../css/HomePage.css';
import SearchBookComponent from "./SearchBookComponent";
import PaginationList from "react-pagination-list";
import Grid from "antd/es/card/Grid";

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
                        <div>
                            <Card
                                key={book.id}
                                size={'small'}
                                style={{
                                    width: 300,
                                    marginTop: '2vh',
                                    borderRadius: '.5vw',
                                    backgroundColor: '#f5f5f5',
                                    margin:'auto'
                                }}>
                                {book.title},
                                {book.author},
                                {book.price},
                                {book.genre}
                            </Card>
                        </div>
                       )

        return (
            <div className='home-page-container'>
                    <div style={{justifyContent:'center'}}>
                        <SearchBookComponent/>
                        <PaginationList
                            data={books}
                            pageSize={2}
                            renderItem={(book) => (
                                <div>
                                    <Grid
                                        key={book}
                                        className='grid'>
                                        <Card
                                            key={book.id}
                                            size={'small'}
                                            style={{
                                                width: '100%s',
                                                marginTop: '2vh',
                                                borderRadius: '.5vw',
                                                // backgroundColor: '#f5f5f5',
                                                margin:'auto'
                                            }}>
                                            {book.title},
                                            {book.author},
                                            {book.price},
                                            {book.genre}
                                        </Card>
                                    </Grid>
                                </div>
                            )}
                        />
                        {/*{mappedBooks}*/}

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
