export default class ApiHelper {

 apiPostNewUser(newVolunteer) {
  let url = 'http://localhost:5000/Volunteer/create';
  let request = new XMLHttpRequest(); 
  let body = JSON.stringify(newVolunteer);
  request.open('POST', url, true);
  request.setRequestHeader('Content-Type', 'application/JSON');
  request.onreadystatechange = function () {
   if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
    console.log('successfully created new user');
   }
  };
  request.send(body);
 }
  
 apiAttemptLogin(volunteer) {
  console.log('user', volunteer);
  return new Promise(function(resolve, reject) {
   let url = 'http://localhost:5000/Volunteer/authenticate';
   let request = new XMLHttpRequest();
   console.log('user', request);
   let body = JSON.stringify(volunteer);
   
   request.open('POST', url, true);
   request.setRequestHeader('Content-Type', 'application/JSON');
   request.onload = function() {
    if (this.status === 200) {
     resolve(request.response);
    } else {
     reject(Error(request.statusText));
    }
   };
   request.send(body);
  });
 }

 apiPostNewSession(newSession) {
    console.log('new session running');
    let url = 'http://localhost:5000/api/Session/post-session';
    let body = JSON.stringify(newSession);
    console.log(body);
    var request = new XMLHttpRequest();
    request.open('POST', url, true);
    console.log(request);
    request.setRequestHeader('Content-Type', 'application/JSON');
    request.onreadystatechange = function () { // Call a function when the state changes.
     if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
      // Request finished. Do processing here.
     }
    };
    request.send(body);
    
   }

   
   apiGetVolunteerSessions(volunteer) {
    return new Promise(function (resolve, reject) {
     let url = `http://localhost:5000/api/Session/get-session?id=4`;  
     let request = new XMLHttpRequest();
     console.log(request);
     request.onload = function () {
      if (this.status === 200) {
       resolve(request.response);
      } else {
       reject(Error(request.statusText));
      }
     };
     console.log(request);
     request.open('GET', url, true);
     request.send();
    });
   }   
 
  

  
}