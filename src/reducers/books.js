const randomNum = () => Math.floor(Math.random() * 100);
const list = [{ id: randomNum(), title: 'Java', category: 'sci-fi' }, { id: randomNum(), title: 'Scripting', category: 'history' }];

const books = (state = list, action) => {
  switch (action.type) {
    case 'CREATE BOOK':
      return [...state, action.book];
    case 'REMOVE BOOK':
      return state.filter(book => book.id !== action.book.id);
    default:
      return state;
  }
};

export default books;
