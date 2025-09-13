import express from 'express'
const router = express.Router()
import {
  addOrderItems,
  getOrderById,
  updateOrderToDelivered,
  getMyOrders,
  getOrders,
} from '../controllers/orderController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

// Create order & get all orders (admin)
router.route('/').post(protect, addOrderItems).get(protect, admin, getOrders)

// Get logged in user's orders
router.route('/myorders').get(protect, getMyOrders)

// Get order by ID
router.route('/:id').get(protect, getOrderById)

// Mark order as delivered (admin only)
router.route('/:id/deliver').put(protect, admin, updateOrderToDelivered)

export default router
