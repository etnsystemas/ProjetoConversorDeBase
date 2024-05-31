const botao = document.getElementById('botao')
const inputNumero = document.getElementById('numero')
const seletorBaseAtual = document.querySelector('#base-atual')
const seletorBaseFinal = document.querySelector('#base-final')
const divResultado = document.getElementById('resultado')

botao.addEventListener('click', () => {
  let numeroFinal = 0
  const numeroAtual = +inputNumero.value
  console.log('aa')
  const baseAtual = +seletorBaseAtual.value
  const baseFinal = +seletorBaseFinal.value
  console.log(baseAtual, baseFinal)

  if (baseAtual === baseFinal) {
    numeroFinal = numeroAtual
  } else if (baseAtual === 10) {
    
    numeroFinal = numeroAtual.toString(2)

  } else {
    const numeroConvertido = parseInt(numeroAtual, baseAtual)
    numeroFinal = numeroConvertido.toString(baseFinal)
  }

  divResultado.classList.remove('invisivel')
  divResultado.innerHTML = `${numeroAtual}<sub>${baseAtual}</sub> = ${numeroFinal}<sub>${baseFinal}</sub>`

})