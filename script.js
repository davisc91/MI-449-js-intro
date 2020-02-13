var buttonDrum1 = document.getElementById('drum1')
var sound1 = document.getElementById('sound1')
buttonDrum1.addEventListener('click', function () {
  sound1.play()
  console.log('play1')
})

var buttonDrum2 = document.getElementById('drum2')
var sound2 = document.getElementById('sound2')
buttonDrum2.addEventListener('click', function () {
  sound2.play()
  console.log('play2')
})

var buttonDrum3 = document.getElementById('drum3')
var sound3 = document.getElementById('sound3')
buttonDrum3.addEventListener('click', function () {
  sound3.play()
  console.log('play3')
})
