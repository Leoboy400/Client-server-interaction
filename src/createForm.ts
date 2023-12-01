const formContent: HTMLDivElement = document.querySelector('.form__content')!;
const content: HTMLDivElement = document.querySelector('.content') as HTMLDivElement;

function createForm() {
    const form: HTMLFormElement = document.createElement('form');
    form.setAttribute('class', 'form')

    let input: HTMLInputElement = document.createElement('input');
    input.placeholder = 'title'
    input.className = 'inputTitle'
    form.append(input)

    input = document.createElement('input');
    input.className = 'inputRanking'
    input.placeholder = 'ranking'
    form.append(input)

    input = document.createElement('input');
    input.className = 'inputRating'
    input.placeholder = 'rating'
    form.append(input)
    
    const button: HTMLButtonElement = document.createElement('button');
    button.textContent = 'Добавить'
    button.className = 'btn'


    form.append(button)
    formContent.append(form)
}


export { createForm }