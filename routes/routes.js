var express = require('express');
var router = express.Router();

let bioPage = {
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
      "workdesc": "Live sharing of slide specimin to pathologists for rapid remote diagnosis",
      "workbtn": "alexapath-mwsi-live"
    },
    {
      "imgsrc": "img/screenshots/mywork/mwsi-live-00.png",
      "worktitle": "Alexapath | Mobile Whole Slide Imaging Live",
      "workdesc": "Live sharing of slide specimin to pathologists for rapid remote diagnosis",
      "workbtn": "alexapath-main-site"
    },
    {
      "imgsrc": "img/screenshots/mywork/mwsi-live-00.png",
      "worktitle": "Alexapath | Mobile Whole Slide Imaging Live",
      "workdesc": "Live sharing of slide specimin to pathologists for rapid remote diagnosis",
      "workbtn": "sample00"
    },
    {
      "imgsrc": "img/screenshots/mywork/mwsi-live-00.png",
      "worktitle": "Alexapath | Mobile Whole Slide Imaging Live",
      "workdesc": "Live sharing of slide specimin to pathologists for rapid remote diagnosis",
      "workbtn": "sample01"
    },
    {
      "imgsrc": "img/screenshots/mywork/mwsi-live-00.png",
      "worktitle": "Alexapath | Mobile Whole Slide Imaging Live",
      "workdesc": "Live sharing of slide specimin to pathologists for rapid remote diagnosis",
      "workbtn": "sample02"
    }
  ]
}

let myWorkDetails = {
  "pageContent": [
    {
      "projectname": "alexapath-mwsi-live",
      "whatisheader": "Project Heading",
      "whatisdesc": "Primary Project Desc Primary Project Desc Primary Project Desc Primary Project Desc Primary Project Desc Primary Project Desc",
      "whatisbtnname": "Project BTN Name",
      "whatisbtnurl": "https://google.com",
      "whatisimg": "/img/screenshots/mywork/mwsi-live-00.png", 
      "briefdesc": "Task Desc Task Desc Task Desc Task Desc Task Desc Task Desc Task Desc Task Desc Task Desc",
      "workdonebeforeimg": "/img/screenshots/mywork/mwsi-live-00.png",
      "workdonebeforedesc": "Desc of what it was before",
      "workdoneafterimg": "/img/screenshots/mywork/mwsi-live-00.png",
      "workdoneafterdesc": "Desc of what it was after",
      "endresultdesc": "Desc of end result Desc of end result"
    },
    {
      "projectname": "alexapath-main-site",
      "whatisheader": "Project Heading",
      "whatisdesc": "Primary Project Desc Primary Project Desc Primary Project Desc Primary Project Desc Primary Project Desc Primary Project Desc",
      "whatisbtnname": "Project BTN Name",
      "whatisbtnurl": "https://google.com",
      "whatisimg": "/img/screenshots/mywork/mwsi-live-00.png", 
      "briefdesc": "Task Desc Task Desc Task Desc Task Desc Task Desc Task Desc Task Desc Task Desc Task Desc",
      "workdonebeforeimg": "/img/screenshots/mywork/mwsi-live-00.png",
      "workdonebeforedesc": "Desc of what it was before",
      "workdoneafterimg": "/img/screenshots/mywork/mwsi-live-00.png",
      "workdoneafterdesc": "Desc of what it was after",
      "endresultdesc": "Desc of end result Desc of end result"
    },
    {
      "projectname": "alexapath-mwsi-live",
      "whatisheader": "Project Heading",
      "whatisdesc": "Primary Project Desc Primary Project Desc Primary Project Desc Primary Project Desc Primary Project Desc Primary Project Desc",
      "whatisbtnname": "Project BTN Name",
      "whatisbtnurl": "https://google.com",
      "whatisimg": "/img/screenshots/mywork/mwsi-live-00.png", 
      "briefdesc": "Task Desc Task Desc Task Desc Task Desc Task Desc Task Desc Task Desc Task Desc Task Desc",
      "workdonebeforeimg": "/img/screenshots/mywork/mwsi-live-00.png",
      "workdonebeforedesc": "Desc of what it was before",
      "workdoneafterimg": "/img/screenshots/mywork/mwsi-live-00.png",
      "workdoneafterdesc": "Desc of what it was after",
      "endresultdesc": "Desc of end result Desc of end result"
    }
  ]
}



function myworkDetailedPage(path, cb){

  let pageContentRender = myWorkDetails.pageContent.find(name => name.projectname === path);
  return {
    "pageLayout": [
      {"dir": "partials/projectsdetailed"},
      {"dir": "partials/footer"}
      // {"dir": "partials/detailed/what-is"},
      // {"dir": "partials/detailed/brief"},
      // {"dir": "partials/detailed/work-done"},
      // {"dir": "partials/detailed/end-result"},
      // {"dir": "partials/footer"}
    ],
    "pageContent": [pageContentRender]
  }
}

let projectsPage = {
  "pageLayout": [
    {"dir": "partials/myprojects"}
  ],
  "pageContent": [
    {
      "pageimg": "/img/screenshots/mywork/mwsi-live-00.png",
      "pageheader": "CUNY Hackathon, Fall 2017",
      "pagesubheader": "Hackathon",
      "pagedesc": "Hackathon Description",
      "eventpageurl": "http://www.cunystartups.com/hackathon",
      "projectpageurl": "https://devpost.com/software/puppywalk"
    }
  ]
}

let viewpdf = {
  "pageLayout": [
    {"dir": "partials/viewpdf"}
  ]
}

let aboutPage = {
  "pageLayout": [
    {"dir": "partials/about"}
  ]
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', bioPage);
});

router.get('/skills', function(req, res){
  res.render('index', skillsPage);
})

router.get('/mywork', function(req, res){
  res.render('index', myworkPage);
})

router.get('/mywork/:more', (req, res)=>{
  let path = req.params.more;
  res.render('index', myworkDetailedPage(path));
})

router.get('/projects', (req, res)=>{
  res.render('index', projectsPage);
})

router.get('/about', (req, res)=>{
  res.render('index', aboutPage);
})

router.get('/viewresume', (req, res)=>{
  res.render('index', viewpdf);
})

module.exports = router;
