
const list = [{ id: 1, title: 'Java', category: 'sci-fi' }, { id: 2, title: 'Scripting', category: 'history' }];

const bookReducer = (state = list, action) => {
  switch (action.type) {
    case 'CREATE BOOK':
      return [...state, action.book];
    case 'REMOVE BOOK':
      return state.filter(book => book.id !== action.book.id);
    default:
      return state;
  }
};

export default bookReducer;
