import shopConfig from '../shopConfig';

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
      imageFile: droppedFile,
      image: droppedFile.getAll('file')[0].name,
    };
    if (body.name === '' || body.description === '' || body.price === '' || !(body.imageFile instanceof FormData)) {
      throw new Error('All fields must be filled');
    }

    await fetch(shopConfig.add_endpoint, {
      method: 'POST',
      headers: new Headers({
        Authorization: `Bearer ${localStorage.getItem('@jdm_user_token')}`,
      }),
      body: JSON.stringify(body),
    });
    errorDispatch({ type: 'UNSET_ERROR' });
    setSuccesfullyAdded(true);
    loadingDispatch({ type: 'UNSET_LOADING' });
  } catch (err) {
    errorDispatch({
      type: 'SET_ERROR',
      payload: {
        error: {
          newArticle: {
            message: err.message,
          },
        },
      },
    });
    loadingDispatch({ type: 'UNSET_LOADING' });
  }
}

export default submitNewArticle;
