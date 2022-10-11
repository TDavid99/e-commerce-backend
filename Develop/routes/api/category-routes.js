const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try{
    const categoriesItem = await Category.findAll({
      include: [{model: Product}],
    });
    res.status(200).json(categoriesData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try { 
    const categoriesItem = await Category.findByPk(req.params.id,{
      include: [{model: Product}],
    });
    if(!categoriesItem) {
      res.status(404).json({message: "No category found with that id!"});
      return;
    }
    res.status(200).json(categoriesItem);

  }catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  // create a new category
  try {
    const categoriesItem = await Category.create({
      category_title: req.body.category_title,
    });
    res.status(200).json(categoriesItem);
  }catch(err) {
    res.status(400).json(err);
  }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
