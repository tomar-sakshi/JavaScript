// Sample Data -

// Suryanshu Tomar - Orange - h3
// deathslayer - black - h4
// suryanshutomar@gmail.com - black - h5

// -------------------------------------------

// Sakshi Tomar - Orange - h3
// sakuchan - black - h4
// sakshitomar@gmail.com - black - h5

fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => {
    const jsonData = response.json();
    // console.log(jsonData);
    
    return jsonData;
})
.then((usersData))
}
