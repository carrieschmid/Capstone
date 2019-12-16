// import React from 'react';
// import VolunteerAdmin from './VolunteerAdmin';
// import ParticipantAdmin from './ParticipantAdmin';


// class SessionControl extends React.Component {
//  constructor(props) {
//   super(props);
//   this.state = {
//     formVisibleOnPage: false
//   };
// //   this.handleCloseList = this.handleCloseList.bind(this);
// //   this.handleCloseDetails = this.handleCloseDetails.bind(this);
//  }

// //  handleCloseList(){
// //   this.setState({listVisible: true});
// //  }

// //  handleCloseDetails(){
// //     this.setState({detailsVisible: true});
// // }

 render(){
  let currentlyVisibleContent = null;
  if (this.state.formVisibleOnPage){
   currentlyVisibleContent = <VolunteerAdmin onSessionSubmit={this.handleAddingNewSession} 
   sessionList={this.state.masterSessionList}
   selectedSession={this.state.selectedSession}
   onSessionSelection={this.handleChangingSelectedSession}
   onAddingNewLesson={this.handleAddingNewLesson} />;
//   } else {
//    onClick = <ParticipantAdmin sessionList={this.state.masterSessionList}
//    selectedSession={this.state.selectedSession}
//    onSessionSelection={this.handleChangingSelectedSession}
//    onAddingNewParticipant= {this.handleAddingNewParticipant} />;
//    console.log(this.state);
//    //here's where we pass the prop onConfirmation into ConfirmationQuestions
//   }
//   return (
//    <div>
//     {currentlyVisibleContent}
//    </div>
//   );
//  }
// }



// export default SessionControl;