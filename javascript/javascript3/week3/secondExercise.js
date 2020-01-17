
function myPromise(resolveAfter) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      alert(`I am called asynchronously after ${resolveAfter} seconds`);
      resolve();
    }, resolveAfter * 1000);
  });
}

myPromise(3);
