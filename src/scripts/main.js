document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question');
    const heroSection = document.querySelector('.hero');
    
    const alturaHero = heroSection.clientHeight;

    //header
    window.addEventListener('scroll', function() {
        const position = window.scrollY;

        if (position < alturaHero)
        {
            ocultarHeader();
        }
        else
        {
            exibirHeader();
        }
    })


    // atrações
    for (let i = 0; i < buttons.length; i++)
    {
        buttons[i].addEventListener('click', function(botao) {
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`)
            esconderAbas();
            aba.classList.add('shows__list--is-active');

            esconderBtnAtivo();
            botao.target.classList.add('shows__tabs__button--is-active');
        })
    }

    // FAQ accordion
    for (let i = 0; i < questions.length; i++)
    {
        questions[i].addEventListener('click', abreFecha);
    }
})

function abreFecha(elemento) {
    const classe = 'faq__questions__item--is-open'

    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe);
}

function ocultarHeader ()
{
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}
function exibirHeader ()
{
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}

function esconderBtnAtivo()
{
    const buttons = document.querySelectorAll('[data-tab-button]');
    for (let i = 0; i < buttons.length; i++)
    {
        buttons[i].classList.remove('shows__tabs__button--is-active')
    }

}
function esconderAbas()
{
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++)
    {
        tabsContainer[i].classList.remove('shows__list--is-active')
    }
}