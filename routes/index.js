var express = require('express');
var router = express.Router();

let aboutPage = {
  "pageLayout": [
    {"dir": "partials/bio"}
  ]
};

let skillsPage = {
  "pageLayout": [
    {"dir": "partials/skills"}
  ],
  "pageContent":[
    {
      "skillHeader": "Front-end",
      "subSkill": [
        {"skill": "CSS3"},
        {"skill": "Javascript"},
        {"skill": "ES6"}
      ]
    },
    {
      "skillHeader": "Backend",
      "subSkill": [
        {"skill": "NodeJs"},
        {"skill": "APIs"},
        {"skill": "DevOps"}
      ]
    },
    {
      "skillHeader": "Applications",
      "subSkill": [
        {"skill": "Android"}
      ]
    },
    {
      "skillHeader": "Cloud Services",
      "subSkill": [
        {"skill": "AWS EC2"}
      ]
    },
    {
      "skillHeader": "Development Boards",
      "subSkill": [
        {"skill": "Arduino"},
        {"skill": "DragonBoard 410c"},
        {"skill": "Open-Q 820 Dev Kit"}
      ]
    }
  ]
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', aboutPage);
});

router.get('/skills', function(req, res){
  res.render('index', skillsPage);
})

module.exports = router;
