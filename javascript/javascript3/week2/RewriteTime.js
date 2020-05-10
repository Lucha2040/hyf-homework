const promiseToTimeOut = (milisecs) => {
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, milisecs);
  }).then(() => console.log(`Called after ${milisecs} miliseconds`));
};

const letsStalkSomeone = () => {
  new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  })
    .then((position) => {
      console.log(position);
    })
    .catch((error) => console.log(error));
};

promiseToTimeOut(9000);
letsStalkSomeone();
