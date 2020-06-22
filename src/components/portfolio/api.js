/* eslint-disable no-use-before-define */
export const fetchPortfolio = () => {
  const dataPromise = fetchData;
  return {
    data: wrapPromise(dataPromise)
  };
};

const wrapPromise = (promise) => {
  let status = 'pending';
  let result;
  const suspender = promise.then(
    (r) => {
      status = 'success';
      result = r;
    },
    (e) => {
      status = 'error';
      result = e;
    }
  );
  return {
    // eslint-disable-next-line consistent-return
    read() {
      if (status === 'pending') {
        throw suspender;
      } else if (status === 'error') {
        throw result;
      } else if (status === 'success') {
        return result;
      }
    }
  };
};

const fetchData = new Promise((resolve, reject) => {
  const apiInitialUrl = './data/projects.data.json';
  fetch(apiInitialUrl)
    .then((res) => res.json())
    .then((data) => resolve(data.projects))
    .catch((e) => {
      reject(e);
    });
});
