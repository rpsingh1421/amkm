This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

/===============================================================================================

HTTP status codes are three-digit numbers returned by servers in response to a client's request made to the server. These codes are grouped into five categories based on the type of response they indicate. Here's a comprehensive list of HTTP status codes:

1xx: Informational
100 Continue: The server has received the request headers, and the client should proceed to send the request body.
101 Switching Protocols: The requester has asked the server to switch protocols, and the server has agreed to do so.
102 Processing: The server has received and is processing the request, but no response is available yet.
103 Early Hints: The server is likely to send a final response with the header fields included in the informational response.
2xx: Success
200 OK: The request has succeeded.
201 Created: The request has been fulfilled, and a new resource has been created.
202 Accepted: The request has been accepted for processing, but the processing is not complete.
203 Non-Authoritative Information: The server successfully processed the request, but is returning information from a different source.
204 No Content: The server successfully processed the request and is not returning any content.
205 Reset Content: The server successfully processed the request, but is not returning any content and requires that the requester reset the document view.
206 Partial Content: The server is delivering only part of the resource due to a range header sent by the client.
207 Multi-Status: The message body that follows is an XML message and can contain multiple separate responses.
208 Already Reported: The members of a DAV binding have already been enumerated in a previous reply to this request, and are not being included again.
226 IM Used: The server has fulfilled a request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.
3xx: Redirection
300 Multiple Choices: The request has more than one possible response. The user or user agent should choose one of them.
301 Moved Permanently: The URL of the requested resource has been changed permanently. The new URL is given in the response.
302 Found: The resource requested is temporarily under a different URL.
303 See Other: The response to the request can be found under another URL using a GET method.
304 Not Modified: The resource has not been modified since the version specified by the request headers.
305 Use Proxy: The requested resource is available only through a proxy, the address for which is provided in the response.
306 Switch Proxy: No longer used. Originally meant "Subsequent requests should use the specified proxy."
307 Temporary Redirect: The request should be repeated with another URL, but future requests can still use the original URL.
308 Permanent Redirect: The request and all future requests should be repeated using another URL.
4xx: Client Errors
400 Bad Request: The server cannot process the request due to a client error (e.g., malformed request syntax).
401 Unauthorized: The client must authenticate itself to get the requested response.
402 Payment Required: Reserved for future use. Intended for digital payment systems.
403 Forbidden: The client does not have access rights to the content.
404 Not Found: The server can not find the requested resource.
405 Method Not Allowed: The request method is known by the server but has been disabled and cannot be used.
406 Not Acceptable: The server cannot produce a response matching the list of acceptable values defined in the request's proactive content negotiation headers.
407 Proxy Authentication Required: The client must first authenticate itself with the proxy.
408 Request Timeout: The server would like to shut down this unused connection.
409 Conflict: The request could not be completed due to a conflict with the current state of the target resource.
410 Gone: The requested content has been permanently deleted from server, with no forwarding address.
411 Length Required: The server refuses to accept the request without a defined Content-Length header.
412 Precondition Failed: The server does not meet one of the preconditions that the requester put on the request.
413 Payload Too Large: The request is larger than the server is willing or able to process.
414 URI Too Long: The URI provided was too long for the server to process.
415 Unsupported Media Type: The request entity has a media type which the server or resource does not support.
416 Range Not Satisfiable: The client has asked for a portion of the file, but the server cannot supply that portion.
417 Expectation Failed: The server cannot meet the requirements of the Expect request-header field.
418 I'm a teapot: This code was defined in 1998 as one of the traditional IETF April Fools' jokes.
421 Misdirected Request: The request was directed at a server that is not able to produce a response.
422 Unprocessable Entity: The request was well-formed but was unable to be followed due to semantic errors.
423 Locked: The resource that is being accessed is locked.
424 Failed Dependency: The request failed due to failure of a previous request.
425 Too Early: The server is unwilling to risk processing a request that might be replayed.
426 Upgrade Required: The client should switch to a different protocol.
428 Precondition Required: The origin server requires the request to be conditional.
429 Too Many Requests: The user has sent too many requests in a given amount of time ("rate limiting").
431 Request Header Fields Too Large: The server is unwilling to process the request because its header fields are too large.
451 Unavailable For Legal Reasons: The user requests an illegal resource, such as a web page censored by a government.
5xx: Server Errors
500 Internal Server Error: The server has encountered a situation it doesn't know how to handle.
501 Not Implemented: The request method is not supported by the server and cannot be handled.
502 Bad Gateway: The server, while acting as a gateway or proxy, received an invalid response from the upstream server.
503 Service Unavailable: The server is not ready to handle the request.
504 Gateway Timeout: The server, while acting as a gateway or proxy, did not get a response in time from the upstream server.
505 HTTP Version Not Supported: The HTTP version used in the request is not supported by the server.
506 Variant Also Negotiates: Transparent content negotiation for the request results in a circular reference.
507 Insufficient Storage: The server is unable to store the representation needed to complete the request.
508 Loop Detected: The server detected an infinite loop while processing a request with "Depth: infinity".
510 Not Extended: Further extensions to the request are required for the server to fulfill it.
511 Network Authentication Required: The client needs to authenticate to gain network access.