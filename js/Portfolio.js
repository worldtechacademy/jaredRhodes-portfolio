
// el.addEventListener("mouseover", function(){
//    var el = document..className = "caption2";
// });

// els.addEventListener("mouseout", function(){
//     document.getElementsByClassName("inner").classList.remove("caption2");
// });
$(document).ready( function () {

    var Project = function(title, description, link, imgRef) {
        this.title = title;
        this.description = description;
        this.link = link;
        this.imgRef = imgRef;
    };

    var cpr = new Project('CPR Website', 'Description of the CPR Site Here', 'http://www.worldtechacademy.com', 'assets/cprSite.jpg');
    var cms = new Project('Mini-CMS', 'WordPress has nothing on this guy!', 'http://dight350.tardis-shoes.com/dewey/mini-cms/', 'assets/cmsSite.jpg');
    var moviePosterSite = new Project('Movie Poster Website', 'A cool and unique way to show off movie posters', 'http://dight250.tardis-shoes.com/deweys/movie-posters/index.html', 'assets/moviePosterSite.jpg');
    var photoSite = new Project('Photo Gallery', 'My own photo gallery to organize my pictures', 'http://dight350.tardis-shoes.com/dewey/gallery/gallery.php', 'assets/photoSite.jpg');
    var todoSite = new Project('To Do List', 'A custom built way to organize my day', 'http://dight350.tardis-shoes.com/dewey/todue/', 'assets/todoSite.jpg');
    var wtaSite = new Project('World Tech Academy', 'Built a website for World Tech Academy, a local coding school', 'http://www.worldtechacademy.com/', 'assets/wtaSite.jpg');

    var projectArray = [cpr, cms, moviePosterSite, photoSite, todoSite, wtaSite];

    function processArray(project){
        var aTag = document.createElement("a");
        aTag.setAttribute('href',project.link);
        aTag.id = project.title + '-' + 'link';
        document.getElementById('firstRow').appendChild(aTag);

        var outerDIV = document.createElement("div");
        outerDIV.className = 'hvr-float-shadow projectBackground';
        outerDIV.id = project.title + '-' + 'outer';
        document.getElementById(project.title + '-' +'link').appendChild(outerDIV);

        var middleDIV = document.createElement("div");
        //middleDIV.className = 'projectBackground';
        middleDIV.id = project.title + '-' + 'middle';
        document.getElementById(project.title + '-' +'outer').appendChild(middleDIV);

        var imgTag = document.createElement("img");
        imgTag.src = project.imgRef;
        imgTag.className = 'thumbnailimg';
        imgTag.id = project.title + '-' + 'img';
        //imgTag.setAttribute("data-src", "holder.js/360x270");
        document.getElementById(project.title + '-' +'middle').appendChild(imgTag);

        var innerDIV = document.createElement("div");
        innerDIV.className = 'caption';
        innerDIV.id = project.title + '-' + 'inner';
        innerDIV.innerHTML = '<h3>' + project.title + '</h3>' +
             '<p>' + project.description + '</p>' +
            "<a href='" + project.link + "'class='btn btn-primary'>Find Out More</a>";
        document.getElementById(project.title + '-' +'middle').appendChild(innerDIV);

        document.getElementById(project.title + '-' +'outer').addEventListener("mouseover", function(){
           var el = document.getElementById(project.title + '-' +'inner').className = "caption2";
           var el2 = document.getElementById(project.title + '-' +'img').className = "thumbnailHover";
        });
        document.getElementById(project.title + '-' +'outer').addEventListener("mouseout", function(){
           var el = document.getElementById(project.title + '-' +'inner').className = "caption";
           var el2 = document.getElementById(project.title + '-' +'img').className = "thumbnailimg";
        });
    }
    projectArray.forEach(processArray);

    $("#projectScroll").click(function(){
        $('html, body').animate({ scrollTop: $('#projectID').offset().top }, 'slow');

    })

    $("#contactScroll").click(function(){
        $('html, body').animate({ scrollTop: $('#contactID').offset().top }, 'slow');

    })

    $('#map_canvas').addClass('scrolloff'); // set the pointer events to none on doc ready

    $('#map').on('click', function () {
        $('#map_canvas').removeClass('scrolloff'); // set the pointer events true on click
    });

    // you want to disable pointer events when the mouse leave the canvas area;

    $("#map").mouseleave(function () {
        $('#map_canvas').addClass('scrolloff'); // set the pointer events to none when mouse leaves the map area
    });

});