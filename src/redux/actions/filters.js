export const setSortBy = (name) => ({
  type: 'SET_SORT_BY',
  payload: name,
});

export const setCategory = (cartId) => ({
  type: 'SET_CATEGORY',
  payload: cartId,
});