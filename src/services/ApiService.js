const axios = require('axios');
const config = require('../config/config');

exports.login = async (regno, password) => {
  try {
    const response = await axios.post(
      `${config.api_url}/api/login`,
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
      `${config.api_url}/api/get`, {
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
      `${config.api_url}/api/post/getAll`,{
      headers: {
        Authorization: `${token}`
      }
      
    });
    return await response;
  } catch (error) {
    throw error
  }
}