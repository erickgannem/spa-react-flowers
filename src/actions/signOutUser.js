export default function signOutUser(authDispatch) {
  localStorage.removeItem('@jdm_user_token');
  localStorage.removeItem('@jdm_current_user');
  authDispatch({ type: 'SIGN_OUT' });
}
