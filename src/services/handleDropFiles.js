export default function handleDropFiles(files) {
  const formData = new FormData();
  const file = files[0];
  formData.append('file', file);
  return formData;
}
