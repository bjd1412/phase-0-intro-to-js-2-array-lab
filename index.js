// Write your solution here!
const cats = [ "Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
    return cats;
}
function destructivelyPrependCat(name) {
    cats.unshift(name);
    return cats;
}
function destructivelyRemoveLastCat() {
    cats.pop(name);
    return cats;
}
function  destructivelyRemoveFirstCat() {
    cats.shift(name)
    return cats
}
function  appendCat(name) {
    const names = [...cats,name];
    return names;
}
function prependCat(name) {
    const names1 = [name, ...cats];
    return names1
}
function removeLastCat() {
    const cast = cats.slice(0, cats.length-1)
    return cast
}
function removeFirstCat() {
    const casts = cats.slice(1)
    return casts
}