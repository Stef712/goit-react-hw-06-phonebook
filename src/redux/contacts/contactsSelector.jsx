export const getContacts = state => state.contacts;
export const getFilter = state => state.filter;

console.log('getContacts:', getContacts);

export const getFilteredContacts = state => {
  const filter = getFilter(state)?.toLowerCase() || '';

  const lowerCaseFilter = filter ? filter.toLowerCase() : '';

  return getContacts(state).filter(
    contact => contact.name?.toLowerCase().includes(lowerCaseFilter) || ''
  );
};
