import { MongoClient } from 'mongodb';

const client = new MongoClient('adress');  // тут должен быть адресс вашей библиотеки на mongoDB иначе не будет работать
// const client = new MongoClient('mongodb://localhost:27017'); // можно локально

const startMongoDB = async () => {
    try {
        await client.connect()
        console.log('Connect mongoDB - VIN')
        const animeList = client.db('mongo').collection('anime') // также учите, что название коелкции и DB  у вас может быть другое. Если у вас возник вопрос, почему я не вынес их в отдельные переменные ? Надеюсь нет, на него нет ответа.
        const anime = await animeList.find().toArray();
        return anime;
    } catch (err) {
        console.log(err)
    }
}


const addItemMongoDB = async (titleItem, rankingItem, ratingItem) => {
    try {
        await client.connect()
        const animeList = client.db('mongo').collection('anime')
        let item = { title: titleItem, ranking: rankingItem, rating: ratingItem }

        const existingItem = await animeList.findOne(item)
        if (existingItem) {
            console.log('Такой итем уже есть')
            return
        } else {
            await animeList.insertOne(item)
            console.log('Итем успешно добавлен')
        }

    } catch (err) {
        console.log(err)
    }
    client.close()
}
export { startMongoDB, addItemMongoDB }