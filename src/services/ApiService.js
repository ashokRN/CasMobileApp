const axios = require('axios');

exports.login = async (regno, password) => {
  try {
    const response = await axios.post(
      'http://192.168.1.9:3000/api/login',
      {
        regNo: regno,
        password: password,
      },
    );
    return await response;
  } catch (error) {
    throw error
  }
}

exports.getUser = async (token) => {
  try {
    const response = await axios.get(
      'http://192.168.1.9:3000/api/get', {
      headers: {
        Authorization: `${token}`
      }
    });
    return await response;
  } catch (error) {
    throw error
  }
}

exports.getAllPosts = async (token) =>{
  try {
    const response = await axios.get('http://192.168.1.9:3000/api/post/getAll',{
      headers: {
        Authorization: `${token}`
      }
    });
    return await response;
  } catch (error) {
    throw error
  }
}
