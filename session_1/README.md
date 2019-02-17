# Weekend Workshop (27.01.2019)

## What did you learn?

* "Drawing" shapes on the HTML canvas
* Using the p5.js documentation
* Calling functions
* Defining variables (local and global scope)
* Using conditions (if)
* Binary logic (less than, greater than, and, or)
* Defining functions
* Reacting to keyboard button presses

## Transcript

* *Functions* can accept *parameters* and can return a *value*
  For example a function like "add(a, b)" accepts two values a and b and should
  return the sum of those.
* A *framework* is a collection of *functions* (this part is also called a *library*)
  In the case of p5.js it is also *around* your code and calls the "setup()"
  function once at the start and the "draw()" function every frame.
* Use the p5.js *reference* to see what functions you can use.
  Many functions can be called in multiple ways for convenience (like
  "color()")
* The order of drawing is important. Later shapes are drawn on top of earlier
  ones.
* *Canvas* coordinates start from the top left
* Shapes are also drawn from the top left
* As a rule of thumb the order of *parameters* is always x then y or width then
  height
* Draw to paddles with the "rect()" function and one ball with the "ellipse()"
  function
* *Variables* defined *in functions* are only known in those functions (*local*
  variables)
* *Variables* defined *outside of functions* are known in all functions (*global*
  variables)
* This is called *scope*

## Asked Questions

> Will the game be playable?

Yes, everything will be playable. This is important, so you can see the changes
immediately if you change the code.

> Will I be able to draw myself?

Yes, and no. The canvas is manipulated with functions. You will write those
yourself. It is possible to draw sprites and use those, but that is more
advanced.

> How did you get to the view you can draw on?

I am just using another web application to easily draw stuff. This is like a
whiteboard in school. It has nothing to do with the code itself.

> Shouldn't you try to avoid global variables?

Yes, global variables are generally bad pratice. But for these small programms
it is easier to understand. This will change if we follow principles like
functional programming and object oriented programming.

> How do make the vertical line symbol?

They are called a pipe and depending on your keyboard and operating system may
be tricky to type. On a (german) Mac it is Alt + 7

## Common Problems

> The editor outputs a "Uncaught SyntaxError: Unexpected token } ..."
> OR: The editor outputs a "Uncaught SyntaxError: Unexpected end of input..."

Try to use the "Edit" -> "Tidy Code" Button, it will try to make your code
formatting consistent. Then try to look for pairs of opening and closing squirly
brackets { }
The error message means you have forgotten one or added one too many.

## References

* VOD: https://www.twitch.tv/videos/370741424 (May change to YouTube)
* Editor used: https://editor.p5js.org/
* P5.js documentation: https://p5js.org/reference/
