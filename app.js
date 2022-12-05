// const express = require('express');
// const bodyParsed = require('body-parser');
// // const fs = require('fs');
// const path = require('path');
// const cors = require('cors');
// const mongoose=require('mongoose');

// const dotenv=require('dotenv');
// dotenv.config();
// const app = express();

// // const sequelize = require('./util/database');
// // const mongoConnect=require('./util/database').mongoConnect;


// app.use(cors());

// app.set('view engine', 'ejs');
// app.set('views', 'views');

// const adminRoutes = require('./routes/admin');
// const shopRoutes = require('./routes/shop');
// // const err = require('./controllers/error');

// // const contactRoutes = require('./routes/contact');
// // const successRoutes = require('./routes/success');
// const cartRoutes = require('./routes/cart');
// // const bookingRoutes = require('./routes/booking');
// // const expenceRoutes = require('./routes/Expence');

// // const loginRoutes = require('./routes/login');
// // const messageRoutes = require('./routes/message');
// const orderRoutes=require('./routes/order');

//  app.use(bodyParsed.json());
//   app.use(bodyParsed.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));


// // const users = require('./models/booking');
// // const Expence = require('./models/expence');
// // const Product = require('./models/product');
// const User = require('./models/customer');
// // const Cart = require('./models/cart');
// // const CartItem = require('./models/cartItem');
// // const Order = require('./models/order');
// // const OrderItem = require('./models/orderItem');
// // const { BelongsToMany } = require('sequelize');
// // const bodyParser = require('body-parser');


// app.use((req, res, next) => {
//     User.findById("637e131a0e5761ae3ef96be5")
//         .then(customer => {
//             req.customer = customer;
//             //console.log('123', customer);
//             next();
//         })
//         .catch(err => {
//             console.log(err);
//         })
    
// })


// app.use('/admin', adminRoutes);
// app.use('/shop', shopRoutes);


// // app.use('/booking', bookingRoutes);
// // app.use('/expence', expenceRoutes);

// // app.use('/login',(req,res,next)=>{
// //     res.send('<html><body><form action="/" onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)"  method="GET"><input id="username" type="text" name="title"><button type="submit">add</button></form></body></html>')
   
// // });
// // app.get('/',(req,res,next)=>{
// //     res.send('<html><body><form action ="/" onsubmit="document.getElementById(`username`).value=localStorage.getItem(`username`)" method="POSt"><lable>Message:</lable><input type="text" id="message" name="message"/><input type="hidden" name="username" id="username" /><button typt="submit">Send Message</button></form></body></html>')
// // });

// // app.post('/',(req,res,next)=>{
// //     console.log(req.body.user);
// //     console.log(req.body.message);
// //     fs.writeFileSync("chat.text",`${req.body.username}:`,`${req.body.message}`,err=>{
// //        err?console.log(err):res.redirect('/');
// //     })
// //  })

// app.use(orderRoutes);
// // app.use(contactRoutes);
// // app.use(successRoutes);
// app.use(cartRoutes);
// // app.use((req,res,next)=>{
// //     console.log('req,url checking ',req.U);
// //     res.sendFile(path.join(__dirname,`public/${req.url}`));
// // })
// // app.use(err.error404);



// mongoose.connect('mongodb+srv://Jatin:Jatin1411@cluster0.vjg9f2y.mongodb.net/test')
// .then(result=>{
//     User.findOne().then(user=>{
//         if(!user){
//             const user=new User({
//                 name:'Jatin',
//                 email:'jatin@gmail.com',
//                 cart:{
//                     items:[]
//                 }
//             });
//             user.save();
//         }
//     });
//     console.log('connected!!!!!!');
//     app.listen(3000)
// })








// // mongoConnect(()=>{
// //     app.listen(3000);
// // })




// // Product.belongsTo(User, { constraints: true, onDelete: 'CASCADE' });
// // User.hasMany(Product);
// // User.hasOne(Cart);
// // Cart.belongsTo(User);
// // Cart.belongsToMany(Product,{ through : CartItem});
// // Product.belongsToMany(Cart,{ through : CartItem});
// // Order.belongsTo(User);
// // User.hasMany(Order);
// // Order.belongsToMany(Product,{through:OrderItem});
// // Product.belongsToMany(Order,{through:OrderItem});

// // sequelize //.sync({force:true})
// //           .sync()
// //     .then((result) => {
// //         // console.log(result);
// //         return User.findByPk(1);

// //     }).then(user => {
// //         if (!user) {
// //             return User.create({ name: 'Jatin', email: 'jatin@gmail.com' });
// //         }
// //         return user;
// //     }).then(user => {
// //         //console.log(user);
// //         return user.createCart();
        
// //     }).then(cart=>{
// //         app.listen(3000);
// //     })
// //     .catch(err => { console.log(err) });


const express = require('express');
const bodyParsed = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors');


const sequelize = require('./util/database');

const app = express();
app.use(cors());

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const err = require('./controllers/error');

const contactRoutes = require('./routes/contact');
const successRoutes = require('./routes/success');
const cartRoutes = require('./routes/cart');
const bookingRoutes = require('./routes/booking');
const expenceRoutes = require('./routes/Expence');

const loginRoutes = require('./routes/login');
const messageRoutes = require('./routes/message');
const orderRoutes=require('./routes/order');

 app.use(bodyParsed.json());
  app.use(bodyParsed.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


const users = require('./models/booking');
const Expence = require('./models/expence');
const Product = require('./models/product');
const User = require('./models/customer');
const Cart = require('./models/cart');
const CartItem = require('./models/cartItem');
const Order = require('./models/order');
const OrderItem = require('./models/orderItem');
const { BelongsToMany } = require('sequelize');
// const bodyParser = require('body-parser');


app.use((req, res, next) => {
    User.findByPk(1)
        .then(customer => {
            req.customer = customer;
            console.log('123', customer);
            next();
        })
        .catch(err => {
            console.log(err);
        })
})
app.use('/admin', adminRoutes);
app.use('/shop', shopRoutes);


app.use('/booking', bookingRoutes);
app.use('/expence', expenceRoutes);

app.use('/login',(req,res,next)=>{
    res.send('<html><body><form action="/" onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)"  method="GET"><input id="username" type="text" name="title"><button type="submit">add</button></form></body></html>')
   
});
app.get('/',(req,res,next)=>{
    res.send('<html><body><form action ="/" onsubmit="document.getElementById(`username`).value=localStorage.getItem(`username`)" method="POSt"><lable>Message:</lable><input type="text" id="message" name="message"/><input type="hidden" name="username" id="username" /><button typt="submit">Send Message</button></form></body></html>')
});

app.post('/',(req,res,next)=>{
    console.log(req.body.user);
    console.log(req.body.message);
    fs.writeFileSync("chat.text",`${req.body.username}:`,`${req.body.message}`,err=>{
       err?console.log(err):res.redirect('/');
    })
 })

app.use(orderRoutes);
app.use(contactRoutes);
app.use(successRoutes);
app.use(cartRoutes);
app.use(err.error404);

Product.belongsTo(User, { constraints: true, onDelete: 'CASCADE' });
User.hasMany(Product);
User.hasOne(Cart);
Cart.belongsTo(User);
Cart.belongsToMany(Product,{ through : CartItem});
Product.belongsToMany(Cart,{ through : CartItem});
Order.belongsTo(User);
User.hasMany(Order);
Order.belongsToMany(Product,{through:OrderItem});
Product.belongsToMany(Order,{through:OrderItem});

sequelize //.sync({force:true})
          .sync()
    .then((result) => {
        // console.log(result);
        return User.findByPk(1);

    }).then(user => {
        if (!user) {
            return User.create({ name: 'Jatin', email: 'jatin@gmail.com' });
        }
        return user;
    }).then(user => {
        //console.log(user);
        return user.createCart();
        
    }).then(cart=>{
        app.listen(3000);
    })
    .catch(err => { console.log(err) });

    


























































































