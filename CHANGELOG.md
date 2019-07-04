# [Unreleased]

# [0.0.3] - 2019-07-04

##Added
*User Id is stored in local storage

##Changed
*State myId is no longer hardcoded, updated with value from local storage



# [0.0.2] - 2019-07-03

##Added
*New socket emit functions:
*-notifyUserConnectedToChat
*-notifyUserLeaveToChat
*-sendNewMessage

*New event listeners:
*-listenForNewMessage
*-listenForError

##Changed
*States in reducer are now fill up dynamically with action response 
*Enable live chat between two users

# [0.0.1] - 2019-07-01

## Removed
* All Json placeholder API routes

## Added
* Backend API routes

## Changed
* States in reducer updated with backend response
* Update CI/CD configuration to build and push the image in the same task

