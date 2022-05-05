fetch('todos/kaung.json')

  .then(response => {
    if (response.status === 200) {
      console.log("resolved");
      console.log(response);

    }
    return response.json();
  })

  .then(data => {
    console.log(data);
  })

  .catch(err => console.log(err));