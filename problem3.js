const getTodos = () => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      console.log(request.responseText);
    } else if (request.readyState === 4) {
      console.log("could not fetch the data");
    }
  });

  request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
  request.send();
};

getTodos();
getTodos();

// The program's definition of a function sends an HTTP request to a server to get to do information from it. An event listener is used to handle the response asyn, and either a successful response or an error message is logged to the console. To process the request and get the data, the function is called twice.




