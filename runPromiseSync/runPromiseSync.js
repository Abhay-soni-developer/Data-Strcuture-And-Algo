function runSyncStep(promises, result, i, resolve, reject) {
  if (i >= promises.length) {
    resolve(result);
    return;
  }

  promises[i]()
    .then((res) => {
      result.push(res);
      runSyncStep(promises, result, i + 1, resolve, reject);
    })
    .catch((err) => reject(err));
}

function runSync(promises) {
  return new Promise((resolve, reject) =>
    runSyncStep(promises, [], 0, resolve, reject),
  );
}
