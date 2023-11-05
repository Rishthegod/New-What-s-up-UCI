const express = require("express");
const router = express.Router();

const Event = require("../models/EventModel.js");

const accountSid = "AC9e87b64ab605356e6621825faf8ec36c";
const authToken = "SKb9e9bf1e3cc2df212a39174856b58f51";
const client = require("twilio")(accountSid, authToken);

router.post("/add", (req, res) => {
  const event = new Event({
    title: req.body.title,
    location: req.body.location,
    time: req.body.time,
    entryFee: req.body.entryFee,
    maxNumberOfAttendees: req.body.maxNumberOfAttendees,
    eventType: req.body.eventType,
  });
  event.save((err, data) => {
    if (err) {
      res.status(400).send({
        message: err,
      });
    } else {
      res.status(200).send({
        message: "Event added successfully",
      });
    }
  });
});

router.get("/all", async (req, res) => {
  Event.find({}).exec((err, data) => {
    if (err) {
      res.status(400).send({
        message: err,
      });
    } else {
      res.status(200).send({
        message: "Success",
        data: data,
      });
    }
  });
});

router.get("/makePhoneCall", async (req, res) => {
  try {
    client.calls
      .create({
        twiml:
          "<Response><Say>Thank you for using Travel Buddy. This is a reminder call for your event tomorrow</Say></Response>",
        to: "+19494001829",
        from: "+15856288819",
      })
      .then((call) => console.log(call.sid));

    res.status(200).json({
      success: true,
      data: "Phone Call is made",
    });
  } catch (error) {
    console.log("ERROR ---- ", error);
    res.status(200).json({
      success: false,
      data: "Phone Call is not made",
    });
  }
});

module.exports = router;
