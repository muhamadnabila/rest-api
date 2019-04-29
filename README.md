# My rest-api
# url : https://fast-journey-42535.herokuapp.com
## List of user routes

### /api/signup
* response(status : 201) :
    ```json
    {
        "msg" : "Succesfully Sign Up"    
    }
    ```
* HTTP: POST
* Header(s): none
* Body: 
    * username : string,
    * password : string
* Description: Create a new user


### /api/signin
* response(status : 200) :
    ```json
    {
        "token" : "token generated"    
    }
    ```
* HTTP: POST
* Header(s): none
* Body: 
    * username : string,
    * password : string
* Description: Get an user

## List of todos routes
## All of the following routes need authentication!
## authentication should logging in then get a generates token

### /api/todos
* response(status : 200) :
    ```json
    {
        "msg" : "succesfully create new todo"    
    }
    ```
* HTTP: POST
* Header(s): token
* Body: 
    * title : string,
    * description : string
* Description: Create a todo (Authenticated user's only)

###  /api/todos
* response(status : 200) :
    ```json
    {
        "todos" : "todos finded"    
    }
    ```
* HTTP: GET
* Header(s): token
* body : none
* Description : Get all user's todo

###  /api/todos/:id
* response(status : 200) :
    ```json
    {
        "todo" : "a todo finded"    
    }
    ```
* HTTP: GET
* Header(s): token
* body : none
* Description : Get a single todo (Owner only)

###  /api/todos/:id
* response(status : 200) :
    ```json
    {
        "msg" : "succesfully deleted todo"    
    }
    ```
* HTTP: DELETE
* Header(s): token
* body : none
* Description : Delete a todo (Owner only)

###  /api/todos/:id
* response(status : 200) :
    ```json
    {
        "msg" : "succesfully update data todo"    
    }
    ```
* HTTP: PUT
* Header(s): token
* body : none
* Description : Update a todo with new info (Owner only)

###  /api/todos/:id
* response(status : 200) :
    ```json
    {
        "msg" : "succesfully update data todo"    
    }
    ```
* HTTP: PATCH
* Header(s): token
* body : none
* Description : Update a todo with new info (Owner only)