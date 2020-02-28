const CREATEBOOK = book => (
  {
    type: 'CREATE BOOK',
    book,
  }
);

const REMOVEBOOK = book => ({
  type: 'REMOVE BOOK',
  book,
});

const CHANGE_FILTER = filter => ({
  type: 'CHANGE_FILTER',
  filter,
});

export { CREATEBOOK, REMOVEBOOK, CHANGE_FILTER };
