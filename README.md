# Coding-Test
Coding Test to create Rest API to get the User details

Requirements
* Node JS
* Mongo DB

Step 1: Install dependencies `npm install`

Step 2: Create User with POST /users
        Sameple Request JSON
        `{
        "email":"test@test.com",
        "password":"test123"
        }`
        
 Step 3: Generate JWT token using POST /auth
         Sample JSON request
         `{
        "email":"test@test.com",
        "password":"test123"
        }`
        
        It will generate access token.
        
Step 4: Get the list of users by GET/users Headers

        Authirization: Bearer Access_token_key
