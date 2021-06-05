import Product from '../models/Product'

export const createProducts = async (req, res) => {
    const { name, category, price, imgURL} = req.body; //Destructurando lo que llega manda el Front
    try {
        const newProduct = new Product({
          name,
          category,
          price,
          imgURL,
        });
    
        const productSaved = await newProduct.save();
    
        res.status(201).json(productSaved);
      } catch (error) {
        console.log(error);
        return res.status(500).json(error);
      }
};

export const getProduct = async (req, res) => {
    const products = await Product.find()
    res.status(200).json(products)
};

export const getProductById = async (req, res) => {
    const product = await Product.findById(req.params.productId)
    res.status(200).json(product)
};

export const updateProductById = async (req, res) => {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.productId, req.body, {
        new : true
    })
    res.status(200).json(updatedProduct)
};

export const deleteProductById = async (req, res) => {
    const deletedProduct = await Product.findByIdAndDelete(req.params.productId)
    res.status(204).json()
};