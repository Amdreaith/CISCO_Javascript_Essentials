JavaScript is a typical **interpreted language**.When run in a eb browser, the browser's built-in JavaScript engine acts as the interpreter.

**Node.js:** is a independent JavaScript interpreter and environment that runs on the operating system (macOS, Windows, Linux). Allows JavaScript to be used for server-side programming and other applications outside of browsers.

JavaScript engine use the _Just In Time Compilation_ technique (_JIT Compilation_).This technique compiles code fragments _during_ program execution to improve performance.From the user's perspective, it still appears as if the code is being interpreted instruction by instruction.


Programming Concepts :
1. Problem Definition
2. Solution
3. Unambiguity


code :
`console.log("Hello, World!");`

- Log is a function that performs the action of logging.
- Console is the object to which the "log" functions belongs.
- Method is when a function, belongs to an object.
- Arguments / Parameters are the pieces of data that need to perform their operation. (Hello World is the argument). Argument are displayed with quotation marks ("" or  ' ').
- -**Calling a Function/Method**: You execute a function or method by writing its name followed by parentheses `()`. Arguments go inside these parentheses.
    - If a function doesn't need arguments, the parentheses are left empty (e.g., `someFunction()`).
- **Semicolon (`;`)**: The semicolon at the end of `console.log("Hello, World!");` indicates the **end of a command or statement**. While sometimes optional in JavaScript, it's a **good habit** to always include it to prevent potential errors.


##### Running JavaScript Code
1. Online Development Environment
		These platforms provide a web-based editor and a console (terminal) to quickly run and see the output of your JavaScript code.
2. Local development environment (Browser-based)
		 Client-side JavaScript is a language of the web and exists only in the web ecosystem. In this setup, JavaScript cannot exist by itself. JavaScript code needs to be embedded in an HTML document. "<script>" tag used to attach JavaScript code to an HTML document. 
	- 2 ways to use it : 
		- <script> </script> which is direct 
		-  linking an external js method.<script src="main.js"></script> . 
	- Attributes for external scripts:
		- a. "defer" --- Script executes _after_ the entire page (HTML) has loaded.  
		- b. "async" --- Script executes immediately and in parallel with parsing the rest of the page.

3. How can we run our JavaScript code?

![[Pasted image 20250522003423.png]]
3. 
