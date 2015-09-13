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

        var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;  
}

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
              var content = '<strong><p style="text-transform: capitalize;">'+name+'</p></strong>';

             
              var indices = [];indices.push(0);
              for(var i=0; i<source.length;i++) {
                  if (source[i] === ".") indices.push(i);
              }
              console.log(indices.length);
             
              if(indices.length > 3)
              {
                for(var i=2;i<indices.length;i=i+2)
                {     if(i==2)
                  {
                       content +='<p>'+ source.substring(indices[i-2], indices[i]+1) +'</p><br/>';                
                  }
                  else{
                     content +='<p>'+ source.substring(indices[i-2]+1, indices[i]+1) +'</p>'; 
                  } 
                }               
              //  content +='<p>'+ source.substring(0, indices[2]+1) +'</p>'; 
               // content +='<p>'+ source.substring( indices[2]+1,source.length) +'</p>'; 
              }
              else{
               content+='<p>'+source +'</p>'; 
              }

              $('#inline1').empty();
 $('#inline1').append(content);
 preventDefault();

          $('.fancybox').fancybox();;
       

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
  }).
  filter('capitalize', function() {
    return function(input, all) {
      return (!!input) ? input.replace(/([^\W_]+[^\s-]*) */g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}) : '';
    }
  });;