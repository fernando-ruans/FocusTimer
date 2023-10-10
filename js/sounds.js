export default function() {
  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
  const bgAudio = new Audio("https://ve42.aadika.xyz/download/iPgBrZSdWtw/mp3/320/1696979796/d8b640d64faa5162e1e16ef0d12d02fcd8aaf1416fa3645d57dc2273a04f1f6b/1?f=x2mate.com")

bgAudio.loop

function pressButton() {
    buttonPressAudio.play()
}

function timeEnd() {
    kitchenTimer.play()
}

return {
    pressButton,
    timeEnd,
    bgAudio
}
}    