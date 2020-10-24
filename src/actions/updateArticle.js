async function updateArticle(fields, dispatchers, setters, currentData) {
  const { errorDispatch, loadingDispatch } = dispatchers;
  const { setSuccesfullyUpdated, setIsEditing } = setters;
  const {
    name, image, description, price, available,
  } = currentData;
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
      name: nameInput.current.value || name,
      priceInput: priceInput.current.value || price,
      description: descriptionInput.current.value || description,
      available: (switchInput.current.checked ? 'on' : 'off') || available,
      imageFile: droppedFile,
      image,
    };

    if (body.name === '') { throw new Error('El campo Nombre no puede estar vacio'); }
    if (body.description === '') { throw new Error('El campo description no puede estar vacio'); }
    if (body.price === '') { throw new Error('El campo de Precio no puede estar vacio'); }
    if (body.imageFile instanceof FormData) { body.image = body.imageFile.getAll('file')[0].name; }

    await fetch(` http://lapalabra.free.fr/api/articles/${name}`, {
      method: 'PUT',
      headers: new Headers({
        Authorization: `Bearer ${localStorage.getItem('@jdm_user_token')}`,
      }),
      body: JSON.stringify(body),
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
