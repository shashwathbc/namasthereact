<!-- 
EPISODE 1 ASSIGNMENT : 


1) WHAT IS AN EMMET ?

Emmet allowed us to quickly generate a structured HTML document with various nested elements and content placeholders using concise abbreviations.

Emmet is incredibly powerful and flexible, making it a valuable tool for front-end web development and saving a lot of time when creating HTML and CSS code.


^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

2) DIFF BTW FRAMEWORK AND LIBRARY ?

Control Flow: Libraries provide functions or modules to perform specific tasks, allowing developers to retain control over the overall application flow, while frameworks dictate the application's structure and control flow.

Inversion of Control: In libraries, developers call specific functions when needed, while in frameworks, the control is inverted, and the framework calls developer-defined functions following a predefined structure.

Flexibility: Libraries are generally more flexible, allowing developers to pick and choose specific components to use, whereas frameworks offer a more rigid structure that must be followed.

Size and Scope: Libraries are typically smaller in scope and size, targeting specific tasks, while frameworks encompass a broader set of functionalities and provide a comprehensive structure.

Example: jQuery is a library for DOM manipulation, allowing developers to add interactive features to websites; in contrast, Angular is a framework for building dynamic web applications, providing a structured architecture and features like two-way data binding.


^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


3) WHAT IS CDN ? AND WHY DO WE USE IT ?

A Content Delivery Network (CDN) is a network of geographically distributed servers or nodes that work together to deliver web content, such as images, videos, scripts, stylesheets, and other assets, to users more efficiently. CDNs are designed to improve the performance, reliability, and availability of web content while reducing the load on the origin server. Here's why we use CDNs:

1. **Improved Load Times:** CDNs reduce latency by serving content from servers that are geographically closer to the user. This results in faster load times and a better user experience.

2. **Increased Reliability:** CDNs distribute content across multiple servers, reducing the risk of downtime due to server failures or traffic spikes. If one server becomes unavailable, the CDN can route requests to another server.

3. **Scalability:** CDNs can handle a large volume of traffic and distribute it across multiple servers, making it easier to scale your web application or website without overloading your origin server.

4. **Load Balancing:** CDNs can perform load balancing by distributing traffic evenly across multiple servers, ensuring that no single server is overwhelmed with requests.

5. **Security:** Some CDNs offer security features like DDoS protection, web application firewall (WAF), and SSL/TLS encryption, helping to protect your website or application from various online threats.

6. **Bandwidth Savings:** CDNs can offload a significant portion of the bandwidth usage from your origin server. This can result in cost savings, especially if you pay for bandwidth usage.

7. **Global Reach:** CDNs have servers in multiple locations worldwide, allowing your content to be delivered quickly to users across the globe, regardless of their location.

8. **Caching:** CDNs use caching to store static content closer to the user. This reduces the need to fetch the same content repeatedly from the origin server, further improving load times.

9. **Content Optimization:** CDNs often offer content optimization features, such as image optimization and minification of scripts and stylesheets, which can improve the performance of your website or application.

In summary, CDNs are used to optimize the delivery of web content by reducing latency, improving reliability, and providing various performance and security enhancements. They are an essential tool for modern websites and web applications, especially those with a global user base or high traffic volume.

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

4) WHY REACT IS KNOW AS REACT ?


React is known as "React" because it focuses on efficiently updating and rendering user interfaces by reacting to changes in data, providing a declarative and component-based approach to building interactive web applications.


^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

5) WHAT IS CROSS-ORIGIN IN SCRIPT TAG ?

Cross-origin in a script tag refers to the browser's security policy that typically restricts the loading of JavaScript files from different domains to prevent potential security risks, such as code injection attacks. This policy can be relaxed using techniques like JSONP or CORS headers when necessary for legitimate cross-origin script loading.



^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


6) DIFF BTW REACT AND REACT DOM ?
React:

React is a JavaScript library for building user interfaces (UIs).
It provides the core functionality for defining and rendering UI components, managing component state, handling user input, and creating a virtual representation of the DOM (Virtual DOM) for efficient updates.
React can be used for building UIs in various environments, including web applications, mobile apps (with React Native), and more.
ReactDOM:

ReactDOM is a specific package in the React ecosystem that is used when you want to render React components in a web browser.
It contains the methods necessary to interact with the browser's DOM (Document Object Model) and to render React components into the actual HTML DOM elements.
ReactDOM is primarily concerned with the integration of React components into the web browser environment.




^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


7) DIFF BTW ASYNC AND DEFER ? 


Use async when you have independent scripts that can run out of order and don't need to wait for the DOM to be fully parsed.
Use defer when you want to maintain the order of script execution and ensure scripts run after the HTML is parsed but before the DOMContentLoaded event, making it suitable for scripts that rely on the DOM structure.

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


8) DIFF BTW react.development.js and react.production.js files via CDN ?

React provides two different versions of its library for development and production use, which are commonly distributed via CDNs:

1. **react.development.js (or react.dev.js):**
   - This version is intended for use during development and debugging.
   - It includes extra warnings and helpful error messages in the console, aiding developers in identifying and fixing issues in their code.
   - It is larger in file size due to the additional debugging information.
   - Generally not suitable for production use due to increased bundle size and potential performance impact.

2. **react.production.js (or react.prod.js):**
   - This version is optimized for production use and should be used in live applications.
   - It removes the development-specific warnings and error messages, resulting in a smaller bundle size and improved performance.
   - Recommended for production deployments to minimize the overhead of the React library.
   - Using the production version is crucial for delivering a faster and less verbose application to end-users.

In summary, the primary difference between `react.development.js` and `react.production.js` when obtained via CDN is the level of debugging information and warnings they provide, with the development version being larger and more informative for debugging, while the production version is smaller and optimized for deployment. Always use the production version in production environments to ensure better performance.







 -->