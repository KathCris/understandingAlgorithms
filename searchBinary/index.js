
let lista = [1, 3, 5, 7, 9]
let item = 5

let baixo = 0
let alto = (lista.length - 1)

let meio = null


while (baixo <= alto) {
  meio = Math.round((baixo + alto) / 2)
  chute = lista[meio]
  
  if (chute === item) {
    console.log(`Item found - ${meio}`)
    return meio
  }
  else if (chute > item) {
    alto = meio + 1
  } else {
    baixo = meio + 1
  }
  return 'item not found'
}

// linha 5 e 6 - baixo e alto acompanham a parte da lista que você está procurando
// linha 2 - while para enquanto não conseguir achar o elemento
// linha 15 - acha o item
// linha 19 - chute muito alto
// linha 21 - chute muito baixo
