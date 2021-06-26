class NetworkError extends Error {
    constructor(message) {
        super(message);
        this.name = 'NetworkError';
    }
}

// TODO: 1
const user = {
    name: 'John',
    age: 18
};

const fetchingUserFromInternet = () => {
    const isOffline = false;
    return new Promise((resolve, reject) => {
        if (isOffline) {
            reject(new NetworkError('Gagal mendapatkan data dari internet'), null);
        } else {
            resolve(user);
        }
    });

};


// TODO: 2
async function gettingUserName (){
    const user = await fetchingUserFromInternet()
    return user.name;
    // console.log(user.name)
    // .then((user) => {
    //     return user.name;
    // })
    // .catch(error => {
    //     console.log(error)
    // });
};
// console.log(fetchingUserFromInternet())
gettingUserName();
console.log(gettingUserName());


// .catch(rejectedReason => {
//     console.log(rejectedReason)
// });