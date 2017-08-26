var bio = {
      name : "Rawan Alsaaran",
      role: "Student",
      contacts: {
            mobile:"0536456798",
            email:"r.alsaaran@gmail.com",
            githup:"r.alsaaran",
            twitter:"r.alsaaran",
            location:"Riyadh"
      },
      welcomeMessage: "", 
      skills: ["photoshop","testing","development"],
      biopic: "image/rawan.png",
      display: function(){
          var formattedName = HTMLheaderName.replace("%data%", bio.name); 
            var formattedRole = HTMLheaderRole.replace("%data%", bio.role); 
            $("#header").prepend(formattedName + formattedRole);  
            var formattedMessage= HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
            $("#header").append(formattedMessage);
            var formattedPic= HTMLbioPic.replace("%data%",bio.biopic);
            $("#header").append(formattedPic);
            var formattedMobile= HTMLmobile.replace("%data%",bio.contacts.mobile);
            $("#topContacts").append(formattedMobile);
            $("#footerContacts").append(formattedMobile);
            var formattedEmail= HTMLemail.replace("%data%",bio.contacts.email);
            $("#topContacts").append(formattedEmail);
            $("#footerContacts").append(formattedEmail);
            var formattedbioGithub= HTMLgithub.replace(/%data%/,bio.contacts.githup);
            $("#topContacts").append(formattedbioGithub);
            $("#footerContacts").append(formattedbioGithub);
            var formattedTwitter= HTMLtwitter.replace(/%data%/,bio.contacts.twitter);
            $("#topContacts").append(formattedTwitter);
            $("#footerContacts").append(formattedTwitter);
            var formattedLocation= HTMLlocation.replace("%data%",bio.contacts.location);
            $("#topContacts").append(formattedLocation);
            $("#footerContacts").append(formattedLocation);
            $("#header").append(HTMLskillsStart);
            for (var i=0; i<bio.skills.length; i++) { 
                var formattedSkills =  HTMLskills.replace("%data%", bio.skills[i]);
                $("#skills").append(formattedSkills); 
            }
      }
};
bio.display();

var work ={
      jobs:[
         {
              employer: "Rqmnh" ,
              title: "Training" ,
              location: "Khalid Ibn Al Walid Street" ,
              dates: "2017-2018",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus rhoncus nisl molestie ullamcorper. Nulla quis convallis dui. Proin sollicitudin erat massa."
          }
      ],
       display:function(){
           $("#workExperience").append(HTMLworkStart);
           for (var x= 0; x<work.jobs.length; x++) {
                var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[x].employer);
                var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[x].title);
                var formattedEmployerTitle = formattedEmployer+formattedTitle;
                $(".work-entry:last").append(formattedEmployerTitle);
                var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[x].location);
                $(".work-entry:last").append(formattedLocation);
                var formattedDates = HTMLworkDates.replace("%data%",work.jobs[x].dates);
                $(".work-entry:last").append(formattedDates);           
                var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[x].description);
                $(".work-entry:last").append(formattedDescription);
            }
       } 
};
work.display();

var education={
          schools: [
                  {
                name: "Imam univarsity",
                location: "Uthman Ibn Affan Road",
                degree: "BA",
                majors: ["CS"],
                dates: "2013-2018",
                url: "https://imamu.edu.sa/Pages/default.aspx"
                  }
          ],
          onlineCourses:[
                  {
                title: "Java",
                school:"Rwaq",
                dates: "2015-2016",
                url: "https://www.rwaq.org/"
                  }
          ],
        display:function(){
                $("#education").append(HTMLschoolStart);
                for (var x=0; x<education.schools.length; x++) {
                    var formattedName = HTMLschoolName.replace("%data%",education.schools[x].name);
                    var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[x].degree);
                    var formattedNameDegree = formattedName+formattedDegree;
                    $(".education-entry:last").append(formattedNameDegree);
                    var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[x].location);
                    $(".education-entry:last").append(formattedLocation);
                    var formattedDates = HTMLschoolDates.replace("%data%",education.schools[x].dates);
                    $(".education-entry:last").append(formattedDates);
                    var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[x].majors);
                    $(".education-entry:last").append(formattedMajor);
                }
                $(".education-entry:last").append(HTMLonlineClasses);
                for (var i=0; i<education.onlineCourses.length; i++) {
                    var formattedonlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[i].title);
                    var formattedoloineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[i].school);
                    var formattedonlinTitSch = formattedonlineTitle+formattedoloineSchool;
                    $(".education-entry:last").append(formattedonlinTitSch);
                    var formattedonlineDates = HTMLonlineDates.replace("%data%",education.onlineCourses[i].dates);
                    $(".education-entry:last").append(formattedonlineDates);
                    var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
                    $(".education-entry:last").append(formattedonlineURL);

                }
        }
    
};
education.display();

var projects = {
        projects:[
                {
                title: "portfolio projects ", 
                dates: "2017",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus rhoncus nisl molestie ullamcorper. Nulla quis convallis dui. Proin sollicitudin erat massa.",
                images: ["image/photo3.png","image/photo22.png"]
                }
        ],
        display:function(){
                $("#projects").append(HTMLprojectStart);
                for (var x= 0; x<projects.projects.length; x++) {
                        var formattedProjectTitle= HTMLprojectTitle.replace("%data%", projects.projects[x].title);
                        $(".project-entry:last").append(formattedProjectTitle);
                        var formattedDates= HTMLprojectDates.replace("%data%", projects.projects[x].dates);
                        $(".project-entry:last").append(formattedDates);
                        var formattedDescription= HTMLprojectDescription.replace("%data%", projects.projects[x].description);
                        $(".project-entry:last").append(formattedDescription);
                        for (var y=0; y<projects.projects[x].images.length; y++) {
                                var formattedImage= HTMLprojectImage.replace("%data%", projects.projects[x].images[y]);
                                $(".project-entry:last").append(formattedImage);
                        }
                }
        }
};
projects.display();


$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);