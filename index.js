const mainEl = document.querySelector('main#main')
mainEl.remove()
const newHeader = document.createElement('h1')
newHeader.id = 'victory'
newHeader.innerHTML = 'YOUR-NAME is the champion'
document.body.appendChild(newHeader)