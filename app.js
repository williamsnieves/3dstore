var express = require('express'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    app = express();

//mongoose.connect("mongodb://localhost/store");

mongoose.connect("mongodb://root:1234@ds051625.mongolab.com:51625/heroku_v7634j2d");

var db = mongoose.connection;

db.on("error", console.error.bind(console, 'connection error:'));

db.once('open', function(){
    console.log("connected");
})

var ProductSchema = mongoose.Schema({
    name: String,
    description: String,
    favorite: Boolean,
    url:String,
    category: String
});

var WishlistSchema = mongoose.Schema({
    product: {type: Object, ref: 'Product'}
});
var Product = mongoose.model('Product', ProductSchema);
var Wishlist = mongoose.model('Wishlist', WishlistSchema);


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

    var arrayData = [
        {
            name: "Test",
            description: "My description",
            favorite: false,
            url: 'http://thumbs.ebaystatic.com/images/g/czYAAOSw5IJWg0SS/s-l225.jpg',
            category: "balls"
        },
        {
            name: "Test2",
            description: "My description2",
            favorite: false,
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDS8LIG9cUZvf9Ex4rjpzUD0AR6DnVBkSpxEFSOHm7361yFlvu4g',
            category: "poster"
        },
        {
            name: "Test3",
            description: "My description3",
            favorite: false,
            url: 'http://thumbs.ebaystatic.com/images/g/czYAAOSw5IJWg0SS/s-l225.jpg',
            category: "balls"
        },
        {
            name: "Test4",
            description: "My description4",
            favorite: false,
            url: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSUr2SNl6Uszjgu69d8pCPw0q4WuXSqG3swYKG34jPbwkFb_eHM',
            category: "poster"
        },
        {
            name: "Test5",
            description: "My description5",
            favorite: false,
            url:'http://thumbs.ebaystatic.com/images/g/czYAAOSw5IJWg0SS/s-l225.jpg',
            category: "balls"
        },
        {
            name: "Test6",
            description: "My description6",
            favorite: false,
            url: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRIaRCFS5VnKZnTN84M6sy9EiyUr2Dp4WIm__ZdURWFaISUjU3S',
            category: "poster"
        },
        {
            name: "Test7",
            description: "My description7",
            favorite: false,
            url: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS_MktkD-RQfHqtnt3LjTXb8antTtDR8cXkdREJLsoRXYOq6Tr1SQ',
            category: "poster"
        },
        {
            name: "Test8",
            description: "My description8",
            favorite: false,
            url:'http://thumbs.ebaystatic.com/images/g/czYAAOSw5IJWg0SS/s-l225.jpg',
            category: "balls"
        },
        {
            name: "Test9",
            description: "My description9",
            favorite: false,
            url: 'http://thumbs.ebaystatic.com/images/g/czYAAOSw5IJWg0SS/s-l225.jpg',
            category: "balls"
        },
        {
            name: "Test10",
            description: "My description10",
            favorite: false,
            url: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS3Kzkf33HjbxVUyzeAvur6GuuLENhHl8KHguHgHbPhnDZRHpqw',
            category: "poster"
        }
    ];

    Product.create(arrayData, function(err, prod){
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

        if(product.favorite){
            product.favorite = false;
        }else{
            product.favorite = true;
        }

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
    Product.find({favorite: true}, function(err, products){
        if(err)
            return console.error(err)

        res.json({
            favorites: products
        });
    })
})

app.post('/api/v1/wishlist/:id', function (req, res) {

    Product.findById(req.params.id, function(err, product){
        if(err)
            return console.error(err)

        var wishlist = new Wishlist({
            product: {
                id: product._id,
                name: product.name,
                description: product.description
            }
        })

        wishlist.save(function(err, result){
            if(err)
                return console.error(err)

            res.json({
                products: result
            });
        })

    })

})

app.get('/api/v1/wishlist', function (req, res) {
    Wishlist.find(function(err, wishlist){
        if(err)
            return console.error(err)

        res.json({
            wishlists: wishlist
        });
    })

})

module.exports = app;



