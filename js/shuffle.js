(function($) {

  $.fn.shuffleLetters = function(prop) {

    var options = $.extend({
      "step": 20, // How many times should the letters be changed
      "fps": 20, // Frames Per Second
      "text": "", // Use this text instead of the contents
      "callback": function() {} // Run once the animation is complete
    }, prop)

    return this.each(function() {
      var el = $(this),
        str = "";

      // Preventing parallel animations using a flag;
      if (el.data('animated')) {
        return true;
      }
      el.data('animated', true);

      if (options.text) {
        str = options.text.split('');
      } else {
        str = el.text().split('');
      }

      // The types array holds the type for each character;
      // Letters holds the positions of non-space characters;

      var types = [],
        letters = [];

      // Looping through all the chars of the string

      for (var i = 0; i < str.length; i++) {

        var ch = str[i];

        if (ch == " ") {
          types[i] = "space";
          continue;
        } else if (/[a-z]/.test(ch)) {
          types[i] = "lowerLetter";
        }

        letters.push(i);
      }

      el.html("");

      // Self executing named function expression:

      (function shuffle(start) {

        // This code is run options.fps times per second
        // and updates the contents of the page element

        var i,
          len = letters.length,
          strCopy = str.slice(0); // Fresh copy of the string

        if (start > len) {

          // The animation is complete. Updating the
          // flag and triggering the callback;

          el.data('animated', false);
          options.callback(el);
          return;
        }

        // All the work gets done here
        for (i = Math.max(start, 0); i < len; i++) {

          // The start argument and options.step limit
          // the characters we will be working on at once

          if (i < start + options.step) {
            // Generate a random character at thsi position
            strCopy[letters[i]] = randomChar(types[letters[i]]);
          } else {
            strCopy[letters[i]] = "";
          }
        }

        el.text(strCopy.join(""));

        setTimeout(function() {

          shuffle(start + 1);

        }, 1000 / options.fps);

      })(-options.step);


    });
  };

  function randomChar(type) {
    var pool = "";

    if (type == "lowerLetter") {
      pool = "abcdefghijklmnopqrstuvwxyz0123456789";
    }

    var arr = pool.split('');
    return arr[Math.floor(Math.random() * arr.length)];
  }

})(jQuery);


$(function() {
  var message = $(".blurb"),
    userText = $('.blurb');

  // Shuffle the contents of container
  message.shuffleLetters();

  // Bind events
  userText.click(function() {
    userText.val("");
  }).bind('keypress', function(e) {
    if (e.keyCode == 13) {
      // The return key was pressed
      message.shuffleLetters({
        "text": userText.val()
      });
      userText.val("");
    }
  });

  // Leave a 4 second pause



  var message = $(".blurb");

  message.shuffleLetters();

  function shuffle(text) {
    // console.log(text);
    // Shuffle the container with custom text
    message.shuffleLetters({
      text: text
    });
  }

  var arr = ['WASD to move','Click to Begin','Spacebar to Shoot'];
  var i = 0;
  var interval = setInterval(function() {
    shuffle(arr[i++ % arr.length]);
  }, 5000);
});
