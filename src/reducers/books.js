const randomNum = () => Math.floor(Math.random() * 100);
const list = [
  { id: randomNum(), title: 'The Invasion Of Aliens', category: 'Sci-Fi' },
  { id: randomNum(), title: 'The Rise of the United States', category: 'History' },
  { id: randomNum(), title: 'Elena of Avalor', category: 'Kids' },
  { id: randomNum(), title: 'Things You Do Not Know About Trump', category: 'Biography' },
  { id: randomNum(), title: 'The House of Ghosts', category: 'Horror' },
  { id: randomNum(), title: 'The ABC of Ruby', category: 'Learning' },
  { id: randomNum(), title: 'Hard Boiled', category: 'Action' },
];

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
