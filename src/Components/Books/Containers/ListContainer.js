import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchBooks, searchBook } from '../../../Actions/booksActions.js';
import ListView from '../Presentations/ListView.js'
import { toast } from "react-toastify";

class ListContainer extends Component {
    constructor(props) {
        super(props);

        this.state={
            books:{},
            booksList:[],
            term:'',
        }
    }

componentDidMount() {
    this.props.fetchBooks();
}

static getDerivedStateFromProps(nextProps, prevState) {
  
  let returnState = {}
    if(nextProps.books !== undefined && nextProps.books !== prevState.books){
      returnState.books = nextProps.books ? nextProps.books : {}
      returnState.booksList = nextProps.books.data ? nextProps.books.data : []
      
      return returnState;
    }
    return null;
  }

  bookEdit = (id) => {
    
    //localStorage.setItem('userID', id)
    return (
      <div>
        {this.props.history.push(`/add-book/${id}/edit`)}
      </div>
    );
  }

  bookAdd = () => {
 
      return (
        <div>
          {this.props.history.push(`/add-book`)}
        </div>
      );
    }

    handleInputChange =(event)=>{
      const target = event.target;
      let value = target.value;
  
      this.setState({ [event.target.name]: value });
    }
  
    handleSubmit = (e)=>{
      e.preventDefault();
      this.props.searchBook(this.state.term)
    }

    render() {
        return (
            <div>
                <ListView 
                  data={this.state} 
                  bookAdd={this.bookAdd} 
                  bookEdit={this.bookEdit} 
                  handleSubmit={this.handleSubmit}  
                  handleInputChange = {this.handleInputChange}
                />
            </div>
        )
    }
}
function mapStateToProps(state) {
    let returnState = {};
    if (state.BooksReducer.action === "BOOKS_LIST") {
      if(state.BooksReducer.data.status != 200){
       
      }
      else {
          returnState.books= state.BooksReducer.data
        }
      }

      if (state.BooksReducer.action === "SEARCH_BOOK") {
        if(state.BooksReducer.data.status != 200){
           toast.error("Server Error") 
        }
        else {
            returnState.books= state.BooksReducer.data
          
          }
        }
      return returnState;
    }
  
  function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchBooks: fetchBooks, searchBook: searchBook }, dispatch)
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);
  