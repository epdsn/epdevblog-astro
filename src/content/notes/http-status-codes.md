---
title: "HTTP Status Codes"
date: "2024-12-19"
tags: ["http", "api", "web-development", "reference"]
---

# HTTP Status Codes

HTTP status codes are three-digit numbers returned by web servers to indicate the result of a client's request. They provide crucial information about whether a request was successful, encountered an error, or requires further action.

## Status Code Categories

### 1xx - Informational Responses

These codes indicate that the request was received and the server is continuing to process it.

- **100 Continue**: The server has received the request headers and expects the client to send the request body.
- **101 Switching Protocols**: The server is switching protocols as requested by the client.
- **102 Processing**: The server is processing the request but no response is available yet.

### 2xx - Successful Responses

These codes indicate that the request was successfully received, understood, and accepted.

- **200 OK**: The request has succeeded. The response body contains the requested resource.
- **201 Created**: The request has been fulfilled and resulted in a new resource being created.
- **202 Accepted**: The request has been accepted for processing, but processing has not been completed.
- **204 No Content**: The server successfully processed the request but is not returning any content.
- **206 Partial Content**: The server is delivering only part of the resource due to a range header.

### 3xx - Redirection Responses

These codes indicate that the client must take additional action to complete the request.

- **300 Multiple Choices**: The requested resource has multiple representations.
- **301 Moved Permanently**: The requested resource has been permanently moved to a new URI.
- **302 Found**: The requested resource has been temporarily moved to a different URI.
- **304 Not Modified**: The resource has not been modified since the last request.
- **307 Temporary Redirect**: The request should be repeated with another URI.
- **308 Permanent Redirect**: The request should be repeated with another URI permanently.

### 4xx - Client Error Responses

These codes indicate that the client made an error in the request.

- **400 Bad Request**: The server cannot understand the request due to invalid syntax.
- **401 Unauthorized**: Authentication is required and has failed or not been provided.
- **403 Forbidden**: The server understood the request but refuses to authorize it.
- **404 Not Found**: The requested resource could not be found on the server.
- **405 Method Not Allowed**: The HTTP method used is not allowed for this resource.
- **409 Conflict**: The request conflicts with the current state of the server.
- **422 Unprocessable Entity**: The request was well-formed but contains semantic errors.
- **429 Too Many Requests**: The user has sent too many requests in a given amount of time.

### 5xx - Server Error Responses

These codes indicate that the server failed to fulfill a valid request.

- **500 Internal Server Error**: The server encountered an unexpected condition.
- **501 Not Implemented**: The server does not support the functionality required.
- **502 Bad Gateway**: The server received an invalid response from an upstream server.
- **503 Service Unavailable**: The server is temporarily unable to handle the request.
- **504 Gateway Timeout**: The server did not receive a timely response from an upstream server.

## Most Common Status Codes

### Success Codes

- **200 OK**: Standard success response
- **201 Created**: Resource successfully created
- **204 No Content**: Success but no content to return

### Client Error Codes

- **400 Bad Request**: Invalid request syntax
- **401 Unauthorized**: Authentication required
- **403 Forbidden**: Access denied
- **404 Not Found**: Resource not found
- **429 Too Many Requests**: Rate limiting

### Server Error Codes

- **500 Internal Server Error**: Server error
- **502 Bad Gateway**: Gateway error
- **503 Service Unavailable**: Server temporarily unavailable

## Best Practices

### For API Development

- Use appropriate status codes for different scenarios
- Include meaningful error messages in the response body
- Use 4xx codes for client errors, 5xx for server errors
- Consider using 422 for validation errors instead of 400

### For Web Applications

- Implement proper error handling for all status codes
- Show user-friendly error messages for 4xx errors
- Log 5xx errors for debugging
- Use 301/302 redirects appropriately for SEO

## Testing Status Codes

When testing APIs or web applications, it's important to verify that the correct status codes are returned:

```javascript
// Example API test
fetch("/api/users").then(response => {
  if (response.status === 200) {
    return response.json();
  } else if (response.status === 404) {
    throw new Error("User not found");
  } else {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
  }
});
```

## Tools and Resources

- **Browser Developer Tools**: Check Network tab for status codes
- **Postman/Insomnia**: API testing tools that display status codes
- **curl**: Command-line tool for testing HTTP requests
- **Online Status Code Checkers**: Various websites for quick reference

Understanding HTTP status codes is essential for web development, API design, and debugging. They provide immediate feedback about the success or failure of requests and help developers build more robust applications.
