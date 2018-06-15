const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const util = require('util');

function BaseSchema() {
  Schema.apply(this, arguments);

  this.add({
    isDeleted: {
      type : Boolean,
      default : false
    },
    createdAt: {
      type : Date,
      default : Date.now
    }
  });
}

util.inherits(BaseSchema, Schema);

module.exports = BaseSchema;
