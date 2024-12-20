function fixGiftList(received, expected) {
    let missing = {}
    let extra = {}
    for (let i = 0; i < expected.length; i++) {
        let actualExpected = expected[i];
        let countExpected = expected.filter((element) => element === actualExpected).length;
        let countReceived = received.filter((element) => element === actualExpected).length;
        if (countExpected > countReceived) {
            missing[actualExpected] = countExpected - countReceived;
        } else if (countExpected < countReceived) {
            extra[actualExpected] = countReceived - countExpected;
        }
    }
    for (let i = 0; i < received.length; i++) {
        let actualReceived = received[i];
        let countExpected = expected.filter((element) => element === actualReceived).length;
        let countReceived = received.filter((element) => element === actualReceived).length;
        if (countExpected > countReceived) {
            missing[actualReceived] = countExpected - countReceived;
        } else if (countExpected < countReceived) {
            extra[actualReceived] = countReceived - countExpected;
        }
    }
    return { missing, extra }
}
console.log(fixGiftList(['puzzle', 'car', 'doll', 'car'], ['car', 'puzzle', 'doll', 'ball']))
// Devuelve:
// {
//   missing: { ball: 1 },
//   extra: { car: 1 }
// }

// console.log(fixGiftList(
//     ['book', 'train', 'kite', 'train'],
//     ['train', 'book', 'kite', 'ball', 'kite']
// ))
// // Devuelve:
// // {
// //   missing: { ball: 1, kite: 1 },
// //   extra: { train: 1 }
// // }

// console.log(fixGiftList(
//     ['bear', 'bear', 'car'],
//     ['bear', 'car', 'puzzle', 'bear', 'car', 'car']
// ))
// // Devuelve:
// // {
// //   missing: { puzzle: 1, car: 2 },
// //   extra: {}
// // }

// console.log(fixGiftList(['bear', 'bear', 'car'], ['car', 'bear', 'bear']))
// // Devuelve:
// // {
// //   missing: {},
// //   extra: {}
// // }

// console.log(fixGiftList(['puzzle', 'ball'], ['puzzle']));
// // Debería devolver:
// // {
// //   missing: {},
// //   extra: { ball: 1 }
// // }

// console.log(fixGiftList(['bear', 'bear', 'bear'], ['bear', 'bear']))
// // Debería devolver:
// // {
// //   missing: {},
// //   extra: { bear: 1 }
// // }

// console.log(fixGiftList(['car', 'car'], ['car', 'car', 'car']))
// // Tu código podría devolver:
// // { missing: { car: 2 }, extra: {} } ❌ Incorrecto
// // Lo correcto sería:
// // { missing: { car: 1 }, extra: {} } ✅ Correcto

// console.log(fixGiftList(['car', 'doll'], ['car', 'ball']))
// // Debería devolver:
// // { missing: { ball: 1 }, extra: { doll: 1 } }