const BASE_URL = "https://65f1b511034bdbecc76370c4.mockapi.io/todos";

// get all todos
export const getTodos = () => {
  return fetch(BASE_URL).then((res) => res.json());
};

// add a todo
export const addTodo = (todo) => {
  return fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
};

// delete a todo
export const deleteTodo = (id) => {
  return fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
};

// update a todo
export const updateTodo = (id, status) => {
  return fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ isDone: !status }),
  });
};