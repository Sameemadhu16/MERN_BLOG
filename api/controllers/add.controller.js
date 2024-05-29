import Add from '../models/add.model.js';
import { errorHandler } from '../utils/error.js';

export const create = async (req, res, next) => {
  if (!req.user.isAdmin) {
    return next(errorHandler(403, 'You are not allowed to create a add'));
  }
  if (!req.body.title || !req.body.content) {
    return next(errorHandler(400, 'Please provide all required fields'));
  }
  const slug = req.body.title
    .split(' ')
    .join('-')
    .toLowerCase()
    .replace(/[^a-zA-Z0-9-]/g, '');
  const newAdd = new Add({
    ...req.body,
    slug,
    userId: req.user.id,
  });
  try {
    const savedAdd = await newAdd.save();
    res.status(201).json(savedAdd);
  } catch (error) {
    next(error);
  }
};

