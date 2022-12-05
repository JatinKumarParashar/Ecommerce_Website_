

// // const Sequelize=require('sequelize');
// //  const sequelize=require('../util/database');

// //  const Customer=sequelize.define('customers',{
// //     id:{
// //         type:Sequelize.INTEGER,
// //         primaryKey:true,
// //         autoIncrement:true,
// //         allowNull:false
// //     },
// //     name:{
// //         type:Sequelize.TEXT,
// //         allowNull:false
// //     },
// //     email:{
// //         type:Sequelize.STRING,
// //         allowNull:false
// //     }
// //  })


// //  module.exports=Customer;

// // //mongoDB
// // const mongodb=require('mongodb');
// // const getDb = require('../util/database').getDb;

// // const ObjectId=mongodb.ObjectId;

// // class User {
// //     constructor(userName, email,cart ,id) {
// //         this.userName = userName;
// //         this.email = email;
// //         this.cart = cart; // {items: []}
// //         this._id = id;


// //     }

// //     save(){
// //         const db=getDb();
// //         return db.collection('users').insertOne(this);
// //     }

// //     addToCart(product) {
// //         const cartProductIndex = this.cart.items.findIndex(cp => {
// //           return cp.productId.toString() === product._id.toString();
// //         });
// //         let newQuantity = 1;
// //         const updatedCartItems = [...this.cart.items];

// //         if (cartProductIndex >= 0) {
// //           newQuantity = this.cart.items[cartProductIndex].quantity + 1;
// //           updatedCartItems[cartProductIndex].quantity = newQuantity;
// //         } else {
// //           updatedCartItems.push({
// //             productId: new ObjectId(product._id),
// //             quantity: newQuantity
// //           });
// //         }
// //         const updatedCart = {
// //           items: updatedCartItems
// //         };
// //         console.log('models /customer/addtocart line 66',updatedCart);
// //         const db = getDb();
// //         return db
// //           .collection('customers')
// //           .updateOne(
// //             { _id: new ObjectId(this._id) },
// //             { $set: { cart: updatedCart } }
// //           );
// //       }


// //   getCart() {
// //     const db = getDb();
// //     const productIds = this.cart.items.map(i => {
// //       return i.productId;
// //     });
// //     return db
// //       .collection('products')
// //       .find({ _id: { $in: productIds } })
// //       .toArray()
// //       .then(products => {
// //         return products.map(p => {
// //           return {
// //             ...p,
// //             quantity: this.cart.items.find(i => {
// //               return i.productId.toString() === p._id.toString();
// //             }).quantity
// //           };
// //         });
// //       });
// //   }

// //   deleteItemFromCart(productId) {
// //     const updatedCartItems = this.cart.items.filter(item => {
// //       return item.productId.toString() !== productId.toString();
// //     });
// //     const db = getDb();
// //     return db
// //       .collection('customers')
// //       .updateOne(
// //         { _id: new ObjectId(this._id) },
// //         { $set: { cart: {items: updatedCartItems} } }
// //       );
// //   }


// //   addOrder() {
// //     const db = getDb();
// //     return this.getCart()
// //       .then(products => {
// //         const order = {
// //           items: products,
// //           user: {
// //             _id: new ObjectId(this._id),
// //             name: this.userName
// //           }
// //         };
// //         return db.collection('orders').insertOne(order);
// //       })
// //       .then(result => {
// //         this.cart = { items: [] };
// //         return db
// //           .collection('customers')
// //           .updateOne(
// //             { _id: new ObjectId(this._id) },
// //             { $set: { cart: { items: [] } } }
// //           );
// //       });
// //   }


// //     static findById(userId) {
// //         const db=getDb();
// //         return db
// //         .collection('customers')
// //         .find({_id:new ObjectId(userId)})
// //         .next()
// //         .then(user=>{
// //            // console.log('models/customer/findbyid line 51',user);
// //             return user;
// //         })
// //     }


// // }

// // module.exports=User;


// const mongoose = require('mongoose');

// const Schema = mongoose.Schema;

// const userSchema = new Schema({
//   name: {
//     type: String,
//     required: true
//   },
//   email: {
//     type: String,
//     required: true
//   },
//   cart: {
//     items: [
//       {
//         productId: { type: Schema.Types.ObjectId, ref: 'Product', requires: true },
//         quantity: { type: Number, require: true }
//       }
//     ]
//   }
// })



// userSchema.methods.addToCart = function (product) {
//   const cartProductIndex = this.cart.items.findIndex(cp => {
//     return cp.productId.toString() === product._id.toString();
//   });
//   let newQuantity = 1;
//   const updatedCartItems = [...this.cart.items];

//   if (cartProductIndex >= 0) {
//     newQuantity = this.cart.items[cartProductIndex].quantity + 1;
//     updatedCartItems[cartProductIndex].quantity = newQuantity;
//   } else {
//     updatedCartItems.push({
//       productId: product._id,
//       quantity: newQuantity
//     });
//   }
//   const updatedCart = {
//     items: updatedCartItems
//   };
//   this.cart = updatedCart;
//   return this.save();
// };

// userSchema.methods.deleteItemFromCart = function (productId) {
//   const updatedCartItems = this.cart.items.filter(item => {
//           return item.productId.toString() !== productId.toString();
//         });
//         this.cart.items=updatedCartItems;
//         return this.save();

// }


// userSchema.methods.clearCart = function() {
//   this.cart = { items: [] };
//   return this.save();
// };


// module.exports = mongoose.model('User', userSchema);


const Sequelize=require('sequelize');
 const sequelize=require('../util/database');

 const Customer=sequelize.define('customers',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    name:{
        type:Sequelize.TEXT,
        allowNull:false
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false
    }
 })


 module.exports=Customer;


