import './styles.css'

export default (value) => {
  const Button = document.createElement('a')

  Button.innerText = `${value.toUpperCase()}`
  Button.href = `#${value.toLowerCase()}`
  Button.classList.add('button')

  return Button
}
