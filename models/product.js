

// // const Sequelize = require('sequelize');

// // const sequelize = require('../util/database');

// // const Product = sequelize.define('products', {
// //     id: {
// //         type: Sequelize.INTEGER,
// //         autoIncrement: true,
// //         primaryKey: true,
// //         allowNull: false
// //     },
// //     title: Sequelize.STRING,  
// //     image: {
// //         type: Sequelize.TEXT,
// //         allowNull: false
// //     },
// //     price:{
// //         type:Sequelize.INTEGER,
// //         allowNull:false
// //     }
// // })

// // module.exports = Product;


// // mongodb
// // const mongodb = require('mongodb');
// // const getDb = require('../util/database').getDb;


// // class Product {
// //     constructor(title, image, price, id, customerId) {
// //         this.title = title;
// //         this.image = image;
// //         this.price = price;
// //         this._id = id?new mongodb.ObjectId(id):null;
// //         this.customerId=customerId;
// //     }

// //     save() {
// //         const db = getDb();
// //         let dbOp;
// //         if(this._id){
// //             dbOp=db.collection('products')
// //             .updateOne({_id:this._id},{$set:this});
// //         }
// //         else{
// //             dbOp=db.collection('products').insertOne(this);
// //         }
// //         return dbOp
// //             .then(result => {
// //                 console.log(result);
// //             })
// //             .catch(err => {
// //                 console.log(err);
// //             })
// //     }

// //     static fetchAll() {
// //         const db = getDb();
// //         return db
// //             .collection('products')
// //             .find()
// //             .toArray()
// //             .then(products => {
// //                 // console.log(products);
// //                 return products;
// //             })
// //             .catch(err => {
// //                 console.log(err);
// //             })
// //     }

// //     static findById(prodId) {
// //         const db = getDb();
// //         return db
// //             .collection('products')
// //             .find({ _id: new mongodb.ObjectId(prodId) })
// //             .next()
// //             .then(product => {
// //                 // console.log('models/product.js/ findbyid line 71',product);
// //                 return product;
// //             })
// //     }

// //     static deleteById(prodId) {
// //         const db = getDb();
// //         return db
// //             .collection('products')
// //             .deleteOne({ _id: new mongodb.ObjectId(prodId) })
// //             .then(product => {
// //                 // console.log('models/product.js/ findbyid line 71',product);
// //                 return product;
// //             })
// //     }
// // }


// // module.exports = Product;





// const mongoose=require('mongoose');
// const Schema=mongoose.Schema;

// const productSchema=new Schema({
//     title:{
//         type:String,
//         required:true
//     },
//     image:{
//         type:String,
//         required:true
//     },
//     price:{ 
//         type:Number,
//         required:true
//     },
//     userId:{
//         type:Schema.Types.ObjectId,
//         ref:'User',
//         required:true

//     }
// })


// module.exports=mongoose.model('Product',productSchema);


const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Product = sequelize.define('products', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    title: Sequelize.STRING,  
    image: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    price:{
        type:Sequelize.INTEGER,
        allowNull:false
    }
})

module.exports = Product;