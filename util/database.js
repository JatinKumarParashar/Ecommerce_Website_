


// // const Sequelize = require('sequelize');


// // const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
// //     dialect: 'mysql',
// //     host: process.env.DB_HOST
// // });

// // module.exports = sequelize;


// const e = require('express');
// const mongodb=require('mongodb');
// const MongoClient=mongodb.MongoClient;

// let _db;

// const mongoConnect=(callback)=>{
    
//     MongoClient.connect(`mongodb+srv://Jatin:Jatin1411@cluster0.jokwsgs.mongodb.net/test`)
//     .then(client=>{
//         console.log('Connected!!');
//         _db=client.db();
//         callback();
//     })
//     .catch(err=>{
//         console.log(err);
//         throw err;
//     })

// }

// const getDb=()=>{
//     if(_db){
//         return _db;
//     }
//     throw 'No database Found';
// }


// exports.mongoConnect=mongoConnect;
// exports.getDb=getDb;


const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'Vijay@123', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;









