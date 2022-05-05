const getTodos = (resource) => {

  return new Promise((resolve, reject) => {
    const HttpReq = new XMLHttpRequest();

    HttpReq.open("GET", resource);
    HttpReq.send();

    HttpReq.addEventListener('readystatechange', () => {
      if (HttpReq.status === 200 && HttpReq.readyState === 4) {
        const data = JSON.parse(HttpReq.responseText);
        resolve(data);
      }
      else if (HttpReq.readyState === 4) {
        reject("Error in fetching data");
      }
    });
  });
};

getTodos("todos/kaung.json")
  .then(data => {

    console.log("first resolve", data);
    return getTodos('todos/luigi.json');
  })
  .then(data => {
    console.log("second resolve", data);
  })
  .catch(err => {
    console.log(err);
  });


 // req.open("GET", 'https://jsonplaceholder.typicode.com/todos/');