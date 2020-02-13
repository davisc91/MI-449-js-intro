var snareButton = document.getElementById('snare-button')
var snareSound = document.getElementById('snare-sound')
snareButton.addEventListener('click', function () {
  snareSound.play()
  console.log('play1')
})

var rideButton = document.getElementById('ride-button')
var rideSound = document.getElementById('ride-sound')
rideButton.addEventListener('click', function () {
  rideSound.play()
  console.log('play2')
})

var tomButton = document.getElementById('tom-button')
var tomSound = document.getElementById('tom-sound')
tomButton.addEventListener('click', function () {
  tomSound.play()
  console.log('play3')
})
