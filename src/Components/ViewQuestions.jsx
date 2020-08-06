import React from "react";

// * Question List *
// Access: onload, 4 questions displayed with 2 answers per question.

// 1. Sort: Sellers answers first, then by Helpfulness
// 2. If no questions have been submitted for this product, then the list will collapse, and the button to submit a new question will appear at top

// * Individual Question *
// 1. Text with the question proceeded by a Q:
// 2. List on answers below the question proceeded by a A:
// 3. Under answer:
//    a. Username, Seller in bold if applicable, Month DD, YYYY
//    b. Helpful link and count. Increase when clicked. Only allow one click
//    c. Report link. Only allow click once, change to Reported after click, mark reported in db
// 4. link to show more answers if more than 2,
//    a. click will display the remaining answers
//    b. should take up only half of the screen
//    c. should be able to scroll

// 1. Helpful link and count. Increase when clicked. Only allow one click
// 2. Add a Answer link. when clicked open up the form modal

const ViewQuestions = () => {
  return (
    <div>
      <QuestionAnswer />
    </div>
  );
};

const QuestionAnswer = () => {
  return (
    <div>
      <span>
        Q: <span>Who what which when where why whether how?</span>{" "}
      </span>
      <br />
      <span>
        A: <span>answer answer answer answer answer</span>
      </span>
    </div>
  );
};

export default ViewQuestions;
