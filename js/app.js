//var scene = document.getElementById('scene')
//var parallax = new Parallax(scene)
//var scene2 = document.getElementById('scene2')
//var parallax2 = new Parallax(scene2)
//parallax.enable();
var isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;

    //isMobile = true;
    if(isMobile) {
         //$("#home-link").hide();
         $(".mobile-nav-btn").show();
         $("#cta, #menu").hide();
         $(".mobile-nav-btn").on("click", function () {
             $("#mobile-nav").show();
         });

         $("#mobile-nav").on("click", function () {
             $("#mobile-nav").hide();
         });
    }

    var s = skrollr.init();

    $(".plaxEl").on("click", function () {
        var elem = document.getElementById("trailer");
        //$(elem).addClass("show");;
        $("#playbtn").hide();
        $(elem).show();
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        }
        
        elem.play();
        ga('send', 'event', "video", "play");
        
        
    });

    //The options (second parameter) are all optional. The values shown are the default values.
    skrollr.menu.init(s, {
        //skrollr will smoothly animate to the new position using `animateTo`.
        animate: true,

        //The easing function to use.
        easing: 'sqrt',

        //Multiply your data-[offset] values so they match those set in skrollr.init
        scale: 1,

        //How long the animation should take in ms.
        duration: function(currentTop, targetTop) {
            //By default, the duration is hardcoded at 500ms.
            return 500;

            //But you could calculate a value based on the current scroll position (`currentTop`) and the target scroll position (`targetTop`).
            //var v = Math.abs(currentTop - targetTop);
            //console.log(v);
            //return v;
        },

        //If you pass a handleLink function you'll disable `data-menu-top` and `data-menu-offset`.
        //You are in control where skrollr will scroll to. You get the clicked link as a parameter and are expected to return a number.
        /*handleLink: function(link) {
            return 400;//Hardcoding 400 doesn't make much sense.
        },*/

        //By default skrollr-menu will only react to links whose href attribute contains a hash and nothing more, e.g. `href="#foo"`.
        //If you enable `complexLinks`, skrollr-menu also reacts to absolute and relative URLs which have a hash part.
        //The following will all work (if the user is on the correct page):
        //http://example.com/currentPage/#foo
        //http://example.com/currentDir/currentPage.html?foo=bar#foo
        ///?foo=bar#foo
        complexLinks: false,

        //This event is triggered right before we jump/animate to a new hash.
        change: function(newHash, newTopPosition) {
            //Do stuff
            //alert(newHash + newTopPosition);
            /*if(newHash === "#start-section") {
                setTimeout( function () {window.scrollTo(0,0);},0);
            }*/
        },

        //Add hash link (e.g. `#foo`) to URL or not.
        updateUrl: false //defaults to `true`.
    });


window.addEventListener("load",function() {
// Set a timeout...
setTimeout(function(){
// Hide the address bar
window.scrollTo(0, 1);
}, 0);
});