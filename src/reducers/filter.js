const filter = (state = 'All', action) => {
    switch (action.type) {
      case 'CHANGE_FILTER':
        return action.filter;
      default:
        return state+'hey';
    }
  };
  
  export default filter;