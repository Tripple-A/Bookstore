const deleteBook = (state, book) => {
  const index = state.forEach((element,index) => {
       if(element.id === book.id) {return index}
   });
   return [...state.slice(0,index), ... state.slice(index + 1)]
}

const bookReducer = (state, action) => {
    switch(action.type) {
        case 'CREATE BOOK':
        return [... state, action.book]
        case 'REMOVE BOOK':
        return deleteBook(state, action.book)
        default:
        return state
    }
}