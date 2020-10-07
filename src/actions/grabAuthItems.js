function grabAuthItems(authDispatch) {
  const token = localStorage.getItem('@jdm_user_token');
  const currentUser = JSON.parse(localStorage.getItem('@jdm_current_user'));

  if (token) {
    authDispatch({ type: 'SIGN_IN', payload: { user: currentUser, token } });
  }
}

export default grabAuthItems;
