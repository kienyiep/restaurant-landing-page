// this line ensure the code can only run after the documents has been loaded.
$(document).ready(function () {
  //    here we will select the class name, and then the way point pluggin comes in, which is also the waypoint method.
  //   the function got an argument called direction, the direction means
  //   is that we can actually dectect if the user is scrolling down the webpage or if the user is scrolling up.
  // and now we will take the decision based on the direction parameter.

  $(".js--section-features").waypoint(
    function (direction) {
      if (direction == "down") {
        // here we will select the nav Element, and then in j query,
        // we have very handly j query method which has nothing done with waypoint.
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      // we want the navigation to appear before the section to create some space
      // between the nav and the first section in the first apperance.
      // so this will happen 60px before we hit the section that we defined.
      offset: "60px;",
    }
  );
  // var waypoints = $('#handler-first').waypoint(function(direction) {
  //     notify(this.element.id + ' hit 25% from top of window')
  //   }, {
  //     offset: '25%'
  //   })

  $(".js--scroll-to-plan").click(function () {
    // to animate the scroll, we need to select the html and body, and then we use the animate method.
    // then scroll top, and then we select the section we want to go to.

    // so what happen here is we select on the class, and when we click on it this happen,
    // so we have an animation which scroll to the top of the js section plan with a speed of one second.
    $("html, body").animate(
      { scrollTop: $(".js--section-plans").offset().top },
      1000
    );
  });

  $(".js--scroll-to-start").click(function () {
    $("html, body").animate(
      { scrollTop: $(".js--section-features").offset().top },
      1000
    );
  });

  $(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on("click", function (event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top,
          },
          8000,
          function () {
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          }
        );
      } // End if
    });
  });

  // so in jquery , in order to select any elements, we create a selector, and then we write the h1 element
  // and then we use the click method which  is a method like a function, so anyone who click that h1 Element.
  // this is the function that will happen.

  // $('h1').click(function(){

  // so we want this, and so we select this Element, and this keyword here now means our h1 element.
  // because that's what we selected in the first place.
  // and then we will use the css methods, which will allow us to change the css properties of the h1 element.
  //     $(this).css('background-color','ff0000')
  // });

  // maybe the below adding animation method without jquery is it does not need to select any class,and does not need to listent to
  // any mouse click event and change the css properties.

  //or the other possibility is it does not copy the source code from the google browser.
  //the above 3 line is just an assumption.
  $(".js--wp-1").waypoint(
    function (direction) {
      // all we need to do to animate an element using this animate.css framework is to add a class animated,
      // and the name of the Animation, we want, e.g fade out , fade in etc

      $(".js--wp-1").addClass("animate__animated animate__fadeIn");
    },
    {
      // 50% would be half of the page.
      offset: "50%",
    }
  );

  $(".js--wp-2").waypoint(
    function (direction) {
      $(".js--wp-2").addClass("animate__animated animate__fadeInUp");
    },
    {
      offset: "50%",
    }
  );

  $(".js--wp-3").waypoint(
    function (direction) {
      $(".js--wp-3").addClass("animate__animated animate__fadeIn");
    },
    {
      offset: "50%",
    }
  );

  $(".js--wp-4").waypoint(
    function (direction) {
      $(".js--wp-4").addClass("animate__animated animate__pulse");
    },
    {
      offset: "50%",
    }
  );

  $(".js--nav-icon").click(function () {
    //  here I will create the variabled called nav,and this variable will be the result of selecting the Navigation.
    var nav = $(".js--main-nav");
    // var icon= $('.js--nav-icon ion-icon')
    var icon = $(".js--nav-icon i");
    // there is a very simple j query method which is called slide toggle, and all this does is to open and close a box.
    // in this method, we also have to say how many time the animation should take, and we will say 0.2 second
    // which is 200 milisecond.
    nav.slideToggle(200);
    if (icon.hasClass("ion-navicon-round")) {
      icon.addClass("ion-close-round");
      icon.removeClass("ion-navicon-round");
    } else {
      icon.addClass("ion-navicon-round");
      icon.removeClass("ion-close-round");
    }
  });
});

// now before we test this code, we need to incorporate this javascript file in the index html file.
