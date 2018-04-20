var express = require('express');
var router = express.Router();

// Site text content
var skillPageContent = require('../site-text/skillSet.json'),
    myWorkPageContent = require('../site-text/myWorkSet.json'),
    myWorkDetailsPageContent = require('../site-text/myWorkDetailsSet.json'),
    projectsPageContent = require('../site-text/projectsSet.json');

let bioPage = {
  "pageLayout": [{
    "dir": "partials/bio"
  }]
};

let skillsPage = {
  "pageLayout": [{
    "dir": "partials/skills"
  }],
  "pageContent": skillPageContent
}

let myworkPage = {
  "pageLayout": [{
    "dir": "partials/mywork"
  }],
  "pageContent": myWorkPageContent
}

let myWorkDetails = {
  "pageContent": myWorkDetailsPageContent
}


function myworkDetailedPage(path, cb) {

  let pageContentRender = myWorkDetails.pageContent.find(name => name.projectname === path);
  return {
    "pageLayout": [{
        "dir": "partials/projectsdetailed"
      },
      {
        "dir": "partials/footer"
      }
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
  "pageLayout": [{
    "dir": "partials/myprojects"
  }],
  "pageContent": projectsPageContent
}

let viewResume = {
  "pageLayout": [{
    "dir": "partials/resume"
  }]
}

let aboutPage = {
  "pageLayout": [{
    "dir": "partials/about"
  }]
}

let pageindev = {
  "pageLayout": [{
    "dir": "partials/inprogress"
  }, {
    "dir": "partials/footer"
  }]
}

// let pageSample = {
//   "pageLayout": [{
//     "dir": "partials/resume"
//   }]
// }

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', bioPage);
});

router.get('/skills', function (req, res) {
  res.render('index', skillsPage);
})

router.get('/mywork', function (req, res) {
  res.render('index', myworkPage);
})

router.get('/mywork/:more', (req, res) => {
  let path = req.params.more;
  res.render('index', myworkDetailedPage(path));
})

router.get('/projects', (req, res) => {
  res.render('index', projectsPage);
})

router.get('/about', (req, res) => {
  res.render('index', aboutPage);
})

router.get('/viewresume', (req, res) => {
  res.render('index', viewResume);
})

// router.get('/testing', (req, res) =>{
//   res.render('index', pageSample);
// });

router.get('/in-progress', (req, res) => {
  res.render('index', pageindev);
})

router.get('/getpdf', (req, res)=>{
  console.log();
  res.download('./public/extra/resume_patrick.pdf', 'Patrick-Hauke-Resume.pdf');
})
module.exports = router;