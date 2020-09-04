const axios = require('axios');
const config = require('../config/config');

exports.login = async (email, password) => {
  try {
    const response = await axios.post(
      `${config.api_url}/login`,
      {
        email: email,
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
      `${config.api_url}/getUser`, {
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
    const response = await axios.get(
      `${config.api_url}/post/getAll`,{
      headers: {
        Authorization: `${token}`
      }
      
    });
    return await response;
  } catch (error) {
    throw error
  }
}