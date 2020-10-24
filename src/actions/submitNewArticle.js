async function submitNewArticle(fields, dispatchers, setters) {
  const { errorDispatch, loadingDispatch } = dispatchers;
  const { setSuccesfullyAdded } = setters;
  const {
    nameInput,
    switchInput,
    descriptionInput,
    priceInput,
    droppedFile,
  } = fields;

  try {
    loadingDispatch({ type: 'SET_LOADING' });
    const body = {
      name: nameInput.current.value,
      active: switchInput.current.checked ? 'on' : 'off',
      description: descriptionInput.current.value,
      price: priceInput.current.value,
      image: droppedFile,
    };
    if (body.name === '' || body.description === '' || body.price === '' || !(body.image instanceof FormData)) {
      throw new Error('All fields must be filled');
    }

    await fetch('http://lapalabra.free.fr/api/articles/', {
      method: 'POST',
      headers: new Headers({
        Authorization: `Bearer ${localStorage.getItem('@jdm_user_token')}`,
      }),
      body: JSON.stringify(body),
    });
    setSuccesfullyAdded(true);
    loadingDispatch({ type: 'UNSET_LOADING' });
  } catch (err) {
    errorDispatch({ type: 'SET_ERROR', payload: { error: { message: err.message } } });
    loadingDispatch({ type: 'UNSET_LOADING' });
  }
}

export default submitNewArticle;
