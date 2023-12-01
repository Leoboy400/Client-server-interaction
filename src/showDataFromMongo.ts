import { addContent } from './addContent';

async function showDataFromMongo() {
    try {
        let response = await fetch('http://localhost:3000/data');
        if (response.status === 200) {
            let json = await response.json();
            console.log(json)

            json.forEach((e: any, index: number) => {
                if (index < 610) {
                    addContent(e.title, e.ranking, e.rating)
                }
            });
        }else{
            console.log(response)
        }
    } catch (error) {
        console.log(error + ' ОШИБКА')
    }
}

export { showDataFromMongo }