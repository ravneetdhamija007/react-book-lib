import axios from 'axios'
const url = 'http://127.0.0.1:4000/'

export function fetchBooks(){
  return dispatch => {
    axios.get(url + 'get-books').then(response => {
      dispatch({"type":"BOOKS_LIST","payload":response.data});
    }).catch(error =>{
      dispatch({"type":"BOOKS_LIST","payload": error});
    });
  }
}

export function getBook(bookId){
  return dispatch => {
    axios.get(url + 'books/'+ bookId).then(response => {
      dispatch({"type":"GET_BOOK","payload":response.data});
    }).catch(error =>{
      dispatch({"type":"GET_BOOK","payload": error});
    });
  }
}

export function addBook(formData){
  return dispatch => {
    axios.post(url + 'enter-book', formData).then(response => {
      dispatch({"type":"ADD_BOOK","payload":response.data});
    }).catch(error =>{
      dispatch({"type":"ADD_BOOK","payload": error});
    });
  }
}

export function deleteBook(bookId){
  return dispatch => {
    axios.delete(url + 'delete-book/'+bookId).then(response => {
      dispatch({"type":"DELETE_BOOK","payload":response.data});
    }).catch(error =>{
      dispatch({"type":"DELETE_BOOK","payload": error});
    });
  }
}

export function updateBook(bookId, formData){
  return dispatch => {
    axios.put(url + 'update-book/'+ bookId, formData).then(response => {
      dispatch({"type":"UPDATE_BOOK","payload":response.data});
    }).catch(error =>{
      dispatch({"type":"UPDATE_BOOK","payload": error});
    });
  }
}

export function searchBook(formData){
  return dispatch => {
   
    axios.post(url + 'search-book?title='+ formData).then(response => {
      dispatch({"type":"SEARCH_BOOK","payload":response.data});
    }).catch(error =>{
      dispatch({"type":"SEARCH_BOOK","payload": error});
    });
  }
}