// Page Loader : hide loader when all are loaded
$(window).load(function () {
  "use strict";
  $("#page-loader").addClass("hidden");
});

/* 3. Init all plugin on document load */
$(document).ready(function () {
  "use strict";

  /*-- modal popup ---*/
  var modalContent = [

    `<div>

      <h4>Software development best practices</h4><br/>

      1. Simplicity<br />

      Any software should be created in the most efficient way without

      unnecessary complexity. Simplicity coincides with minor coding

      principles such as Don’t Repeat Yourself (DRY) or You Aren’t

      Gonna Need It.<br /><br />

      2. Coherence<br />

      Consistency helps a lot because colleagues will be able to test,

      edit or continue the work of each other. Vice versa,

      inharmonious projects can confuse your team and slow down the

      development process.<br /><br />

      3. Testing<br />

      Testing is essential for any product and on any stage. From the

      very first test run to the final evaluations, you should always

      test the product.<br /><br />

      4. Maintenance<br />

      Unlike physical entities, the software has the potential to be

      immortal. Nevertheless, this would only be possible with good

      maintenance including regular updates, more tests and analysis.

      You’ve probably seen a warning before about an application that

      isn’t compatible you’re your device. Elaborate maintenance can

      get rid of these alerts and keep apps compatible with any

      hardware.<br /><br />

      5. Analysis<br />

      Apart from the pre-launch evaluation conducted by QA engineers

      and dedicated software developers, let me suggest you focus on

      performance analysis post-launch with a continuous profiling

      tool like Java Flight Recorder. Even the most elaborate code

      that results in a seemingly perfect match with your client isn’t

      guaranteed to work properly. There are a number of factors that

      can affect these results. Ideally, you’d like to have an

      analytics department to evaluate your numbers, but outsourced

      specialists always will work.<br /><br />

    </div>`,

    `<div>

      <h4>Software Architecture patterns</h4><br/>

      1. Microkernel pattern<br />

      The microkernel architectural pattern is also referred to as a plug-in architectural pattern. It is typically used when software teams create systems with interchangeable components.

      It applies to software systems that must be able to adapt to changing system requirements. It separates a minimal functional core from extended functionality and customer-specific parts. Itl also serves as a socket for plugging in these extensions and coordinating their collaboration.

      The microkernel architecture pattern is a natural pattern for implementing product-based applications. And a product-based application is one that is packaged and made available for download in versions as a typical third-party product. However, many companies also develop and release their internal business applications like software products, complete with versions, release notes, and pluggable features.

      The microkernel architecture pattern allows you to add additional application features as plug-ins to the core application, providing extensibility as well as feature separation and isolation.

      The microkernel architecture pattern consists of two types of architecture components: a core system and plug-in modules. Application logic is divided between independent plug-in modules and the basic core system, providing extensibility, flexibility, and isolation of application features and custom processing logic. And the core system of the microkernel architecture pattern traditionally contains only the minimal functionality required to make the system operational.

      <br /><br />

      2. Microservices pattern<br />

      When you write your application as a set of microservices, you’re actually writing multiple applications that will work together. Each microservice has its own distinct responsibility and teams can develop them independently of other microservices. The only dependency between them is the communication. As microservices communicate with each other, you will have to make sure messages sent between them remain backwards-compatible.

      <br /><br />

      3. Layered architecture pattern<br />

      The most common architecture pattern is the layered architecture pattern. Layered architecture patterns are n-tiered patterns where the components are organized in horizontal layers. This is the traditional method for designing most software and is meant to be self-independent. This means that all the components are interconnected but do not depend on each other. Each layer of the layered architecture pattern has a specific role and responsibility within the application. For example, a presentation layer would be responsible for handling all user interface and browser communication logic, whereas a business layer would be responsible for executing specific business rules associated with the request.

      One of the powerful features of the layered architecture pattern is the separation of concerns among components. Components within a specific layer deal only with logic that pertains to that layer.

      <br /><br />

      4. Event-based pattern<br />

      This is the most common distributed asynchronous architecture used to develop highly scalable system. The architecture consists of single-purpose event processing components that listen on events and process them asynchronously. The event-driven architecture builds a central unit that accepts all data and then delegates it to the separate modules that handle the particular type.

      <br /><br />

      4. Space-based pattern<br />

      The space-based architecture pattern is specifically designed to address and solve scalability and concurrency issues. It is also a useful architecture pattern for applications that have variable and unpredictable concurrent user volumes.  High scalability is achieved by removing the central database constraint and using replicated in-memory data grids instead.

      The space-based architecture is designed to avoid functional collapse under high load by splitting up both the processing and the storage between multiple servers. 

      <br /><br />

    </div>`,

  ];

  $(".popup").click(function () {

    var mainpop = $(this).attr("class");

    const dataModal = parseInt($(this).attr("data-modal"));

    console.log(modalContent[dataModal]);

    $("#modal-detail").html(modalContent[dataModal]);

    console.log(modalContent[dataModal]);

    $("#modal-container").removeAttr("class").addClass(mainpop);

    $("body").addClass("modal-active");

  });

  $("#modal-container").click(function () {
    $(this).addClass("out");
    $("body").removeClass("modal-active");
  });

  $(".service-box").hover(function () {
    $(this).children("i").toggleClass("heartbeat");
  });

  /* Slide Background variables */
  var isSlide = false;
  var slideElem = $(".slide");
  var arrowElem = $(".p-footer .arrow-d");
  var pageElem = $(".page");

  // auto typer typed
  if ($.isFunction($.fn.typed)) {
    $(".jan-meta > h3 span").typed({
      strings: [
        "Full Stack Developer",
        "Web Developer",
        "Mobile Developer",
        "Database Engineer",
      ],
      loop: true,
      startDelay: 1e3,
      backDelay: 3e3,
      typeSpeed: 30,
    });
  }

  //------ scrollbar plugin
  if ($.isFunction($.fn.perfectScrollbar)) {
    $(".our-work, .detail-meta").perfectScrollbar();
  }

  // --- youtube video background
  if ($.isFunction($.fn.YTPlayer)) {
    jQuery("#bg-youtube").YTPlayer();
  }

  /** Init fullpage.js */
  $("#mainpage").fullpage({
    menu: "#qmenu",
    anchors: [
      "home",
      "about-me",
      "skills",
      "services",
      "portfolio",
      "blog",
      "contact",
    ],
    verticalCentered: true,
    resize: false,
    responsive: 900,
    scrollOverflow: true,
    css3: false,
    navigation: true,
    onLeave: function (index, nextIndex, direction) {
      arrowElem.addClass("gone");
      pageElem.addClass("transition");
      $(".active").removeClass("transition");
      slideElem.removeClass("transition");
      isSlide = false;
    },
    afterLoad: function (anchorLink, index) {
      arrowElem.removeClass("gone");
      pageElem.removeClass("transition");
      if (isSlide) {
        slideElem.removeClass("transition");
      }
    },

    afterRender: function () {},
  });

  //===== Ajax Contact Form =====//
  $("#contactform").on("submit", function () {
    var action = $(this).attr("action");

    var msg = $("#message");
    $(msg).hide();
    var data =
      "name=" +
      $("#name").val() +
      "&email=" +
      $("#email").val() +
      "&phone=" +
      $("#phone").val() +
      "&comments=" +
      $("#comments").val() +
      "&verify=" +
      $("#verify").val() +
      "&captcha=" +
      $(".g-recaptcha-response").val();

    $.ajax({
      type: "POST",
      url: action,
      data: data,
      beforeSend: function () {
        $("#submit").attr("disabled", true);
        $("img.loader").fadeIn("slow");
      },
      success: function (data) {
        $("#submit").attr("disabled", false);
        $("img.loader").fadeOut("slow");
        $(msg).empty();
        $(msg).html(data);
        $("#message").slideDown("slow");
        if (data.indexOf("success") > 0) {
          $("#contactform").slideUp("slow");
        }
      },
    });
    return false;
  });
}); //document .ready end here
