fetch('http://localhost:3000/1')
.then(res => res.json())
.then(code => console.log(code))