var express = require("express");

var router = express.Router();


var burger = require("../models/burgers.js");

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(req);
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/", function (req, res) {
    burger.insertOne(req.body.burger_name), function()
{

        res.redirect("/");
    };
});

router.put("/:id", function (req, res) {
    var condition = req.params.id;

    console.log("condition", condition);
    burgers.updateOne(conidition, function(){
        res.redirect("/")

    });
});

// // router.delete("/:id", function (req, res) {
// //     var condition = "id = " + req.params.id;

// //     burger.delete(condition, function (result) {
// //         if (result.affectedRows == 0) {

// //             return res.status(404).end();
// //         } else {
// //             res.status(200).end();
// //         }
// //     });
// });


module.exports = router;