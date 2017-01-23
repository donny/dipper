/* eslint-disable no-undef */
function search(query, cb) {
  console.log('1');
  return fetch(`/swapi/people/${query}`, {
    accept: 'application/json',
    cache: "no-cache",
    referrerPolicy: "no-referrer",
    origin: "http://fiftytwo-dipper.netlify.com"
  }).then(checkStatus)
    .then(parseJSON)
    .then(cb);
}

function checkStatus(response) {
  console.log('2');
  if (response.status >= 200 && response.status < 300) {
    console.log('4');
    // console.log(response);
    return response;
  } else {
    console.log('3');
    const error = new Error(`HTTP Error ${response.statusText}`);
    error.status = response.statusText;
    error.response = response;
    console.log(error); // eslint-disable-line no-console
    throw error;
  }
}

function parseJSON(response) {
  console.log('5');
  console.log(response.json());

  return response.json();
}

const Client = { search };
export default Client;
