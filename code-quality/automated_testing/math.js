// sum is intentionally broken so you can see errors in the tests
const sum = (a, b) => {

    if (!Number(a) || !Number(b)) {
        throw new Error(' argument must be numbers alone')
    }

    return a + b
}



// sum(10, 'a')
const subtract = (a, b) => a - b

// these are kinda pointless I know, but it's just to simulate an async function
const sumAsync = (...args) => Promise.resolve(sum(...args))
const subtractAsync = (...args) => Promise.resolve(subtract(...args))

module.exports = {sum, subtract, sumAsync, subtractAsync}