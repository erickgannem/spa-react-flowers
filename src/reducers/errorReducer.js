export default function errorReducer(state, action) {
  switch (action.type) {
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload.error,
      };
    case 'UNSET_ERROR':
      return {
        ...state,
        error: {},
      };
    default:
      return state;
  }
}
