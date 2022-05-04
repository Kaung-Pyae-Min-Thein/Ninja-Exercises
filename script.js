const getTodos = (resource, callback) => {
  const HttpReq = new XMLHttpRequest();

  HttpReq.addEventListener("readystatechange", () => {
    if (HttpReq.status === 200 && HttpReq.readyState === 4) {
      const data = JSON.parse(HttpReq.responseText);
      callback(undefined, data);
    }
    else if (HttpReq.readyState === 4) {
      callback("could not fetch data", undefined);
    }
  });
  HttpReq.open("GET", resource);
  HttpReq.send();
};

getTodos("todos/kaung.json", (err, data) => {
  if (err) {
    console.log(err);
  }
  else {
    console.log(data);
  }
  

});


 // req.open("GET", 'https://jsonplaceholder.typicode.com/todos/');