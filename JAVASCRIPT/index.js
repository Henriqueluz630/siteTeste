let slideIndex = 0

const images = [
    'imagens/imgPaises/moscow.jpg',
    'imagens/imgPaises/Oslo.jpg',
    'imagens/imgPaises/berlim.jpg',
    'imagens/imgPaises/roma.jpg',
    'imagens/imgPaises/estocolmo.jpg',
    'imagens/imgPaises/copenhague.jpg',
    'imagens/imgPaises/paris.jpg',
];

function showSlide(index) {
    const slideImage = document.getElementById('slide-image')
    if(index >= images.length){
        slideIndex = 0;

    } else if (index < 0){
        slideIndex = images.length - 1;
    } else {
        slideIndex = index;
    }
    slideImage.classList.remove('show'); // Remover a classe 'show'
    setTimeout(() => {
        slideImage.src = images[slideIndex];
        slideImage.classList.add('show'); // Adicionar a classe 'show'
    }, 200); // Atraso de 500ms para a transição
}



function changeSlide(n){
    showSlide(slideIndex + n);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(slideIndex)
})


document.addEventListener("DOMContentLoaded", function() {
    const hiddenElements = document.querySelectorAll('.hidden');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.1 });

    hiddenElements.forEach(element => {
        observer.observe(element);
    });
});

document.querySelector('.botao-alternar').addEventListener('click', function() {
    const conteudoTermos = document.querySelector('.conteudo-termos');
    conteudoTermos.classList.toggle('oculto');
});


const clickVerificar = document.getElementById('iconGeral')
clickVerificar.addEventListener('click', () => {
    alert('Recurso indisponivel no momento!!')
})

