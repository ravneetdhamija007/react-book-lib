import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toast } from "react-toastify";
import { addBook, getBook, updateBook, deleteBook } from '../../../Actions/booksActions.js';
import AddEditBookView from '../Presentations/AddEditBookView.js';


class AddEditBook extends Component {
    constructor(props) {
    super(props);
        
        this.state={
            bookName:'',
            bookDescription:'',
            booksCategory:'',
            count:'',
            author:'',
            price:'',
            bookId: '',
            isShowDeleteButton:false,
            bookData: {},
        
        }
    }

    componentDidMount() {
        let id = this.props.match.params.id
        let isShowDeleteButton = true;
        if(id !== undefined && id !== null){
           this.props.getBook(id) 
           this.setState({isShowDeleteButton: true, bookId: id})     
        }
    }

    static getDerivedStateFromProps(props, state){
       let returnState = {}
        if(props.bookData !== undefined && props.bookData !== state.bookData ){
            returnState.bookData = props.bookData ? props.bookData : {}
            returnState.booksCategory = props.bookData.data.category
            returnState.bookDescription =  props.bookData.data.description
            returnState.bookName = props.bookData.data.title
            returnState.count = props.bookData.data.count
            returnState.author = props.bookData.data.author
            returnState.price = props.bookData.data.price

            if(props.redirect !== undefined && props.redirect == true){
                returnState.redirect = false
                toast.success(props.bookData.message)
                props.history.push("/books")
            }
            
            return returnState

          
        }
        if(props.deleted !== undefined && props.deleted == true){
            returnState.delete = false
            toast.success("Book Deleted Successfully")
            props.history.push("/books")
            return returnState
        }
         return null
    }

    handleInputChange=(event)=>{
    const target = event.target;
    let value = target.value;

    this.setState({ [event.target.name]: value });
    }

    handleSubmit =(e)=>{
    e.preventDefault();
    let formData = {};
    let bookId = this.state.bookId
    let error = false;

    //---------------------Front-End Validation------------------------//
    

    if (typeof this.state.bookName === undefined || this.state.bookName === null || this.state.bookName.trim() === '') {
        toast.error("Book Name is Required!")
        error = true;
        return;
      }    

    if (typeof this.state.bookDescription === undefined || this.state.bookDescription === null || this.state.bookDescription.trim() === '') {
        toast.error("Book Description is Required!")
        error = true;
        return;
    }

    if (typeof this.state.booksCategory === undefined || this.state.booksCategory === null || this.state.booksCategory == '') {
        toast.error("Please Select Book Category!")
        error = true;
        return;
    }

    if (typeof this.state.count === undefined || this.state.count === null || this.state.count == '') {
        toast.error("Count is Required!")
        error = true;
        return;
    }
    
    if (isNaN(this.state.count)) {
        toast.error("Please fill the Number in Count")
        error = true;
        return;
    }

    if (typeof this.state.author === undefined || this.state.author === null || this.state.author.trim() === '') {
        toast.error("Please fill the Author Name")
        error = true;
        return;
    }

    if (typeof this.state.price === undefined || this.state.price === null || this.state.price == '') {
        toast.error("Price is Required!")
        error = true;
        return;
    }
    
    if (isNaN(this.state.count)) {
        toast.error("Please fill the Number in Price")
        error = true;
        return;
    }

    formData = {
        title: this.state.bookName,
        description: this.state.bookDescription,
        category: this.state.booksCategory,
        count: this.state.count,
        author:this.state.author,
        price: this.state.price,

    
    }

    if(error){
        return;
    }

    if(!this.state.bookId){    
    this.props.addBook(formData);   
    }else{
        this.props.updateBook(bookId, formData)
    }
}
    bookDelete = (id)=>{
        if(id){
       this.props.deleteBook(id)
        }     
    }

    render() {
        return (
            <div>
                <AddEditBookView 
                    data={this.state}
                    handleInputChange = {this.handleInputChange}   
                    handleSubmit={this.handleSubmit}
                    bookDelete = {this.bookDelete}
                />
            </div>
        )
    }
}

function mapStateToProps(state) {
    let returnState = {};
    if (state.BooksReducer.action === "GET_BOOK") {
        
      if(state.BooksReducer.data.status != 200){
        toast.error('Server Error Please Try Again Later')
      }
      else {
          returnState.bookData= state.BooksReducer.data
          //returnState.redirect = true;
        }
      }

      if (state.BooksReducer.action === "ADD_BOOK") {
        if(state.BooksReducer.data.status != 200){
            toast.error('Server Error Please Try Again Later')

        }
        else {
            returnState.bookData= state.BooksReducer.data
            returnState.redirect = true; 
          }
        }

        if (state.BooksReducer.action === "UPDATE_BOOK") {
            if(state.BooksReducer.data.status != 200){
             toast.error('Server Error Please Try Again Later')
    
            }
            else {
                returnState.bookData= state.BooksReducer.data
                returnState.redirect = true; 
              }
            }

    
        if (state.BooksReducer.action === "DELETE_BOOK") {
            if(state.BooksReducer.data.status != 200){
            toast.error(state.BooksReducer.data.message)
    
            }
            else {
                returnState.deleted = true; 
              }
            }    

      return returnState;
    }
  
  function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getBook: getBook, addBook: addBook, deleteBook: deleteBook, updateBook:updateBook }, dispatch)
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(AddEditBook);
