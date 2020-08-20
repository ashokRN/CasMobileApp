const axios = require('axios');

exports.login = async (regno, password) => {
  try {
    const response = await axios.post(
      'http://192.168.1.9:3000/api/user/login',
      {
        email: regno,
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
      'http://192.168.1.9:3000/api/user/get', {
      headers: {
        Authorization: `${token}`
      }
    });
    return await response;
  } catch (error) {
    throw error
  }
}
