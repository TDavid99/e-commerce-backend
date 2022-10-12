const router = require('express').Router();
const { json } = require('sequelize/types');
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const TagItem = await Tag.findAll ({
      include: [{model: Product}],
    });
    res. status(200).json(tagsItem);
  }catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const TagItem = await Tag.findByPk(req.params.id,{
    include: [{model: Product}],
  });
  if (!tagItem){
    res.status(404).json({message: "No tag found wtih that id."});
    return;
  }
  res. status(200).json(tagItem);
  } catch (err) {
    res.status(500).json(err);
  }
});



router.post('/',async (req, res) => {
  // create a new tag
  try {
    const TagItem = await Tag.creat({
      TagItem: req.body.tag_name,
    });
    res.status(200).json(TagItem);
  }catch (err) {
    res. status(400).json(err)
  }
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  try {
    
  }
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
