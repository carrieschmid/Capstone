import React from 'react';
import Session from './../Session/Session';

function SessionList(props) {
//  if (Object.entries(props.sessionList).length == 0) {
    
//   return (
//    <div>
//     <h3>No sessions yet!</h3>
//    </div>
//   );
//  } else {

 return (
    <div>
     
 
   {Object.keys(props.sessionList).map((sessionId) => {
    var session = props.sessionList[sessionId];

    return <Session name={session.name}
     description={session.description}
     location={session.location}
     dates={session.dates}
     openings={session.openings}
     key={sessionId}
     sessionId={sessionId}
     lesson={session.lesson} 
     participant= {session.participant}
     onSessionSelection={props.onSessionSelection} 
     onCloseDetails={props.onCloseDetails}
    />;
   })}
  </div>
 );
}



export default SessionList;