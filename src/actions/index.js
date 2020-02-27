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

export { CREATEBOOK, REMOVEBOOK };
