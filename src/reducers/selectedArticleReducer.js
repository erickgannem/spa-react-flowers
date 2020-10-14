export default function selectedArticleReducer(state, action) {
  switch (action.type) {
    case 'SET_SELECTED_ARTICLE':
      return {
        ...state,
        name: action.payload.name,
        description: action.payload.description,
        price: action.payload.price,
        image: action.payload.image,
        available: action.payload.available,
      };
    case 'UNSET_SELECTED_ARTICLE':
      return {
        name: '',
        description: '',
        price: '',
        image: '',
        available: '',
      };
    default:
      return state;
  }
}
