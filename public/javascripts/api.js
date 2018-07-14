window.callApi = function(url, method, payload) {
  return fetch(url, {
    method,
    body: JSON.stringify(payload)
  }).then(console.log)
}
