module.exports = function(app, express) {
    var apiRouter = express.Router();

    var Product = require('../models/product');

    apiRouter.get('/me', function(req,res){

        res.json({
            message:"Hi"
        });
    });

    apiRouter.route('/products')
    
        //Create a product through POST
        //URL: http://localhost:9000/api/products
        .post(function(req, res) {
    
                var product = new Product();
    
                product.title = req.body.title;
                product.description = req.body.description;
                product.pricing = req.body.pricing;

                product.save(function(err) {
                    
                    if (err) {
                        if (err.code == 11000) {
                     
                            return res.json({
                                success: false,
                                message: 'product exists'
                            });
                        }
                    }
                    res.json({
                        success: true,
                        message: 'product was created'
                    });
                });
            })
            .get(function(req, res) {
          
                Product.find(function(err, products) {
                 
                    if (err) return res.send(err);
    
                    res.json(products);
                });
            });
    
        apiRouter.route('/products/:product_id')
            .get(function(req, res) {
    
                Product.findById(req.params.product_id, function(err, product) {
                    if (err) return res.send(err);
                    res.json(product);
                })
            })
            .put(function(req, res) {
                Product.findById(req.params.product_id, function(err, product) {
                    if (err) return res.send(err);
    
                    if (req.body.title) product.title = req.body.title;
                    if (req.body.description) product.description = req.body.description;
                    if (req.body.pricing) product.pricing = req.body.pricing;
    
                    product.save(function(err) {
                        if (err) return res.send(err);
                        res.json({
                            success: true,
                            message: 'product was updated'
                        });
                    });
                });
            })
            .delete(function(req, res) {
    
                Product.remove({
                        _id: req.params.product_id
                    },
                    function(err, product) {
                        if (err) return res.send(err);
                        res.json({
                            success: true,
                            message: 'product was deleted'
                        });
                    }
                );
            });
    

    return apiRouter;
}    