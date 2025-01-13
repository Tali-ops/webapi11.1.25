const router=require('express').Router();
const{Get,GetById,Update,Delete, AddNew}=require('../controllers/product');

router.get('/',Get);
router.get('/:id',GetById);
router.post('/',AddNew);
router.put('/:id',Update);
router.delete('/:id',Delete);

module.exports=router;
