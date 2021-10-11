import React, {Component} from 'react';
import '../css/BookCard.css'
import {Button} from 'antd';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router";

class BookCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const {history} = this.props;

        return (
            <div className='container-book-card'>
                <img
                    src={this.props.book.url}
                     style={{height: '60%', width: '80%'}}/>

                <div className='container-price' style={{fontWeight: 'bolder', fontSize: '1.5vw'}}>
                    {this.props.book.title}
                </div>
                <div className='container-books' style={{fontWeight: 'bold', fontSize: '1vw'}}>
                    {this.props.book.author}
                </div>

                <div className='buttons-container'>
                    <Button
                        className='button-style-1'
                    >
                        Cumparati
                    </Button>

                    <Button onClick={() => history.push('/inchiriaza-o-carte')}
                            className='button-style-2'
                    >
                        Inchiriati
                    </Button>
                </div>

            </div>
        )
    }

}

const mapStateToProps = state => ({
    student: state.setStudentReducer.student,
})

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch)

export default connect(mapStateToProps,
    mapDispatchToProps)(withRouter(BookCard));
