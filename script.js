const getTodos = async () => {

  const response = await fetch('todos/luigi.json');
  if (response.status !== 200) {
    throw new Error("cannot fetch the API");
  }
  const data = await response.json();

  return data;
};

getTodos()
  .then(data => console.log('resolved', data))
  .catch(err => console.log("rejected", err.message));