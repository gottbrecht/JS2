const tbody = document.getElementById("tbody");

const expensiveCars = cars.filter(car => car.price > 5000);

const tableRowsExpensive = expensiveCars.map(car => `
    <tr>
        <td>${car.id}</td>
        <td>${car.year}</td>
        <td>${car.make}</td>
        <td>${car.model}</td>
        <td>${car.price}</td>
    </tr>
`).join("");

tbody.innerHTML = tableRowsExpensive;

const chevyCars = cars.filter(car => car.make === 'Chevy');

const tableRowsChevy = chevyCars.map(car => `
    
tbody.innerHTML = tableRowsChevy;

const carsByYearAsc = cars.slice().sort((a, b) => a.year - b.year);

const tableRowsByYearAsc = carsByYearAsc.map(car => `);



