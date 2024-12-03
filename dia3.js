function organizeInventory(inventory) {
    const object = {};
    for (element of inventory) {
        if (!object[element.category]) {
            object[element.category] = {};
        }
        if (object[element.category][element.name] !== undefined) { object[element.category][element.name] += element.quantity; } else { object[element.category][element.name] = element.quantity; }
    } return object;
}
const inventary = [
    { name: 'doll', quantity: 5, category: 'toys' }, 
    { name: 'car', quantity: 3, category: 'toys' }, 
    { name: 'ball', quantity: 2, category: 'sports' }, 
    { name: 'car', quantity: 2, category: 'toys' }, 
    { name: 'racket', quantity: 4, category: 'sports' }
] 
const inventary2 = [
    { name: 'paint', quantity: 10, category: 'art' }, 
    { name: 'paint', quantity: 3, category: 'art' }, 
    { name: 'book', quantity: 10, category: 'education' }, 
    { name: 'book', quantity: 5, category: 'education' },
] 
let hola = organizeInventory(inventary); 
let hola2 = organizeInventory(inventary2); 
console.log(hola); 
console.log(hola2);