var express = require('express'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    app = express();

mongoose.connect("mongodb://localhost/store");

var db = mongoose.connection;

db.on("error", console.error.bind(console, 'connection error:'));

db.once('open', function(){
    console.log("connected");
})

var ProductSchema = mongoose.Schema({
    name: String,
    description: String,
    favorite: Boolean
});


var Product = mongoose.model('Product', ProductSchema);


app.use(cors());

app.use(express.static('./public/dist'));

app.get('/api/v1/products', function (req, res) {
    Product.find(function(err, products){
        if(err)
            return console.error(err)

        res.json({
            products: products
        });
    })

})

app.post('/api/v1/products', function (req, res) {
    var product = new Product({
        name: "Test",
        description: "My description",
        favorite: false
    })

    product.save(function(err, prod){
        if(err)
            return console.error(err)

        res.json({
            products: prod
        });
    })
})

app.put('/api/v1/favorites/:id', function (req, res) {
    console.log(req.params.id);

    Product.findById(req.params.id, function(err, product){
        if(err)
            return console.error(err)

        product.favorite = true;

        product.save(function(err, prod){
            if(err)
                return console.error(err)

            res.json({
                product: prod
            });
        })


    })
})

app.get('/api/v1/favorites', function (req, res) {
    res.json({
        message: "my favorites"
    });
})

app.get('/api/v1/wishlist', function (req, res) {
    res.json({
        message: "my wishlist"
    });
})

module.exports = app;



