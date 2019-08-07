const fetch = require('node-fetch');
const config = require("../config");

class SafeRequest {
  constructor(url) {
    this.url = url
    this.baseUrl = config.phpBaseUrl
  }
  async fetch(data = {}, type = 'GET', resType = 'JSON') {
    let url = this.baseUrl + this.url;
    let requestConfig = {
      method: type,
    }
    type = type.toUpperCase();
    resType = type.toUpperCase();
    if (type == 'GET') {
      let dataStr = '';
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&';
      })
      if (dataStr !== '') {
        dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
        url = url + '?' + dataStr;
      }
    }

    if (type == 'POST') {
      Object.defineProperty(requestConfig, 'body', {
        value: JSON.stringify(data)
      })
    }

    let responseJson;

    try {
      const response = await fetch(url, requestConfig);
      responseJson = await response.json();
      // if (resType === 'TEXT') {
      //   responseJson = await response.text();
      // } else {
      //   responseJson = await response.json();
      // }
    } catch (err) {
      console.log('与后端通讯异常', err);
      throw new Error(err)
    }
    return responseJson
  }
}

module.exports = SafeRequest;