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




