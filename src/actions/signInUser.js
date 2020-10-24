async function signInUser(logInData, dispatchers, states, setLocation) {
  const { username, password } = logInData;
  const { authDispatch, errorDispatch, loadingDispatch } = dispatchers;
  const { errorState } = states;
  try {
    loadingDispatch({ type: 'SET_LOADING' });
    const response = await fetch('http://lapalabra.free.fr/api/login_check/', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    });
    const { data } = await response.json();
    const { token, json_payload: jsonPayload } = data;

    if (jsonPayload.username) {
      if (token) {
        localStorage.setItem('@jdm_user_token', token);
        localStorage.setItem('@jdm_current_user', JSON.stringify({ username: jsonPayload.username }));
        authDispatch({
          type: 'SIGN_IN',
          payload: {
            user: { username: jsonPayload.username },
            token,
          },
        });
        if (errorState.error.message) {
          errorDispatch({ type: 'UNSET_ERROR' });
        }
        loadingDispatch({ type: 'UNSET_LOADING' });
        setLocation('/');
      } else {
        loadingDispatch({ type: 'UNSET_LOADING' });
        throw new Error('Nombre de usuario o contraseña incorrecta');
      }
    } else {
      loadingDispatch({ type: 'UNSET_LOADING' });
      throw new Error('No se permiten campos vacios');
    }
  } catch (err) {
    loadingDispatch({ type: 'UNSET_LOADING' });
    errorDispatch({
      type: 'SET_ERROR',
      payload: {
        error: {
          signIn: { message: err.message },
        },
      },
    });
  }
}

export default signInUser;
