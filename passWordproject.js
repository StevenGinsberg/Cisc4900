//document.body.style.backgroundColor = "red";
 
function myFunction(){
 newvalues1();
  move_hero();
   show_image();
}
var questions = document.querySelectorAll(".questions");
var numQuestions = 6;
var passWords1 =  ["Ch46olate is yummy!","1@342","Joey1","Physics","Y4NK33S"];
var pickedPasswords;

var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

var colorDisplay=document.getElementById("colorDisplay");
var colorDisplay = document.querySelector("#colorDisplay");
colorDisplay.textContent=pickedPasswords;

//alert(colorDisplay);

 //colorDisplay = document.querySelector("#colorDisplay");
 var looper;
var degrees = 0;
function rotateAnimation(el,speed){
  var elem = document.getElementById(el);
  if(navigator.userAgent.match("Chrome")){
    elem.style.WebkitTransform = "rotate("+degrees+"deg)";
  } else if(navigator.userAgent.match("Firefox")){
  elem.style.MozTransform = "rotate("+degrees+"deg)";
  } else if(navigator.userAgent.match("MSIE")){
    elem.style.msTransform = "rotate("+degrees+"deg)";
  } else if(navigator.userAgent.match("Opera")){
    e//lem.style.OTransform = "rotate("+degrees+"deg)";
 } else {
    elem.style.transform = "rotate("+degrees+"deg)";
  }
  looper = setTimeout('rotateAnimation(\''+el+'\','+speed+')',speed);
 degrees++;
 if(degrees > 359){
   degrees = 1;
}
  document.getElementById("status").innerHTML = "rotate("+degrees+"deg)";
}
   
 
function selectText() {
  const input = document.getElementById('password-box');
  var y=input.focus();
  var x = document.getElementById("questions");
 
 
  for(var i=0;i<passWords1.length;i++){
    questions[i].style.display = "block";
    questions[i].style.background = passWords1[i];  
    questions[i].textContent;

 
     
    }
 
 for(var i = 0; i < passWords1.length; i++){
    const input = document.getElementById('password-box');
        //add click listeners to passwords
        questions[i].textContent=passWords1[i];

        pickedPasswords= passWords1[i];
        questions[i].addEventListener("click", function(){
            //grab color of clicked password
            var clickedpassWord = this.style.background;
          //  var keycode=13;
            var text=$(this).text();
              colorDisplay.textContent=text;
             $(input).val(text);
         
       
           y= questions[i];
            // x.innerHTML=y;
            //compare color to pickedpasswords
            if(clickedpassWord  === pickedPasswords){
                messageDisplay.textContent = "Correct!";
              //  changeColors(clickedpassWord);
                h1.style.background =pickedPasswords;
                resetButton.textContent = "Play Again?";
            } else {
                this.style.background = "#232323";
                messageDisplay.textContent = "Your password";

            }

        }); 
      }
    }

;
    
  
     
   function newvalues(){
     //refreshPage();
      passWords1[1]=("I like ice cream");
      passWords1[2]=("1@342");
      passWords1[3]=("Joey1");
      passWords1[4]=("Physics");
      passWords1[5]=("Y4NK33S");
       
      // for (var i=1;i<=4,i++){
     // var i=prompt("which one these passwords do you think  is the easiest to break "+ passWords1[i]+" or "+ passWords1[i+1]+" ?");
        
 
      for(var i = 0; i < passWords1.length; i++){

    const input = document.getElementById('password-box');
        //add click listeners to paswords
        questions[i].textContent=passWords1[i];

        pickedPasswords= passWords1[i];
        questions[i].addEventListener("click", function(){
            //grab color of clicked password
            var clickedpassWord = this.style.background;
          //  var keycode=13;
               var text=$(this).text();
              colorDisplay.textContent=text;
             $(input).val(text);
             var myButton=document.getElementById("click");
           $("input").on(selectText());
              
           
       
           y= questions[i];
            // x.innerHTML=y;
            //compare password to pickedPassword
            if(clickedpassWord === pickedPasswords){
                messageDisplay.textContent = "Correct!";
                changeColors(clickedpassWord);
                h1.style.background = pickedPasswords;
                resetButton.textContent = "Play Again?";
            } else {
                this.style.background = "#232323";
                messageDisplay.textContent = "Your password";

            }

        }); 
      }
    
       }
        function newvalues1(){
     //refreshPage();
      passWords1[1]=("H4ppy B1rthday");
      passWords1[2]=("The longer the password the better but hard to remember!");
      passWords1[3]=("Br00kly4");
      passWords1[4]=("My pet dog spot");
      passWords1[5]=("2@ckly!");
    
      for(var i = 0; i < passWords1.length; i++){
    const input = document.getElementById('password-box');
        //add click listeners to passwords

        questions[i].textContent=passWords1[i];

        pickedPasswords= passWords1[i];
        questions[i].addEventListener("click", function(){
            //grab password that is clicked 
            var clickedpassWord = this.style.background;
          //  var keycode=13;
            var text=$(this).text();
              colorDisplay.textContent=text;
             $(input).val(text);
             var myButton=document.getElementById("click");
           $("input").on(selectText());
              
             
       
           y= questions[i];
            // x.innerHTML=y;
            //compare password to pickedpassword
            if(clickedpassWord === pickedPasswords){
                messageDisplay.textContent = "Correct!";
                changeColors(clickedpassWord);
                h1.style.background = pickedPasswords;
                resetButton.textContent = "Play Again?";
            } else {
                this.style.background = "#232323";
                messageDisplay.textContent = "Your password";

            }

        }); 
      }
    
       }
function refreshPage(){
     
   
      //for(var int i=0,i<color.length)
    
         location.reload();
  }

function reset(){
   
    //pick a new passwords from array
    pickedPasswords = pickedColor();
    //change color display to match picked password
    colorDisplay.textContent = pickedPasswords.textContent;
    resetButton.textContent = "NewPasswords";
    messageDisplay.textContent = "";
    //Change passwords on the page//
    for(var i = 0; i < questions.length; i++){
        if(passWords1[i]){
            questions[i].style.display = "block";
            questions[i].textContent = passWords1[i];
        } else {
            questions[i].textContent = "none";
        }   
    }
    h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click",function(){
    reset();
})




 







 


hsimp({
    options: {
        calculationsPerSecond: 1e10, // 10 billion,
        good: 31557600e3, // 1,000 years
        ok: 31557600 // 1 year
    },
    outputTime: function (time, input) {
        console.log(time, input);
    },
    outputChecks: function (checks, input) {
        console.log(checks, input);
    }
}, document.getElementById("password"));

var renderTime = function (time, input) {
    document.getElementById("password-strength").innerHTML = time;
}

hsimp({ outputTime: renderTime }, document.getElementById("password"));


(function() { "use strict";

  /* Each sprite sheet tile is 16x16 pixels in dimension. */
  const SPRITE_SIZE = 16;

  /* The Animation class manages frames within an animation frame set. The frame
  set is an array of values that correspond to the location of sprite images in
  the sprite sheet. For example, a frame value of 0 would correspond to the first
  sprite image / tile in the sprite sheet. By arranging these values in a frame set
  array, you can create a sequence of frames that make an animation when played in
  quick succession. */
  var Animation = function(frame_set, delay) {

    this.count = 0;// Counts the number of game cycles since the last frame change.
    this.delay = delay;// The number of game cycles to wait until the next frame change.
    this.frame = 0;// The value in the sprite sheet of the sprite image / tile to display.
    this.frame_index = 0;// The frame's index in the current animation frame set.
    this.frame_set = frame_set;// The current animation frame set that holds sprite tile values.

  };

  Animation.prototype = {

    /* This changes the current animation frame set. For example, if the current
    set is [0, 1], and the new set is [2, 3], it changes the set to [2, 3]. It also
    sets the delay. */
    change:function(frame_set, delay = 15) {

      if (this.frame_set != frame_set) {// If the frame set is different:

        this.count = 0;// Reset the count.
        this.delay = delay;// Set the delay.
        this.frame_index = 0;// Start at the first frame in the new frame set.
        this.frame_set = frame_set;// Set the new frame set.
        this.frame = this.frame_set[this.frame_index];// Set the new frame value.

      }

    },

    /* Call this on each game cycle. */
    update:function() {

      this.count ++;// Keep track of how many cycles have passed since the last frame change.

      if (this.count >= this.delay) {// If enough cycles have passed, we change the frame.

        this.count = 0;// Reset the count.
        /* If the frame index is on the last value in the frame set, reset to 0.
        If the frame index is not on the last value, just add 1 to it. */
        this.frame_index = (this.frame_index == this.frame_set.length - 1) ? 0 : this.frame_index + 1;
        this.frame = this.frame_set[this.frame_index];// Change the current frame value.

      }

    }

  };

  var buffer, controller, display, loop, player, render, resize, sprite_sheet;

  buffer = document.createElement("canvas").getContext("2d");
  display = document.querySelector("canvas").getContext("2d");

  /* I made some changes to the controller object. */
  controller = {

    /* Now each key object knows its physical state as well as its active state.
    When a key is active it is used in the game logic, but its physical state is
    always recorded and never altered for reference. */
    left:  { active:false, state:false },
    right: { active:false, state:false },
    up:    { active:false, state:false },

    keyUpDown:function(event) {

      /* Get the physical state of the key being pressed. true = down false = up*/
      var key_state = (event.type == "keydown") ? true : false;

      switch(event.keyCode) {

       case 37:// left key

          /* If the virtual state of the key is not equal to the physical state
          of the key, we know something has changed, and we must update the active
          state of the key. By doing this it prevents repeat firing of keydown events
          from altering the active state of the key. Basically, when you are jumping,
          holding the jump key down isn't going to work. You'll have to hit it every
          time, but only if you set the active key state to false when you jump. */
          //if (controller.left.state != key_state) controller.left.active = key_state;
          //controller.left.state  = key_state;// Always update the physical state.

        break;
        case 38:// up key
        controller.up.state  = key_state;        ;
       case 39:// right key

         if (controller.right.state != key_state) controller.right.active = key_state;
          con// troller.right.state  = key_state;

        break;

      }

      //console.log("left:  " + controller.left.state + ", " + controller.left.active + "\nright: " + controller.right.state + ", " + controller.right.active + "\nup:    " + controller.up.state + ", " + controller.up.active);

    }

  };

  /* The player object is just a rectangle with an animation object. */
  player = {

    animation:new Animation(),// You don't need to setup Animation right away.
    jumping:true,
    height:16,    width:16,
    x:0,          y:40 - 18,
    x_velocity:0, y_velocity:0

  };

  /* The sprite sheet object holds the sprite sheet graphic and some animation frame
  sets. An animation frame set is just an array of frame values that correspond to
  each sprite image in the sprite sheet, just like a tile sheet and a tile map. */
  sprite_sheet = {

    frame_sets:[[0, 1], [2, 3], [4, 5]],// standing still, walk right, walk left
    image:new Image()

  };

  loop = function(time_stamp) {

    if (controller.up.active && !player.jumping) {

      controller.up.active = false;
      player.jumping = true;
      player.y_velocity -= 2.5;

    }

    if (controller.left.active) {

      /* To change the animation, all you have to do is call animation.change. */
      player.animation.change(sprite_sheet.frame_sets[2], 15);
      player.x_velocity -= 0.05;

    }

    if (controller.right.active) {

      player.animation.change(sprite_sheet.frame_sets[1], 15);
      player.x_velocity += 0.05;

    }

    /* If you're just standing still, change the animation to standing still. */
    if (!controller.left.active && !controller.right.active) {

      player.animation.change(sprite_sheet.frame_sets[0], 20);

    }

    player.y_velocity += 0.25;

    player.x += player.x_velocity;
    player.y += player.y_velocity;
    player.x_velocity *= 0.9;
    player.y_velocity *= 0.9;

    if (player.y + player.height > buffer.canvas.height - 2) {

      player.jumping = false;
      player.y = buffer.canvas.height - 2 - player.height;
      player.y_velocity = 0;

    }

    if (player.x + player.width < 0) {

      player.x = buffer.canvas.width;

    } else if (player.x > buffer.canvas.width) {

      player.x = - player.width;

    }

    player.animation.update();

    render();

    window.requestAnimationFrame(loop);

  };

  //render = function() {

    ///* Draw the background. */
   // buffer.fillStyle = "#7ec0ff";
   // buffer.fillRect(0, 0, buffer.canvas.width, buffer.canvas.height);
   // buffer.strokeStyle = "#8ed0ff";
   // buffer.lineWidth = 10;
   // buffer.beginPath();
   // buffer.moveTo(0, 0);
   // buffer.bezierCurveTo(40, 20, 40, 0, 80, 0);
    //buffer.moveTo(0, 0);
   // buffer.bezierCurveTo(40, 20, 40, 20, 80, 0);
   // buffer.stroke();
    //buffer.fillStyle = "#009900";
   // buffer.fillRect(0, 36, buffer.canvas.width, 4);

    /* When you draw your sprite, just use the animation frame value to determine
    where to cut your image from the sprite sheet. It's the same technique used
    for cutting tiles out of a tile sheet. Here I have a very easy implementation
    set up because my sprite sheet is only a single row. */

    /* 02/07/2018 I added Math.floor to the player's x and y positions to eliminate
    antialiasing issues. Take out the Math.floor to see what I mean. */
    //buffer.drawImage(sprite_sheet.image, player.animation.frame * SPRITE_SIZE, 0, SPRITE_SIZE, SPRITE_SIZE, Math.floor(player.x), Math.floor(player.y), SPRITE_SIZE, SPRITE_SIZE);

  //  display.drawImage(buffer.canvas, 0, 0, buffer.canvas.width, buffer.canvas.height, 0, 0, display.canvas.width, display.canvas.height);

  //};

  resize = function() {

    display.canvas.width = document.documentElement.clientWidth - 32;

    if (display.canvas.width > document.documentElement.clientHeight) {

      display.canvas.width = document.documentElement.clientHeight;

    }

    display.canvas.height = display.canvas.width * 0.5;

    display.imageSmoothingEnabled = false;

  };

      ////////////////////
    //// INITIALIZE ////
  ////////////////////

  buffer.canvas.width = 80;
  buffer.canvas.height = 40;

  window.addEventListener("resize", resize);

  window.addEventListener("keydown", controller.keyUpDown);
  window.addEventListener("keyup", controller.keyUpDown);

  resize();

  sprite_sheet.image.addEventListener("load", function(event) {// When the load event fires, do this:

    window.requestAnimationFrame(loop);// Start the game loop.

  });

  sprite_sheet.image.src = "animation.png";// Start loading the image.

})();
//function show_image(src, width,height,height,alt) {
 // var img = document.createElement("img");
  //img.src = 'knight walking/JS_Animation/hero_walking_';
 // img.width = width;
 // img.height = height;
  //img.alt = alt;

  // This next line will just add it to the <body> tag
  //document.body.appendChild(img); 
//}