import React from "react";
import Link from "next/link";
import Image from "next/image";
import Post from "./Post";
const Four = () => {
  const blogPosts = [
    {
      title: "JavaScript",
      body: "Certainly! JavaScript is a versatile and powerful programming language that is widely used for web development. Below is a beginner's guide to learning JavaScript: 1. Introduction to JavaScript What is JavaScript: Understand the role of JavaScript in web development. It's a scripting language that enables dynamic content on websites. 2. Basic Syntax: Variables: Learn how to declare variables using var, let, and const. Data Types: Understand primitive data types like strings, numbers, booleans, and more. Operators: Explore arithmetic, comparison, and logical operators. 3. Control Flow: Conditional Statements: Use if, else if, and else for decision-making. Loops: Understand for loops, while loops, and do-while loops for repetitive tasks. 4. Functions: Declaring Functions: Learn how to define and call functions. Parameters and Arguments: Understand how to pass parameters to functions. Return Statements: Learn about the return keyword. 5. Arrays: Understand arrays and their methods for storing and manipulating lists of data. 6. Objects: Explore objects and their properties. Objects are used to store key-value pairs. 7. DOM Manipulation: Learn about the Document Object Model (DOM) and how to manipulate HTML elements using JavaScript. Explore methods like getElementById, querySelector, and innerHTML. 8. Events: Understand how to handle events like clicks, keypresses, and form submissions. Use event listeners to respond to user interactions. 9. Asynchronous JavaScript: Callbacks: Understand the concept of callbacks for handling asynchronous operations. Promises: Learn about promises for more structured asynchronous code. Async/Await: Explore the modern async/await syntax for handling asynchronous tasks. 10. AJAX and Fetch API: Learn how to make asynchronous requests to a server using the Fetch API. 11. ES6+ Features Familiarize yourself with modern JavaScript features introduced in ECMAScript 2015 (ES6) and later, such as arrow functions, template literals, destructuring, and spread/rest operators. 12. Error Handling: Learn about try-catch blocks for handling errors in your code. 13. Local Storage and Session Storage: Understand how to use local storage and session storage for client-side data persistence. 14. Frameworks and Libraries: Explore popular JavaScript libraries and frameworks such as jQuery, React, Angular, or Vue.js.15. Testing: Learn about testing frameworks like Jest for writing and running tests on your JavaScript code. 16. Debugging: Familiarize yourself with browser developer tools for debugging your JavaScript code 17. Best Practices: Understand JavaScript best practices, including code organization, naming conventions, and optimization techniques. Additional Resources: MDN Web Docs: The Mozilla Developer Network provides comprehensive documentation for JavaScript. (https://developer.mozilla.org/en-US/docs/Web/JavaScript) ",

      imgUrl: "/logo-javascript.svg",
    },
  ];
  return (
    <div id="javascript">
      {blogPosts.map((post, index) => (
        <Post key={index} index={index} post={post} />
      ))}

      <nav>
        <div className="blog-footer">
          <Link href={"#webdev"}>
            previous
            <Image
              src="/arrow-back-circle-outline.svg"
              alt="Coast Republic"
              width={40}
              height={40}
            />
          </Link>
          <Link href={"#html"}>
            {" "}
            next
            <Image
              src="/arrow-forward-circle-outline.svg"
              alt="Coast Republic"
              width={40}
              height={40}
            />
          </Link>
        </div>
      </nav>
      <div className="blog-footer">
        <span className="blog-footer-text">By: Jeffery Agyepong</span>
        <span className="blog-footer-text">February 03, 2024</span>
      </div>
      <div>
        <h5>share on social media</h5>
        <Link
          href="https://twitter.com/jeffagyepong"
          target="_blank"
          className="footer-link-item"
        >
          <Image src={"/logo-twitter.svg"} width={20} height={20} alt="icon" />{" "}
        </Link>{" "}
        <Link
          href="https://github.com/Jefferyagyepong"
          target="_blank"
          className="footer-link-item"
        >
          <Image src={"/logo-github.svg"} width={20} height={20} alt="icon" />{" "}
        </Link>{" "}
        <Link
          href="https://www.linkedin.com/in/jeffery-agyepong-943ba0234"
          target="_blank"
          className="footer-link-item"
        >
          <Image src={"/logo-linkedin.svg"} width={20} height={20} alt="icon" />{" "}
        </Link>{" "}
        <Link
          href="https://www.instagram.com/jefferyagyepong_/"
          target="_blank"
          className="footer-link-item"
        >
          <Image
            src={"/logo-instagram.svg"}
            width={20}
            height={20}
            alt="icon"
          />{" "}
        </Link>
        <Link
          href="https://www.open.whatsapp.com/0244736420/"
          target="_blank"
          className="footer-link-item"
        >
          <Image src={"/logo-whatsapp.svg"} width={20} height={20} alt="icon" />
        </Link>
      </div>
    </div>
  );
};
export default Four;
