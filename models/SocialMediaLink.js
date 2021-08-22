const mongoose = require('mongoose');

const SocialMediaLinkSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    }
});


module.exports = mongoose.model('SocialMediaLink', SocialMediaLinkSchema);
