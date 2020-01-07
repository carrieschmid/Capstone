function AddLesson(props) {

    return (
      
     <div>
  
        <form onSubmit={addNewLesson}>
            <div className='input-field'>
            <input
            id='date'
            type='text'
            placeholder='Date'
            ref={(input) => { _date = input; }} />
            </div>
            <div className='input-field'>
            <input
            id='morning'
            type='text'
            placeholder='Morning'
            ref={(input) => { _morning = input; }} />
            </div>
            <div className='input-field'>
            <input
            id='snack'
            type='text'
            placeholder='Snack'
            ref={(input) => { _snack = input; }} />
            </div>
            <div className='input-field'>
            <input
            id='afternoon'
            type='text'
            placeholder='Afternoon'
            ref={(input) => { _afternoon = input; }} />
            </div>
            <button type='submit'>Add Lesson</button>
        </form>
        </div>
    );
};

export default AddLesson;