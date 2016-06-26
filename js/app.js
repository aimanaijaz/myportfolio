function appViewModel() {
    function bundleInRows() {
        var allRows = [];
        var row;
        self.projects.forEach(function (project, i) {
            if (i % self.cols === 0) {
                if (row) {
                    allRows.push(row);
                }
                row = {};
                row.content = [];
            }
            row.content.push(project);
        });

        if (row) {
            allRows.push(row);
        }

        return allRows;
    }

    self.cols = 3;

    self.colName = (function () {
        return 'col-md-' + 12 / self.cols;
    })();

    self.projects = [
        {
            projectname: 'Multiuser Blog',
            projectimage: 'images/multiuserblog.png',
            projectdescription: "In this project I created a multi user blog.  " +
            "Users can sign in and post blog posts as well as like and comment on other posts made on the blog.  " +
            "I also created an authentication system where users are able to register, sign in and then create blog posts. " +
            "This blog is hosted on Google App Engine",
            projectlink: 'http://nanodegree-blog.appspot.com/',
            projectgithublink: 'https://github.com/aimanaijaz/blogwithauth'
        },
        {
            projectname: 'Neighborhood Map',
            projectimage: 'images/neighborhoodmap.png',
            projectdescription: "Neighborhood map uses knockout.js.  " +
            "It shows all the malls in long island on a full page google map.  " +
            "Users can view info about the malls by clicking on them. " +
            "This info is retrieved by making AJAX calls to wikipedia API",
            projectlink: 'http://aimanaijaz.github.io/P5MapV3/',
            projectgithublink: 'https://github.com/aimanaijaz/P5MapV3'
            
        },
        {
            projectname: 'Movie Trailer Website',
            projectimage: 'images/movietrailers2.png',
            projectdescription: "For the movie trailer website I have written server side code " +
            "to store a list of my favorite movies."+
            "This data was then served as webpage " +
            "to allow users to watch movie trailers." ,
            projectlink: 'https://github.com/aimanaijaz/movietrailers',
            projectgithublink: 'https://github.com/aimanaijaz/movietrailers'  
        },
        {
            projectname: 'Item Catalog',
            projectimage: 'images/itemcatalog.png',
            projectdescription: "Item catalog uses the flask framework to develop a company website.  " +
            "Employees can be added and their details can be edited and deleted. " +
            "I have successfully implemented a local permission system as well as oauth2 (third party authentication)." +   
            "We implement oauth2 using google plus here!" ,  
            projectlink: 'https://github.com/aimanaijaz/Itemcatalog',
            projectgithublink: 'https://github.com/aimanaijaz/Itemcatalog'     
        },
        {
            projectname: 'Website Optimization',
            projectimage: 'images/weboptimization.png',
            projectdescription: "This project demonstrates how a website can be best optimized.  " +
            "The purpose of this project was to learn about the critical rendering path and " +
            "efficient animations.  I took an existing website and optimized the critical " +
            "rendering path to achieve a PageSpeed Insights score above 90.  One of the pages also had " +
            "a janky background animation that now runs at smooth 60 frames per second!",
            projectlink: 'http://aimanaijaz.github.io/webperformance/Optimization/',
            projectgithublink: 'https://github.com/aimanaijaz/webperformance/tree/master/Optimization'
        },
        {
            projectname: 'Classic Arcade game clone',
            projectimage: 'images/frogger.png',
            projectdescription:"Developed a basic Frogger game using object oriented programming concepts  " ,
            projectlink: 'http://aimanaijaz.github.io/frogger/',
            projectgithublink: 'https://github.com/aimanaijaz/frogger-game'
        },
        {
            projectname: 'Resume',
            projectimage: 'images/resume.png',
            projectdescription: "Here we use basic JavaScript skills such as loops, functions " +
            "and DOM manipulation (and build an awesome resume of course!).  All of the resume's content " +
            "is filled in dynamically with JavaScript! It also includes a location map using google maps api!",
            projectlink: 'http://aimanaijaz.github.io/resume/',
            projectgithublink: 'https://github.com/aimanaijaz/resume'
         
        },
        {
            projectname: 'Stone Paper Scissors',
            projectimage: 'images/stonepaperscissors.png',
            projectdescription: "Here I developed the backend for Rock Paper Scissors game " +
            "I wrote an API using google cloud enpoints that enables anyone  " +
            "to develop a front end for my API",
            projectlink: 'https://github.com/aimanaijaz/FSNDStonePaperScissors',
            projectgithublink: 'https://github.com/aimanaijaz/FSNDStonePaperScissors'
        },
        {
            projectname: 'Linux Server Configuration',
            projectimage: 'images/linuxserverconfig.png',
            projectdescription: "I took a baseline installation of a Linux distribution on a virtual machine " +
            "and prepared it to host a web application abd secured it from " +
            "a number of attack vectors. I also configured web and database servers.",
            projectlink: 'https://github.com/aimanaijaz/LinuxServerConfiguration',
            projectgithublink: 'https://github.com/aimanaijaz/LinuxServerConfiguration'
        }
    ];

    self.projects.forEach(function (project, i) {
        project.id = 'project' + i;
        project.idWithHash = '#' + project.id;
    });

    self.projectsInRows = bundleInRows();

    self.selectedProject = ko.observable();

    self.visitProject = function (project) {
        self.selectedProject(project);
    };
}

ko.applyBindings(new appViewModel());
