const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push(name)
    return cats
}
console.log(destructivelyAppendCat('Ralph'))




function destructivelyPrependCat(name) {
    cats.unshift(name)
    console.log(cats)
}
destructivelyPrependCat('Omondi')




function destructivelyRemoveLastCat() {
    cats.pop()
    console.log(cats)
}
destructivelyRemoveLastCat()




function destructivelyRemoveFirstCat() {
    cats.shift()
    console.log(cats)
}
destructivelyRemoveFirstCat()




function appendCat(name) {
    const newCats = [...cats, name]
    return newCats
}
console.log(appendCat('bobi'))
console.log(cats)




function prependCat(name) {
    const newCats = [name, ...cats]
    return newCats
}
console.log(prependCat('kitty'))




function removeLastCat() {
    const remLast = cats.slice(0, 2)
    return remLast
}
console.log(removeLastCat())




function removeFirstCat() {
    const remFirst = cats.slice(1, 3)
    return remFirst
}
console.log(removeFirstCat())
