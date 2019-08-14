# Generic Serverless Template

This template is a reference for creating a serverless REST API. It utilizes:

1) Serverless
2) NodeJS
3) AWS-SDK

## Directory Structure

### Clients

Contains the resource module that will be integrating with AWS. In the template we are using Dynamo DB.

### Constants

Contains all the static data that will be used throughout the API. In the template we are using an AWS errors constant module.

### Controllers

Contains all modules that will be interfacing with the client modules mentioned above. They will also deal with error handling and logging.

### Handlers

Contains all the modules that are accessed by API gateway, and the barrier between the outside world and our resources.

### Partials

Contains all serverless partial templates. For instance: functions, CORS policies, and the dynamo table.

### Utils

Contains all utility modules. Such as the logger, and response handler.

## Using this Template

You have have pretty much everything you need to stand up your own api. However, there are a few things to note before you can create everything.

### CodeBuild

This template utilizes CodeBuild so you will need to set that up in your AWS console in order for it to work correctly. 
> WARNING: Make sure you create a git hook that points to the repo you store this API in and the branch you want deployed. 

### Update Code

The template is generic so that standing up an API is fast and painless. However, there will be some code you need to write in order to get it working properly. I have marked all the locations that need updating with the word RENAME or a comment that starts with TODO. In order for anything to work you will need to update these areas.

## ENJOY!
