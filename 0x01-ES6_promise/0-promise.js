// Only make Promise
function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    /* eslint-disable */
      if (true) {
        resolve();
      } else {
        reject();
      }
      /* eslint-enable */
  });
}

export default getResponseFromAPI;
