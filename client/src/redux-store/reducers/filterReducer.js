const defaultState = 'All';

export const filterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'All':
      return 'All';
    case 'Active':
      return 'Active';
    case 'Completed':
      return 'Completed';
    default:
      return state;
  }
};
