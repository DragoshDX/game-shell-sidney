const initialState = {
  entities: [],
};

export const usersReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case 'users/setUsers':
      return {
        entities: payload,
      };
    default:
      return state;
  }
};
