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
