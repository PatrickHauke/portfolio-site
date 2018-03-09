var express = require('express');
var router = express.Router();

let bioPage = {
  "pageLayout": [{
    "dir": "partials/bio"
  }]
};

let skillsPage = {
  "pageLayout": [{
    "dir": "partials/skills"
  }],
  "pageContent": [{
      "skillHeader": "Front-end",
      "subSkill": [{
          "skill": "CSS3"
        },
        {
          "skill": "Javascript"
        },
        {
          "skill": "ES6"
        }
      ]
    },
    {
      "skillHeader": "Backend",
      "subSkill": [{
          "skill": "NodeJs"
        },
        {
          "skill": "APIs"
        },
        {
          "skill": "DevOps"
        }
      ]
    },
    {
      "skillHeader": "Applications",
      "subSkill": [{
        "skill": "Android"
      }]
    },
    {
      "skillHeader": "Cloud Services",
      "subSkill": [{
        "skill": "AWS EC2"
      }]
    },
    {
      "skillHeader": "Development Boards",
      "subSkill": [{
          "skill": "Arduino"
        },
        {
          "skill": "DragonBoard 410c"
        },
        {
          "skill": "Open-Q 820 Dev Kit"
        }
      ]
    }
  ]
}

let myworkPage = {
  "pageLayout": [{
    "dir": "partials/mywork"
  }],
  "pageContent": [{
      "imgsrc": "img/screenshots/mywork/puppywalk.jpg",
      "worktitle": "Mishka",
      "jobtitle": "CEO / Lead Web and Mobile Developer",
      "workdate": "January 2018 - Current",
      // "workdesc": "Mishka is a community driven social media platform centered around tracking and sharing events experienced between dogs, dog owners, and dog walkers while outside. Mishka spawned out of an idea called PuppyWalk which had its start during a hardware themed hackathon in Red Hook, Brooklyn. The idea stayed dormant for several months until I decided to use the idea for a technical writing course during the summer. Writing on the idea offered a realization for the potential impact and scale of the project. After several more months of taking notes, thinking about the idea, and expanding my knowledge of hobby electronics, I competed in the Fall 2017, CUNY Hackathon where my team and I developed a hardware prototype. Our team was one out of 17 from a total of 55 selected to pitch our idea to a panel of judges. Although we did not win any awards for the project, we were invited to pitch our idea to the CUNY Startup Accelerator Program. In November 2017, we were accepted into the Spring 2018 Cohort and are currently developing a more refined business model and prototype.",
      "workdesc": "Mishka is a community driven social media platform centered around tracking and sharing events experienced between dogs, dog owners, and dog walkers while outside. In November 2017, we were accepted into the Spring 2018 Cohort and are currently developing a more refined business model and prototype.",
      "workbtn": "mishka"
    },
    {
      "imgsrc": "img/screenshots/mywork/nycct.jpg",
      "worktitle": "AIR | Assessment and Institutional Research",
      "jobtitle": "Consultant / Informal Internship",
      "workdate": "August - December 2017",
      // "workdesc": "After a friend shared details about a new internship she was starting, I decided on offering my spare time to help plan and develop a web application which would be used to give and store the responses of digital surveys in a smarter way. I offered teaching what I knew from my time at Alexapath, as well as assisted in designing and implementing database models, backend logic, and efficient methods of dynamically rendering questions in a survey based off of a users previous responses in order to avoid duplicate responses. The informal internship offered me a fresh project to apply my understanding and skills in Nodejs, Express, and EJS, and too also gain a far better understanding with asynchronous calls and using Oracle in web services.",
      "workdesc": "After a friend shared details about a new internship she was starting, I decided on offering my spare time to help plan and develop a web application which would be used to give and store the responses of digital surveys in a smarter way.",
      "workbtn": "air-internship"
    },
    {
      "imgsrc": "img/screenshots/mywork/side-bar-res.png",
      "worktitle": "Alexapath LLC mWSI Live Beta",
      "jobtitle": "Lead Full Stack Web Developer and DevOps",
      "workdate": "April - October 2017",
      // "workdesc": "The beta stage of development for the mobile whole slide imaging live platform was a major overhaul and improvement to the alpha. Session management, user logs, session based messaging rooms, image capture, commenting, and digital generation of reports and verification of signatures were implemented. During this phase of development, we had two interns join the Alexapath team who greatly reduced the development time of the project on all fronts. At the end of their two months, we had a fully functional build running on local machines. I dedicated another two months to do bug fixes, refactoring, and additional DevOps to deploy the beta platform to production. The deployment process hit several snags along the way as past warnings of deprecated packages went ignored in favor of a faster deployment to users. The beta was successfully deployed and verified to work as intended over the next month. After leaving Alexapath in October 2017, the current state of the project and development are unknown.",
      "workdesc": "The beta stage of development for the mobile whole slide imaging live platform was a major overhaul and improvement to the alpha. Session management, user logs, session based messaging rooms, image capture, commenting, and digital generation of reports and verification of signatures were implemented.",
      "workbtn": "alexapath-mwsi-beta"
    },
  ]
}

let myWorkDetails = {
  "pageContent": [{
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
  "pageContent": [{
      "pageimg": "/img/projects/cuny-hack.webp",
      "pageheader": "CUNY Hackathon, Fall 2017",
      "pagedate": "Nov 10-12, 2017",
      "pagesubheader": "Hackathon",
      "pagedesc": "My team and I worked on building a prototype for a social meetup application for dogs and dog owners. Over the course of 28 hours, we built out a hardware prototype, and a simple web application that would display the location of a dog wearing the hardness. Out of 55 teams, we were one of 17 selected to present our ideas to judges. Although we did not win any challenges, I was personally awarded the Google MVP Award from Raymond Blum after the judges learned that I was helping a group competing against us.",
      "eventpageurl": "http://www.cunystartups.com/hackathon",
      "projectpageurl": "https://devpost.com/software/puppywalk"
    },
    {
      "pageimg": "/img/projects/technica.jpg",
      "pageheader": "Technica 2017, All Women's Hackathon",
      "pagedate": "Nov 3-5, 2017",
      "pagesubheader": "Hackathon",
      "pagedesc": "Technica 2017 was an all women hackathon hosted at the University of Maryland with over 850 participants competing. After a friend informed me that she was interested in attending, I reached out to the event coordinators to see if I could take the opportunity to give back to the hackathon community in order to share what I learned during my time working with Alexapath. I assisted several teams and helped with event setup and breakdown over the course of 30 hours.",
      "eventpageurl": "http://gotechnica.org/",
      "projectpageurl": "http://gotechnica.org/"
    },
    {
      "pageimg": "/img/projects/md5.jpg",
      "pageheader": "MD5 Disaster Relief Hackathon, NYC",
      "pagedate": "Oct 14-16, 2016",
      "pagesubheader": "Hackathon",
      "pagedesc": "I attended MD5 along with the team I worked with at Alexapath LLC. We used the event as an opportunity to do a 3 day sprint too refactor and optimize both the hardware and web application for the Mobile Whole Slide Imaging Live prototype. We successfully completed out goal for the event and gave a well received presentation of our system and how it could be used by medical personnel in emergency response situations where bandwidth and access to pathologists would be limited.",
      "eventpageurl": "https://bunkerlabs.org/event/md5-national-security-technology-accelerator-hackathon/",
      "projectpageurl": "https://technical.ly/brooklyn/2016/10/25/department-defense-md5-hackathon/"
    },
    {
      "pageimg": "/img/projects/red-hook.jpg",
      "pageheader": "Hack Red Hook",
      "pagedate": "Jun 24-26, 2016",
      "pagesubheader": "Hackathon",
      "pagedesc": "Hack Red Hook was the first time attending a hardware themed competition. We came up with the idea for Puppy Walk, an IOS application which could be used by dog walkers to track their dogs location through the use of a custom collar, keep a record of a dogs friends, and give warnings to owners when an aggressive dog may be nearby. I worked on developing the breadboard prototype of the collar which would talk to a web service and update the position in the IOS app.",
      "eventpageurl": "https://pioneerworks.org/series/hack-red-hook/",
      "projectpageurl": "https://github.com/CSTHackers/puppyWalk?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3Big2ii59PTGqWaXBQxG4KFw%3D%3D"
    },
    {
      "pageimg": "/img/projects/ah9.jpg",
      "pageheader": "AngelHack Brooklyn",
      "pagedate": "Jun 17-19, 2016",
      "pagesubheader": "Hackathon",
      "pagedesc": "During my second hackathon, I had exposure to my first competitive competition in programming. It was also the first time implementing an API into a web application. We decided to work on an idea called WingBot, a text based web app that would ask you questions based off of previous input in order to generate a personalized About Me page for online profiles. We took advantage of Facebook Messenger API, and HP Haven OnDemand Sentiment Analysis API to get a prototype built.",
      "eventpageurl": "https://angelhack.com/angelhack-brooklyn-2016/",
      "projectpageurl": "http://www.hackathon.io/66713?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3Big2ii59PTGqWaXBQxG4KFw%3D%3D"
    },
    {
      "pageimg": "/img/projects/beinbrooklyn.png",
      "pageheader": "Be.Innovative Hackathon",
      "pagedate": "Apr 08-10, 2016",
      "pagesubheader": "Hackathon",
      "pagedesc": "As my first hackathon, I was terrified and doubtful of my ability to contribute to my first programming related project outside of what was asked from university. With the first push from a close friend, I attended the event. I immediately began contributing more to the team than I thought I’d be capable of. We finalized an idea to build an Android application that could be used by tourists to find and support local business in Downtown Brooklyn. I became hooked on learning software development after finishing the event while being awake for 35 hours working.",
      "eventpageurl": "https://bein-brooklyn-challenge.devpost.com/",
      "projectpageurl": "https://devpost.com/software/destination-brooklyn-o69abl"
    }
  ]
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