/**
 * Directive: Inbox <inbox></inbox>
 */
angular.module('EmailApp')
  .directive('inbox', function InboxDrctv () {
    'use strict';

    return {
      restrict: 'EA',
      replace: true,
      scope: true,
      templateUrl: "js/directives/inbox.tmpl.html",
      controllerAs: 'inbox',

      controller: function (InboxFactory) {
        this.messages = [];

        this.goToMessage = function (id) {
          InboxFactory.goToMessage(id);
        };

         this.zoomImage = function(source){
 //console.log(  $('#open-popup'));

$('.without-caption').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
    
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });  
         }


                 this.callMe = function(source){
 //console.log(  $('#open-popup'));

$('.without-caption').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
    
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });  
         }
                 this.callbaby = function(name,source){
                //  setInterval(function () { console.log("before");}, 1000);
              console.log(source);
              var content = '<strong><p>'+name+'</p></strong><p>'+source +'</p>';
              $('#inline1').empty();
 $('#inline1').append(content);
 $('a').fancybox({
  padding: 0,
  helpers: {
    overlay: {
      locked: false
    }
  }
});
            $('.fancybox').fancybox();

         }

        this.deleteMessage = function (id, index) {
          InboxFactory.deleteMessage(id, index);
        };
        
        InboxFactory.getMessages()
          .then( angular.bind( this, function then() {
              this.messages = InboxFactory.messages;
            }) );

      },

      link: function (scope, element, attrs, ctrl) {
        /* 
          by convention we do not $ prefix arguments to the link function
          this is to be explicit that they have a fixed order
        */
      }
    }
  });