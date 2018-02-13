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

let myworkPage = {
  "pageLayout": [
    {"dir": "partials/mywork"}
  ],
  "pageContent":[
    {
      "imgsrc": "img/screenshots/mywork/mwsi-live-00.png",
      "worktitle": "Alexapath | Mobile Whole Slide Imaging Live",
      "workdesc": "Live sharing of slide specimin to pathologists for rapid remote diagnosis"
    },
    {
      "imgsrc": "img/screenshots/mywork/mwsi-live-00.png",
      "worktitle": "Alexapath | Mobile Whole Slide Imaging Live",
      "workdesc": "Live sharing of slide specimin to pathologists for rapid remote diagnosis"
    },
    {
      "imgsrc": "img/screenshots/mywork/mwsi-live-00.png",
      "worktitle": "Alexapath | Mobile Whole Slide Imaging Live",
      "workdesc": "Live sharing of slide specimin to pathologists for rapid remote diagnosis"
    },
    {
      "imgsrc": "img/screenshots/mywork/mwsi-live-00.png",
      "worktitle": "Alexapath | Mobile Whole Slide Imaging Live",
      "workdesc": "Live sharing of slide specimin to pathologists for rapid remote diagnosis"
    },
    {
      "imgsrc": "img/screenshots/mywork/mwsi-live-00.png",
      "worktitle": "Alexapath | Mobile Whole Slide Imaging Live",
      "workdesc": "Live sharing of slide specimin to pathologists for rapid remote diagnosis"
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

router.get('/mywork', function(req, res){
  res.render('index', myworkPage);
})

module.exports = router;
