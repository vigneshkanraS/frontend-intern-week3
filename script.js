document.getElementById('loadUsers').addEventListener('click', fetchUsers);

function fetchUsers() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
      return response.json();
    })
    .then(users => {
      displayUsers(users);
    })
    .catch(error => {
      document.getElementById('userList').innerHTML = `<p style="color: red;">${error.message}</p>`;
    });
}

function displayUsers(users) {
  const userList = document.getElementById('userList');
  userList.innerHTML = ''; 
  users.forEach(user => {
    const div = document.createElement('div');
    div.className = 'user-card';
    div.innerHTML = `
      <h3>${user.name}</h3>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>Company:</strong> ${user.company.name}</p>
    `;
    userList.appendChild(div);
  });
}
