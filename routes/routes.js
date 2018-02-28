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
      "worktitle": "Mishka",
      "jobtitle": "CEO / Lead Web and Mobile Developer",
      "workdate": "January 2018 - Current",
      // "workdesc": "Mishka is a community driven social media platform centered around tracking and sharing events experienced between dogs, dog owners, and dog walkers while outside. Mishka spawned out of an idea called PuppyWalk which had its start during a hardware themed hackathon in Red Hook, Brooklyn. The idea stayed dormant for several months until I decided to use the idea for a technical writing course during the summer. Writing on the idea offered a realization for the potential impact and scale of the project. After several more months of taking notes, thinking about the idea, and expanding my knowledge of hobby electronics, I competed in the Fall 2017, CUNY Hackathon where my team and I developed a hardware prototype. Our team was one out of 17 from a total of 55 selected to pitch our idea to a panel of judges. Although we did not win any awards for the project, we were invited to pitch our idea to the CUNY Startup Accelerator Program. In November 2017, we were accepted into the Spring 2018 Cohort and are currently developing a more refined business model and prototype.",
      "workdesc" : "Mishka is a community driven social media platform centered around tracking and sharing events experienced between dogs, dog owners, and dog walkers while outside. In November 2017, we were accepted into the Spring 2018 Cohort and are currently developing a more refined business model and prototype.",
      "workbtn": "mishka"
    },
    {
      "imgsrc": "img/screenshots/mywork/mwsi-live-00.png",
      "worktitle": "AIR | Assessment and Institutional Research",
      "jobtitle": "Consultant / Informal Internship",
      "workdate": "August - December 2017",
      // "workdesc": "After a friend shared details about a new internship she was starting, I decided on offering my spare time to help plan and develop a web application which would be used to give and store the responses of digital surveys in a smarter way. I offered teaching what I knew from my time at Alexapath, as well as assisted in designing and implementing database models, backend logic, and efficient methods of dynamically rendering questions in a survey based off of a users previous responses in order to avoid duplicate responses. The informal internship offered me a fresh project to apply my understanding and skills in Nodejs, Express, and EJS, and too also gain a far better understanding with asynchronous calls and using Oracle in web services.",
      "workdesc" : "After a friend shared details about a new internship she was starting, I decided on offering my spare time to help plan and develop a web application which would be used to give and store the responses of digital surveys in a smarter way.",
      "workbtn": "air-internship"
    },
    {
      "imgsrc": "img/screenshots/mywork/mwsi-live-00.png",
      "worktitle": "Alexapath LLC mWSI Live Beta",
      "jobtitle": "Lead Full Stack Web Developer and DevOps",
      "workdate": "April - October 2017",
      // "workdesc": "The beta stage of development for the mobile whole slide imaging live platform was a major overhaul and improvement to the alpha. Session management, user logs, session based messaging rooms, image capture, commenting, and digital generation of reports and verification of signatures were implemented. During this phase of development, we had two interns join the Alexapath team who greatly reduced the development time of the project on all fronts. At the end of their two months, we had a fully functional build running on local machines. I dedicated another two months to do bug fixes, refactoring, and additional DevOps to deploy the beta platform to production. The deployment process hit several snags along the way as past warnings of deprecated packages went ignored in favor of a faster deployment to users. The beta was successfully deployed and verified to work as intended over the next month. After leaving Alexapath in October 2017, the current state of the project and development are unknown.",
      "workdesc" : "The beta stage of development for the mobile whole slide imaging live platform was a major overhaul and improvement to the alpha. Session management, user logs, session based messaging rooms, image capture, commenting, and digital generation of reports and verification of signatures were implemented.",
      "workbtn": "alexapath-mwsi-beta"
    },
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
