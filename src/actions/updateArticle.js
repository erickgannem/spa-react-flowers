async function updateArticle(fields, dispatchers, setters, currentData) {
  const { errorDispatch, loadingDispatch } = dispatchers;
  const { setSuccesfullyUpdated, setIsEditing } = setters;
  const { name } = currentData;
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
      priceInput: priceInput.current.value,
      description: descriptionInput.current.value,
      available: (switchInput.current.checked ? 'on' : 'off'),
      image: droppedFile,
    };
    if (body.name === '' || body.description === '' || body.price === '') {
      throw new Error('All fields must be filled');
    }
    await fetch(` http://lapalabra.free.fr/api/articles/${name}`, {
      method: 'PUT',
      headers: new Headers({
        Authorization: `Bearer ${localStorage.getItem('@jdm_user_token')}`,
      }),
      body,
    });
    loadingDispatch({ type: 'UNSET_LOADING' });
    setSuccesfullyUpdated(true);
    setIsEditing(false);
  } catch (err) {
    errorDispatch({ type: 'SET_ERROR', payload: { error: { message: err.message } } });
    loadingDispatch({ type: 'UNSET_LOADING' });
  }
}

export default updateArticle;
