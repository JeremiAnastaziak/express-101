window.api = function(url, method = 'GET', payload) {
  return fetch(url, {
    method,
    body: JSON.stringify(payload)
  }).then(console.log)
}
