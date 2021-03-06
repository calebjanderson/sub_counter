const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const UserModel = require('./user.js');
const ChannelModel = require('./channel.js');


const subscriptionSchema = new mongoose.Schema({
  channel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Channel'
  },
  userName: String,
  channelName: String,
  started: { type: Date },
  updated: { type: Date, default: Date.now },
  months: { type: Number, default: 0 },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

const SubscriptionModel = mongoose.model('Subscription', subscriptionSchema);


module.exports = SubscriptionModel;
