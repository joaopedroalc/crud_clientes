const openModal = () => {
  document.getElementById('modal').classList.add('active')
}
const closeModal = () => {
    document.getElementById('modal').classList.remove('active')
}

document.addEventListener('click', function(e) {
  const infosEscondidas = document.querySelector('.infos-escondidas')
  if(e.target.classList.contains('salvar')){
    infosEscondidas.classList.add('aparece')

    const nome = document.getElementById('nome')
    const email = document.getElementById('email')
    const celular = document.getElementById('celular')
    const cidade = document.getElementById('cidade')

    var valores = [nome.value, email.value, celular.value, cidade.value]

    var div = `
    <div class="linha">
      <span class="nome">${valores[0]}</span>
      <span class="email">${valores[1]}</span>
      <span class="celular">${valores[2]}</span>
      <span class="cidade">${valores[3]}</span>
      <img src="https://png.pngtree.com/png-clipart/20191124/ourlarge/pngtree-trash-icon-in-neon-style-png-image_2029079.jpg" class="lixeira" />
    </div>
    `

    infosEscondidas.innerHTML += div
  }
})


document.addEventListener('click', (el) => {
  if(el.target.classList.contains('lixeira'))
  {
    let infosEscondidas = document.querySelector('.infos-escondidas')
    let linhas = document.getElementsByClassName('linha')
    infosEscondidas.removeChild(linhas[0])
  }
})