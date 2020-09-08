const {storage} = require('.');

exports.fileUpload = async (uri, filename) => {
  const response = await fetch(uri);
  const blob = await response.blob();
  const uploadImage = storage.ref(`post/${filename}`).put(blob);

    const ref = storage.ref(`post/${filename}`);
    const url = await ref.getDownloadURL();
    console.log(url, 'url');


  return url;

  //     uploadImage.on('state_changed', (snapshot) => {}, (err) => { console.log(err) },
  //         () => {
  //         storage
  //         .ref(`post/${filename}`)
  //         .getDownloadURL()
  //         .then((url) => {
  //         return uri
  //         });
  // },
  // );
};
