# TODO API

### What does a TODO consist of?

* ID
* Owner / Associated Account
* Deadline
* Creation Date
* Title
* Description

### What can the API do?

* Fetch TODO's
* Create TODO's
* Modify TODO's
* Delete TODO's

### What is the REST-Spec?

* GET all your TODO's 
    * URL-Params: none
    * Request-Payload: Owner
* POST a new TODO
    * URL-Params: none
    * Request-Payload: Owner, Deadline, Title, Description, Owner
* PATCH an existing TODO
    * URL-Params: ID
    * Request-Payload: To-be-modified Property, Owner
* DELETE an existing TODO
    * URL-Params: ID
    * Request-Payload: Owner
