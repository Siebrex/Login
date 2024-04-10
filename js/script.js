const botao = document.getElementById('mode_icon');

botao.addEventListener('click', () => {
    const form = document.getElementById('login_form');
    if(botao.classList.contains('fa-moon')){ //pegando o icone e vendo se contem a classe fa-moon
        botao.classList.remove('fa-moon'); //se ele tiver essa classe, devera agora remover 
        botao.classList.add('fa-sun'); //depois de remover, adicione fa-sun

        form.classList.add('dark');//adionar a classe dark criada no css
        return;
    }
    botao.classList.add('fa-moon');
    botao.classList.remove('fa-sun');

    form.classList.remove('dark');//remover a classe dark

});