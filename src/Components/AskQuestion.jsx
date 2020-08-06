import React from "react";

//  * Ask a Question Modal Form Elements/Details *
//  Access: Ask a question Modal should pop up when button is clicked

//  1. User Question (required) -
//    a. textarea
//    b. Max 1000 characters

//  2. User nickname (required)
//    a. input
//    b. Max 60 characters
//    c. placeholder = "Example: jackson11!"
//    d. text under = “For privacy reasons, do not use your full name or email address”

//  3. User email (required)
//    a. input (email)
//    c. placeholder = "Example: jack@email.com"
//    b. Max 60 characters
//    d. text under = “For authentication reasons, you will not be emailed”

//  4. Submit Button
//    a. button, should validate inputs when clicked
//    b. placeholder = “Why did you like the product or not?”
//    c. if any fields are invalid
//      i.  prevent submission
//      ii. give warning message = “You must enter the following: {...} ”
//    d. field is invalid if any required field is blank or email is not in correct format

const AskQuestion = () => {
  return (
    <div>
      <h1>Ask Your Question</h1>
      <h2>About the [Product Name Here]</h2>
    </div>
  );
};

export default AskQuestion;
