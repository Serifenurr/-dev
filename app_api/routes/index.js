var express = require('express');
var router = express.Router();
var ctrlVenues = require('../controllers/VenueController');
var ctrlComments = require('../controllers/CommentController');
router.post('/venues', ctrlVenues.addVenue);
router.put('/venues/:venueid', ctrlVenues.updateVenue);
router.delete('/venues/:venueid', ctrlVenues.deleteVenue);
router.post('/venues/:venueid/comments', ctrlComments.addComment);
router.put('/venues/:venueid/comments/:commentid', ctrlComments.updateComment);
router.delete('/venues/:venueid/comments/:commentid', ctrlComments.deleteComment);

module.exports = router;