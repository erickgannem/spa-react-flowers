export default function feedbackReducer(state, action) {
  console.log('feedbackreducer');
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
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload.error,
      };
    case 'CLEAR_ERROR':
      return {
        ...state,
        error: {},
      };
    default:
      return state;
  }
}
