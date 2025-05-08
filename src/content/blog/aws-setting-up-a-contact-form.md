---
title: "AWS Contact Form"
author: Eric Perez
pubDatetime: 2025-05-08T07:27:01.569Z
postSlug: aws-contact-form
featured: true
draft: false
ogImage: /assets/forrest-gump-quote.webp
tags:
  - aws
  - contact form
  - API Gateway
  - S3
  - Lambda function
description: Random thoughts.
---

To create a contact form on AWS, you'll typically use a combination of AWS services like Lambda, API Gateway, and SES (Simple Email Service). You'll also need to create a static website on S3 and configure it to interact with the API Gateway endpoint. Here's a step-by-step overview:

**Step 1: Set up the Frontend (S3 Static Website)**
Create an HTML form on an S3 bucket (your static website).
Include necessary input fields (name, email, message, etc.).
Write JavaScript to capture form data and send it to the API Gateway endpoint via a POST request.
Consider using libraries like jQuery or fetch API to handle the POST request.

**Step 2: Create the Lambda Function**
Develop a Lambda function (e.g., in Node.js, Python, or other supported languages) to process the form data.
This function will:
Receive the data sent from the API Gateway.
Validate the data (e.g., check for required fields, email format).
Use the AWS SDK to interact with services like SES to send the email notification.
Optionally, store the form data in a database like DynamoDB.

**Step 3: Set up API Gateway**
Create an API in API Gateway.
Define a POST method for the API Gateway endpoint that triggers the Lambda function when the form is submitted.
Configure CORS (Cross-Origin Resource Sharing) in API Gateway to allow requests from your S3 website domain.

**Step 4: Configure SES**
Create an SES identity (verify your email address).
Configure SES permissions to allow your Lambda function to send emails from the verified identity.

**Step 5: Deploy and Test**
Upload your website files to S3.
Deploy your API Gateway and Lambda function.
Test your contact form by submitting it from your S3 website.
Ensure you receive the email notification and that the data is stored in DynamoDB if you've configured it.
