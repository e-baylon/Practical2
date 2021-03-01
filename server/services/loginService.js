/* 
  Login Service Will Authenticate an email and password
  return a true or false response.
  false returns will keep users on the login page with errors
  true will redirect user to the dashboard.html
*/
const fileService = require('./fileService')
 
const authenticate = (credential)=>{
   const {email, password} = {...credential}
   const users = fileService.getFileContents('../data/users.json');
}
 
 