const baseUrl = 'http://localhost:4000';
export function getList() {
    const gql = `{
      todoList {
        key
        title
        status
      }
    }`;
    return fetch(`${baseUrl}/graphql`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: gql })
    });
};

export function add() {
    const gql = `{
      addTodo {
        key
        title
        status
      }
    }`;
    return fetch(`${baseUrl}/graphql`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: gql })
    })
}

export function update(key, title) {
    const gql = `{
      updateTodo(key: ${key}, title: "${title}") {
        key
        title
      }
    }`;
    return fetch(`${baseUrl}/graphql`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: gql })
    })
}

export function deleteItem(key) {
    const gql = `{
      deleteTodo(key: ${key}) {
        key
      }
    }`;
    return fetch(`${baseUrl}/graphql`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: gql })
    })
}
