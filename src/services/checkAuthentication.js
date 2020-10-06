export default function checkAuthentication() {
  return !!localStorage.getItem('@jdm_user_token');
}
