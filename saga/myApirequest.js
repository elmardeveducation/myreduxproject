export const getMydata = () => {
  return fetch(
    'https://gitlab.com/gHashTag/react-native-init-data/raw/master/db.json',
  )
    .then(handleErrors)
    .then(res => res.json())
    .then(json => {
      return json;
    })
    .catch(error => console.log('url doesnt responce'));
};

// Handle HTTP errors since fetch won't.
export const handleErrors = response => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};
