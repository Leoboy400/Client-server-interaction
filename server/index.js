import http from 'http';
import path from 'path';
import { startMongoDB, addItemMongoDB } from './modules/startMongoDB.js';


const PORT = 3000;
const starus = 200;
const server = http.createServer(async (request, response) => {
    response.writeHead(starus, {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type'
    })

    const data = JSON.stringify(await startMongoDB())

    if (request.url === '/data') {
        response.write(data);
    }

    if (request.method === 'POST' && request.url === '/adddata') {
        let body = '';
        request.on('data', (chunk) => {
            body += chunk.toString(); // Получаем данные из POST запроса
        })
        await new Promise((resolve, reject) => {
            request.on('end', () => {
                let data = JSON.parse(body)
                console.log(data)
                addItemMongoDB(data.title, data.rankinig, data.rating)
                resolve()
            });
        });
    }
    response.end()

});
server.listen(PORT, 'localhost', (error) => {
    error ? console.log(error) : console.log(`listening port ${PORT}`)
});

