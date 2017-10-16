const isofetch = require('isomorphic-fetch');


function fetch(url, opt) {
  opt = opt || {};
  opt.method = opt.method || 'GET';
  if (typeof opt.credentials === 'undefined') {
    opt.credentials = 'include';
  }


  if (opt.data) {
    if (/GET|HEAD/.test(opt.method)) {
      url = `${url}?${_.obj2query(opt.data)}`;
    } else {
      opt.headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      }
      opt.body = _.obj2query(opt.data);
    }
  }


  return isofetch(url, opt).then(function (ret) {
    return !opt.raw ? ret.json() : ret

  }).catch(function (err) {
    throw err
  }).then((res) => {
    return res;
  });


}


module.exports = fetch