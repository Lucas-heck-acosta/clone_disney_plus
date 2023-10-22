document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');

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
})

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