var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var eventSchema = new Schema(
  {
    title: {
      type: Schema.Types.String,
    },
    location: {
      type: Schema.Types.String,
    },
    time: {
      type: Schema.Types.String,
    },
    entryFee: {
      type: Schema.Types.String,
    },
    maxNumberOfAttendees: {
      type: Schema.Types.String,
    },
    eventType: {
      type: Schema.Types.String,
    },
  },
  {
    timestamps: true,
  }
);

var Event = mongoose.model("events", eventSchema);
module.exports = Event;
