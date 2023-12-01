import { showDataFromMongo } from './showDataFromMongo';

async function sendForm(url: string, data: object) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        if (response.status === 200) {
        } else {
            console.log(response)
        }
    } catch (error) {
        console.log(error + ' ОШИБКА')
    }
}


async function addValueInputEndSendForm() {
    const inputTitle: HTMLInputElement = document.querySelector('.inputTitle')!;
    const inputRanking: HTMLInputElement = document.querySelector('.inputRanking')!;
    const inputRating: HTMLInputElement = document.querySelector('.inputRating')!;
    const btn: HTMLButtonElement = document.querySelector('.btn')!;


    btn.addEventListener('click', async (e) => {
        e.preventDefault()
        if (inputTitle.value != '' && inputRanking.value != '' && inputRating.value != '') {
            sendForm('http://localhost:3000/adddata',
                { title: inputTitle.value, rankinig: inputRanking.value, rating: inputRating.value }
            );
            inputTitle.value = '';
            inputRanking.value = '';
            inputRating.value = '';

        } else {
            alert('заполните все поля')
        }
    })
}


export { addValueInputEndSendForm }