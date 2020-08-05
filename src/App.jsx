import React from 'react';
import ViewQuestions from './Components/ViewQuestions.jsx';
import SearchQuestions from './Components/SearchQuestions.jsx';
import AskQuestion from './Components/AskQuestion.jsx';
import AnswerQuestion from './Components/AnswerQuestion.jsx';

class App extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div>
          <h1>QUESTIONS & ANSWERS</h1>
          <ViewQuestions />
          <SearchQuestions />
          <AskQuestion />
          <AnswerQuestion />
        </div>
        
      )
    }
  }


export default App;