document.getElementById('fetchUserBtn').addEventListener('click', fetchUser);

function fetchUser() {
    const userId = document.getElementById('userIdInput').value;
    const spinner = document.getElementById('spinner');
    spinner.style.display = 'block';

    fetch(`https://reqres.in/api/users/${userId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            displayUser(data);
            spinner.style.display = 'none';
        })
        .catch(error => {
            console.error('There was a problem with your fetch operation:', error);
            spinner.style.display = 'none';
        });
}

function displayUser(user) {
    const userTableBody = document.getElementById('userTableBody');
    const userData = user.data;

    // Clear existing table rows
    userTableBody.innerHTML = '';

    // Create a new row with user data
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${userData.id}</td>
        <td>${userData.first_name}</td>
        <td>${userData.last_name}</td>
        <td>${userData.email}</td>
        <td><img src="${userData.avatar}" alt="User Avatar" width="50"></td>
    `;

    // Append the new row to the table body
    userTableBody.appendChild(newRow);
}
