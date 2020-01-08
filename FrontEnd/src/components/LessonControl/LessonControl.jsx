import React from 'react';
//Lessons is a property of session, if want to save changes in the database, an edit and delete would need to change that session slice of state, the opening and closing of the session doesn't need tp be connected to state
class LessonControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    //  formVisibleOnPage: false,
     selectedLesson: null
    };
    this.handleClosingLesson = this.handleClosingLesson.bind(this);
    this.handleChangingSelectedLesson= this.handleChangingSelectedLesson.bind(this);
   }
  
  //  handleConfirmation(){
  //   this.setState({formVisibleOnPage: true});
  //  }
   
   handleClosingLesson(){
    this.setState({selectedLesson: null});
   }

   handleChangingSelectedLesson(lessonId){
    this.setState({selectedLesson: lessonId});
   }

   render(){
    let selectedLessonContent = null;
    if (props.selectedLesson != null){
     selectedLessonContent =  <LessonDetail selectedLesson={props.lessonList[props.selectedLesson]} onClosingLesson = {this.handleClosingLesson} />;
     // console.log(onAddingNewLesson);
    }
    return (
     <div>
      {selectedLessonContent}
     </div>
    );
   }

  }


   export default LessonControl;
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

//  render(){
//   let currentlyVisibleContent = null;
//   if (this.state.formVisibleOnPage){
//    currentlyVisibleContent = <VolunteerAdmin onSessionSubmit={this.handleAddingNewSession} 
//    sessionList={this.state.masterSessionList}
//    selectedSession={this.state.selectedSession}
//    onSessionSelection={this.handleChangingSelectedSession}
//    onAddingNewLesson={this.handleAddingNewLesson} />;
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



