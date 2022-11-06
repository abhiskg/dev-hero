import useDocTitle from "../../hooks/useDocTitle";

const Blog = () => {
  useDocTitle("Blog");
  return (
    <div className="custom-width mx-auto">
      <h2 className="header-style dark:text-gray-100">Blogs</h2>
      <div className="mt-10  rounded-md bg-white p-3 shadow-md dark:bg-gray-900">
        <h2 className="text-lg font-medium dark:text-gray-200">
          Q1: What is cors?
        </h2>
        <p className="dark:text-gray-400">
          <span className="font-medium">Ans: </span>Cross-Origin Resource
          Sharing (CORS) is an HTTP-header based mechanism that allows a server
          to indicate any origins (domain, scheme, or port) other than its own
          from which a browser should permit loading resources. CORS also relies
          on a mechanism by which browsers make a "preflight" request to the
          server hosting the cross-origin resource, in order to check that the
          server will permit the actual request. In that preflight, the browser
          sends headers that indicate the HTTP method and headers that will be
          used in the actual request.
        </p>
      </div>
      <div className="mt-5   rounded-md bg-white p-3 shadow-md dark:bg-gray-900">
        <h2 className="text-lg font-medium dark:text-gray-200">
          Q2: Why are you using firebase? What other options do you have to
          implement authentication?
        </h2>
        <p className="dark:text-gray-400">
          <span className="font-medium">Ans:</span> Firebase is great for quick
          projects. it's easy to set up, fast, in many cases requires only
          front-end logic. It lets you focus on your app instead of implementing
          custom authentication, web sockets or database connections. Google
          Analytics for Firebase allows you to track your users' journey through
          realtime and custom reporting. Apart from firebase we can use Auth0,
          MongoDB, Supabase, Passport, Okta, Json Web Token etc to implement
          authentication.
        </p>
      </div>
      <div className="my-5   rounded-md bg-white p-3 shadow-md dark:bg-gray-900">
        <h2 className="text-lg font-medium dark:text-gray-200">
          Q3: How does the private route work?
        </h2>
        <p className="dark:text-gray-400">
          <span className="font-medium">Ans:</span> The private route is used to
          protect selected pages from unauthenticated users. If the user is not
          authenticated he will be redirected to the login page and the user can
          only access the authenticated routes If he is authenticated. To
          protect some route first we have to make Private route component and
          we have to use the private route as a children component, so that if
          user is authenticated the private route component will allow children
          to render otherwise it will redirect to the login page.
        </p>
      </div>
      <div className="my-5   rounded-md bg-white p-3 shadow-md dark:bg-gray-900">
        <h2 className="text-lg font-medium dark:text-gray-200">
          Q4: What is Node? How does Node work?
        </h2>
        <p className="dark:text-gray-400">
          <span className="font-medium">Ans: </span>Node. js is a JavaScript
          runtime environment, it allows developers to write JavaScript code
          that runs directly in a computer process itself instead of in a
          browser. Node can, therefore, be used to write server-side
          applications with access to the operating system, file system, and
          everything else required to build fully-functional applications. Node
          runs a single-threaded event loop registered with the system to handle
          connections, and each new connection causes a JavaScript callback
          function to fire. The callback function can handle requests with
          non-blocking I/O calls, and if necessary can spawn threads from a pool
          to execute blocking or CPU-intensive operations and to load-balance
          across CPU cores. Node's approach to scaling with callback functions
          requires less memory to handle more connections than most competitive
          architectures that scale with threads.
        </p>
      </div>
    </div>
  );
};

export default Blog;
