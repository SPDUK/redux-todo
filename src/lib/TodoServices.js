export const getTodos = () => fetch(`http://localhost:8080/todos`).then(res => res.json());

export const createTodo = name =>
  fetch(`http://localhost:8080/todos`, {
    method: 'POST',
    heeaders: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, isComplete: false })
  }).then(res => res.json());
