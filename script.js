let person = {
    name: 'Rafi',
    age: 24,
    work: () => {
        alert('Bekar');
    },
};

person.isAdmin = true;

let out = document.getElementById('output');
out.innerHTML = person['name'] + ' ' + person['age'];

console.log(person);