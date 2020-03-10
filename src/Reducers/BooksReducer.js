const iconInitialState = {
  action: ''
}

const bookData = (state = iconInitialState, action) => {
  switch (action.type) {
    case "BOOKS_LIST":
      return {
        ...state,
        data: action.payload,
        action:'BOOKS_LIST'
      }

      case "ADD_BOOK":
      return {
        ...state,
        data: action.payload,
        action:'ADD_BOOK'
      }

      case "DELETE_BOOK":
        return {
          ...state,
          data: action.payload,
          action:'DELETE_BOOK'
        }

      case "UPDATE_BOOK":
        return {
            ...state,
            data: action.payload,
            action:'UPDATE_BOOK'
          }  

      case "GET_BOOK":
        return {
            ...state,
            data: action.payload,
            action:'GET_BOOK'
              }  

      case "SEARCH_BOOK":
        return {
          ...state,
          data: action.payload,
          action:'SEARCH_BOOK'
              }              
        
      case "EMPTY_DATA":
      {
        return { ...state, data: action.payload, action: 'EMPTY_DATA' }
      }

    default:
      return state
  }
}

export default bookData;
