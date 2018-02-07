const app = "I don't do much."

function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten(){
  kittens.shift(1)
  return kittens
}

function appendKitten(name){
  const newKittens = [...kittens, name]
  return newKittens
}

function prependKitten(name) {
  const newKittens = [name, ...kittens]
  return newKittens
}

function removeLastKitten() {
  var last = kittens.length - 1
  const newKittens = kittens.shift(last)
  return newKittens
}

function removeFirstKitten(){
  const newKittens = kittens.shift(1)
  return newKittens
}