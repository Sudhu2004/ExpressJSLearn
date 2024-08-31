# ExpressJSLearn

## Creating an Express Server

Follow these steps to set up a basic Express server.

### 1. Create a Directory


use cd -> Change Directory
for navigating through directory

```bash
mkdir <directory_name>
cd <directory_name>
```

### Create index.js file
```bash
echo. > index.js
```

### Initialize NPM

-y would skip few naming steps
```bash
npm init -y 
```

### Install Express Package
```bash
npm -i express
```

### Write in the index.js file
### Start Server
Before Starting the server add the below to the package.json
```bash
"type": "module"
```

Run the Command to start the server
```bash
node index.js
```
- Use nodemon package to make changes without restarting the server manually
```
npm i -g nodemon
nodemon index.js
```


# Check the Ports that are listening

```bash
netstat -ano | findstr "LISTENING"
```

## HTTPS Requests

- GET : Request a resource from the server

- POST :  Sending resources to a server
- PUT : Replace a resource when sending to a server
- PATCH : Pathes up a resource
- DELETE : delete a resource in a server


## Handing GET Request from '/'

check out index.js



## POSTMAN

It is usefull to create a backend without actually creating a frontend

# HTTP Responses

1. Informational responses (100 - 199)
2. Successful responses (200 - 299)
3. Redirection messages (300 - 399)
4. Client error responses (400 - 499)
5. Server error responses (500 - 599)

for more deeper understandin [docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)


## MiddleWare

To Handle the requests before actually sending the data to the server, middlewares are used
Types
- Preprocessing (ex: body-parser)
- Authentication
- Logging (ex: morgan)
- Error


# morgan

It is used to log information like what all requests were submitted to the server


-  use next() methods in middleware whenever you want to go to next middleware below it 




