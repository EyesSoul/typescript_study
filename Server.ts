import "reflect-metadata";
import {createConnection} from "typeorm";
import {test} from "./model/test";

createConnection({
    driver: {
        type: "mysql",
        host: "localhost",
        port: 3306,
        username: "root",
        password: "icarus",
        database: "game_data"
    },
    entities: [
        __dirname+"/model/*.js"
    ]
}).then(async connection => {
    return await connection.entityManager.find(test);
}).then(findall =>{
    console.log(findall);
})
.catch(error => {
    console.error(error)
});