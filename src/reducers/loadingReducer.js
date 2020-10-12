export default function loadingReducer(state, action) {
  switch (action.type) {
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: true,
      };
    case 'UNSET_LOADING':
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}
