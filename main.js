import Game from './lib/game.js'

window.addEventListener('DOMContentLoaded', initGame)

function removeExistingCanvas() {
  const els = document.body.children
  if (els.length > 0) document.body.removeChild(els.item(0))
}

function initCanvas() {
  removeExistingCanvas()
  const canvas = document.createElement('canvas')
  document.body.appendChild(canvas)
  return canvas
}

function initGame() {
  const canvas = initCanvas()
  const game = new Game(canvas)
  game
    .createScene()
    .animate()
}

if (module.hot) {
  module.hot.accept(function accept() {
    initGame()
  })
}
