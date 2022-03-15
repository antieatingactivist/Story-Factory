const router = require('express').Router();

const {
  getAllSnippets,
  getSnippetById,
  createSnippet,
  getSnippetsByUser,
//   addReaction,
//   removeReaction,
} = require('../../controllers/snippetController');

const { authMiddleWare } = require('../../utils/auth');
// /api/thoughts
router
  .route('/')
  .get(getAllSnippets)
  .post(createSnippet);

router
  .route('/:snippetId')
  .get(getSnippetById)

router
  .route('/me').get(authMiddleWare, getSnippetsByUser)

// router
//   .route('/:snippetId/reactions')
//   .post(addReaction);

// router
//   .route('/:snippetId/reactions/:reactionId')
//   .delete(removeReaction);

module.exports = router;