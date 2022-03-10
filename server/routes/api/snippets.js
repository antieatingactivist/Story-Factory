const router = require('express').Router();

const {
  getAllSnippets,
  getSnippetById,
  addSnippet,
  addReaction,
  removeReaction,
} = require('../../controllers/snippetController');

// /api/thoughts
router
  .route('/')
  .get(getAllSnippets)
  .post(addSnippet);

router
  .route('/:snippetId')
  .get(getSnippetById)

router
  .route('/:snippetId/reactions')
  .post(addReaction);

router
  .route('/:snippetId/reactions/:reactionId')
  .delete(removeReaction);

module.exports = router;