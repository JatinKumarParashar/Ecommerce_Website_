// const mongodb=require('mongodb');
// const { where } = require('sequelize');
// const Product = require('../models/product');
// const ITEM_PER_PAGE = 2;

// const ObjectId=mongodb.ObjectId;



// exports.getAddProduct = (req, res, next) => {
//   res.render('edit-product', {
//     pageTitle: 'Add Product',
//     path: '/admin/add-product',
//     editing: false
//   });
// };

// exports.postAddProduct = (req, res, next) => {
//   const title = req.body.title;
//   const image = req.body.image;
//   const price = req.body.price;
//   // const description = req.body.description;

//   console.log('Jatin Kumar parashar');
//   // console.log('123', req.customer.id);
//   console.log('main hunn hero tera')
  
//   //// MySql
//   // req.customer
//   //   .createProduct({
//   //     title: title,
//   //     image: image,
//   //     price: price

//   //   })
//   //// MongoDB
//   // const product=new Product(title,image,price,null,req.customer._id);
//   // product.save()
//   //   .then(result => {
//   //      console.log(result);
//   //     console.log('created product');
//   //     res.redirect('/shop');
//   //   }).catch(err => res.json(err));

//   // Mongoose
 
 
//   const product=new Product({
//     title:title,
//     image:image,
//     price:price,
//     userId:req.customer
//   });
//   product.save()
//     .then(result => {
//        console.log(result);
//       console.log('created product');
//       res.redirect('/shop');
//     }).catch(err => res.json(err));
// };

// exports.postDeleteProduct = (req, res, next) => {
//   const id = req.params.productId;
//   console.log(id);
//   ////mongoDB
//   // Product.deleteById(id)
//   //   // .then((product) => {
//   //   //   // return product.destroy(product);

//   //   // })
//   //   .then(result => {
//   //     res.redirect('/admin/product');
//   //   })
//   //   .catch((err) => {
//   //     console.log(err);
//   //   })

//   Product.findByIdAndRemove(id)
//   // .then((product) => {
//   //   // return product.destroy(product);

//   // })
//   .then(result => {
//     res.redirect('/admin/product');
//   })
//   .catch((err) => {
//     console.log(err);
//   })
// }

// exports.postEditProduct = (req, res, next) => {
//   const title = req.body.title;
//   const image = req.body.image;
//   const id = req.body.productId;
//   const price=req.body.price;
//   console.log(id);
//   // const price = req.body.price;
//   // const description = req.body.description;

//   Product.findById(id).then(product => {
//     product.title = title;
//     product.image = image;
//     product.price=price;
//     return product.save();
//   })
//   // const product=new Product(title,image,price,new mongodb.ObjectId(id));
//   // product.save()
//     .then(() => {
//       res.redirect('/shop');
//     })
//     .catch(err => console.log(err));

// }

// exports.getEditProduct = (req, res, next) => {
//   const prodId = req.params.productId;
//   console.log(prodId);
// Product.findById(prodId)
//     .then((product) => {
//       if (!product) {
//         return res.redirect('/');
//       }
//       res.render('edit-product', {
//         pageTitle: 'Edit Product',
//         path: '/admin/edit-product',
//         editing: true,
//         product: product
//       });
//     }).catch(err => console.log(err));

// };

// exports.getProducts = (req, res, next) => {
//   // const page=+req.query.page;
//   // console.log('checking page',page);
//   // let totalItems;
//   // Product.count()
//   //   .then(total => {
//   //     totalItems = total;
//   //     return Product.findAll({
//   //       offset:(page-1)*ITEM_PER_PAGE,
//   //       limit:ITEM_PER_PAGE
//   //     })
       
//   //   })

//   //   .then(products => {
//   //     res.json({
//   //       products:products,
//   //       totalProducts: totalItems,
//   //       currentPage:page,
//   //       hasNextPage: ITEM_PER_PAGE * page < totalItems,
//   //       nextPage: page + 1,
//   //       hasPreviousPage: page > 1,
//   //       previousPage: page - 1,
//   //       lastPage: Math.ceil(totalItems / ITEM_PER_PAGE)
//   //     });

// //mongoDB
//     //   Product.fetchAll().then(products=>{
//     //     //console.log('controllers/product/getProducts line126 ',products)
//     //     res.render('shop', {
//     //        prods: products,
//     //        pageTitle: 'All Products',
//     //        path: '/shop'
//     //     })
        
//     //   }) 
        
//     // .catch((err) => {
        
        
//     //   console.log(err);
//     // })

//     //mongoose
//     Product.find().then(products=>{
//       //console.log('controllers/product/getProducts line126 ',products)
//       res.render('shop', {
//          prods: products,
//          pageTitle: 'All Products',
//          path: '/shop'
//       })
      
//     }) 
      
//   .catch((err) => {
      
      
//     console.log(err);
//   })
// };


// exports.getProduct = (req, res, next) => {
//   // Product.fetchAll()
//   //   .then(rows => {
//   //     res.render('products', {
//   //       prods: rows,
//   //       pageTitle: 'All Products',
//   //       path: '/shop'
//   //     })
//   //   }).catch((err) => {
//   //     console.log(err);
//   //   })

//   //mongoose

//   Product.find()
//   .then(rows => {
//     res.render('products', {
//       prods: rows,
//       pageTitle: 'All Products',
//       path: '/shop'
//     })
//   }).catch((err) => {
//     console.log(err);
//   })
// };

// exports.getDetails = (req, res, next) => {
//   var id = req.params.productId;
//   Product.findById(id).then((row) => {
//     res.render('details', {
//       product: row,
//       path: '/shop'
//     })
//   }).catch((err) => {
//     console.log(err);
//   })


// }
// //   //Product.findById(






// // // exports.postProduct = (req, res, next) => {
// // //   const product = Product.fetchAll();
// // //   console.log(product);
// // // }






const { where } = require('sequelize');
const Product = require('../models/product');
const ITEM_PER_PAGE = 2;



exports.getAddProduct = (req, res, next) => {
  res.render('edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const image = req.body.image;
  const price = req.body.price;
  // const description = req.body.description;

  console.log('Jatin Kumar parashar');
  console.log('123', req.customer.id);
  req.customer
    .createProduct({
      title: title,
      image: image,
      price: price

    })
    .then(result => {
      // console.log(result);
      console.log('created product');
      res.redirect('/shop');
    }).catch(err => res.json(err));
};

exports.postDeleteProduct = (req, res, next) => {
  const id = req.params.productId;
  console.log(id);
  Product.findByPk(id)
    .then((product) => {
      return product.destroy(product);

    })
    .then(result => {
      res.redirect('/admin/product');
    })
    .catch((err) => {
      console.log(err);
    })

}

exports.postEditProduct = (req, res, next) => {
  const title = req.body.title;
  const image = req.body.image;
  const id = req.body.productId;
  console.log(id);
  // const price = req.body.price;
  // const description = req.body.description;

  Product.findByPk(id).then(product => {
    product.title = title;
    product.image = image;
    return product.save();
  })
    .then(() => {
      res.redirect('/shop');
    })
    .catch(err => console.log(err));

}

exports.getEditProduct = (req, res, next) => {
  const prodId = req.params.productId;
  console.log(prodId);
  req.customer
    .getProducts({ where: { id: prodId } })
    .then((products) => {
      const product = products[0]
      if (!product) {
        return res.redirect('/');
      }
      res.render('edit-product', {
        pageTitle: 'Edit Product',
        path: '/admin/edit-product',
        editing: true,
        product: product
      });
    }).catch(err => console.log(err));

};

exports.getProducts = (req, res, next) => {
  const page=+req.query.page;
  console.log('checking page',page);
  let totalItems;
  Product.count()
    .then(total => {
      totalItems = total;
      return Product.findAll({
        offset:(page-1)*ITEM_PER_PAGE,
        limit:ITEM_PER_PAGE
      })
       
    })

    .then(products => {
      res.json({
        products:products,
        totalProducts: totalItems,
        currentPage:page,
        hasNextPage: ITEM_PER_PAGE * page < totalItems,
        nextPage: page + 1,
        hasPreviousPage: page > 1,
        previousPage: page - 1,
        lastPage: Math.ceil(totalItems / ITEM_PER_PAGE)
      });
      //   res.render('shop', {
      //     prods: rows,
      //     pageTitle: 'All Products',
      //     path: '/shop'
      //  })
    }).catch((err) => {
      console.log(err);
    })

};


exports.getProduct = (req, res, next) => {
  req.customer
    .getProducts()
    .then(rows => {
      res.render('products', {
        prods: rows,
        pageTitle: 'All Products',
        path: '/shop'
      })
    }).catch((err) => {
      console.log(err);
    })
};

exports.getDetails = (req, res, next) => {
  var id = req.params.productId;
  Product.findByPk(id).then((row) => {
    res.render('details', {
      product: row,
      path: '/shop'
    })
  }).catch((err) => {
    console.log(err);
  })


}
  //Product.findById(






// exports.postProduct = (req, res, next) => {
//   const product = Product.fetchAll();
//   console.log(product);
// }
