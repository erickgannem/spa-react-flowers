async function signInUser(logInData, dispatchers, setLocation) {
  const { username, password } = logInData;
  const { authDispatch, feedbackDispatch } = dispatchers;
  try {
    feedbackDispatch({ type: 'SET_LOADING' });
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
        feedbackDispatch({ type: 'UNSET_LOADING' });
        setLocation('/panel');
      } else {
        feedbackDispatch({ type: 'UNSET_LOADING' });
        throw new Error('Nombre de usuario o contraseña incorrecta');
      }
    } else {
      feedbackDispatch({ type: 'UNSET_LOADING' });
      throw new Error('No se permiten campos vacios');
    }
  } catch (err) {
    feedbackDispatch({ type: 'UNSET_LOADING' });
    feedbackDispatch({ type: 'SET_ERROR', payload: { error: { message: err.message } } });
  }
}

export default signInUser;
