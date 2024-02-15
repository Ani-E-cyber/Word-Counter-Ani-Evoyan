function countWords() {
  const textInput = document.getElementById('textInput').value

  const wordCount = textInput.split(/\s+/).filter(function (word) {
    return word.length > 0
  }).length

  const sentenceCount = (textInput.match(/[.!?]+/g) || []).length

  const letterCount = textInput.replace(/[^a-zA-Z]/g, '').length

  const result = `Words: ${wordCount}<br>Sentences: ${sentenceCount}<br>Letters: ${letterCount}`
  document.getElementById('wordCountResult').innerHTML = result
}


let isBackgroundVisible = false

function generateRandomBackground() {
  const backgroundPhotos = [
    'url("https://images.unsplash.com/photo-1565118531796-763e5082d113?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
    'url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ") ',
    'url("https://images.unsplash.com/photo-1500534623283-312aade485b7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D") ',
  ]

  if (isBackgroundVisible) {
    document.body.style.backgroundImage = 'none'
  } else {
    const randomIndex = Math.floor(Math.random() * backgroundPhotos.length)
    document.body.style.backgroundImage = backgroundPhotos[randomIndex]
  }

  isBackgroundVisible = !isBackgroundVisible
}
