class NetworkError extends Error {
  constructor(message) {
    super(message);
    this.name = 'NetworkError';
  }
}

// TODO: 1
const fetchingUserFromInternet = (callback, isOffline) => {
  setTimeout(() => {
    if (isOffline) {
      callback(new NetworkError('Gagal mendapatkan data dari internet'), null);
    }
    callback(null, { name: 'John', age: 18 });
  }, 500);
};

fetchingUserFromInternet()
// TODO: 2
const gettingUserName = () => {
  fetchingUserFromInternet((error, user) => {
    if (error) {
      return error.message;
    }
    return user.name;
  }, false);
};
console.log(gettingUserName());
