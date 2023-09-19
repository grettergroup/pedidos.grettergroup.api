import {Router} from 'express';
import multer from 'multer';

import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';
import { CategoryController } from './controllers/category/CategoryController';

import { isAuthenticated } from './middlewares/isAuthenticated';
import { ListCategoryController } from './controllers/category/ListCategoryController';
import { CreateProductController } from './controllers/product/CreateProductController';
import {ListProductByCategoryController} from './controllers/product/ListProductByCategoryController';

import uploadConfig from './config/multer';
import { CreateOrderController } from './controllers/order/CreateOrderController';
import { RemoveOrderController } from './controllers/order/RemoveOrderController';
import { AddItemController } from './controllers/order/AddItemController';
import { RemoveItemController } from './controllers/order/RemoveItemController';
import { SendOrderController } from './controllers/order/SendOrderController';
import { ListOrdersController } from './controllers/order/ListOrdersController';
import { DetailOrderController } from './controllers/order/DetailOrderController';
import { FinishOrderController } from './controllers/order/FinishOrderController';



const router = Router();

const upload = multer(uploadConfig.upload("./tmp"))

//Rotas USER
router.post('/user', new CreateUserController().handle);

router.post('/session', new AuthUserController().handle);

router.get('/detailUser', isAuthenticated, new DetailUserController().handler);

//Rotas Category
router.post('/categorie', isAuthenticated, new CategoryController().handler);

router.get('/categorie', isAuthenticated, new ListCategoryController().handler);

//Products
router.post('/product', isAuthenticated, upload.single('file'), new CreateProductController().handler);

router.get('/product',isAuthenticated, new ListProductByCategoryController().handler);

// Order
router.post('/order', isAuthenticated, new CreateOrderController().handler);

router.delete('/order', isAuthenticated, new RemoveOrderController().handler);

router.post('/order/add',isAuthenticated,  new AddItemController().handler);

router.delete('/order/remove', isAuthenticated, new RemoveItemController().handler);

router.put('/order/send', isAuthenticated, new SendOrderController().handler);

router.get('/orders', isAuthenticated, new ListOrdersController().handler);

router.get('/order/detail', isAuthenticated, new DetailOrderController().handler);

router.put('/order/finish', isAuthenticated, new FinishOrderController().handle);

export {router};