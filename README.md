# Unhandled Error in Express.js Route Handler
This repository demonstrates a common error in Express.js applications:  missing error handling in route handlers.  Specifically, the `/users/:id` route fails to handle cases where a user with the specified ID does not exist, resulting in an unhandled exception.

## Bug
The `bug.js` file contains the erroneous code.  It defines a route that fetches user data based on the ID provided in the URL parameters. However, it lacks proper error handling for scenarios where the user ID is invalid or the user is not found.

## Solution
The `bugSolution.js` file provides a corrected version of the code. It includes comprehensive error handling to gracefully manage invalid user IDs, returning an appropriate error response instead of crashing the server.  The solution demonstrates how to check for the existence of the user before attempting to access its data.