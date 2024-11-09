const express = require('express');
const { verifyAuth, checkRole } = require('../middlewares/auth');
const { getResources, createResource, updateResource, deleteResource } = require('../controllers/resource.controller');
const multer = require('multer');

const router = express.Router();
const upload = multer();  // Middleware for handling form data

// Get all resources
router.get('/', verifyAuth, checkRole(['Admin', 'Editor', 'Viewer']), getResources);

// Create a new resource
router.post('/', verifyAuth, checkRole(['Admin', 'Editor']), upload.none(), createResource);

// Update an existing resource
router.put('/:id', verifyAuth, checkRole(['Admin', 'Editor']), upload.none(), updateResource);

// Delete a resource
router.delete('/:id', verifyAuth, checkRole(['Admin']), deleteResource);

module.exports = router;
