import React from "react";

//  * Answer a Question Modal Form Elements/Details *
//  Access: From the answer link on each question

//  1. Your Answer (required) -
//    a. textarea
//    b. Max 1000 characters

//  2. What is your nickname (required)
//    a. input
//    b. Max 60 characters
//    c. placeholder = "Example: jack543!"
//    d. text under = “For privacy reasons, do not use your full name or email address”

//  3. Your email (required)
//    a. input (email)
//    b. Max 60 characters
//    c. placeholder = "Example: jack@email.com"
//    d. text under = “For authentication reasons, you will not be emailed”

//  4. Upload your photos
//    a. button, when clicked, open a window where images can be selected
//    b. after upload, a thumbnail showing the image should appear
//    c. allow 5 images to be uploaded
//    d. button disappears after 5 images upload

//  5. Submit Answer
//    a. button, should validate inputs when clicked
//    b. placeholder = “Why did you like the product or not?”
//    c. if any fields are invalid
//      i.  prevent submission
//      ii. give warning message = “You must enter the following: {...} ”
//    d. field is invalid if any required field is blank or email is not in correct format
//    e. images selected are invalid or unable to be uploaded

const AnswerQuestions = () => {
  return (
    <div>
      <h1>Submit your Answer</h1>
      <h2>[Product name]: [Question Body]</h2>
    </div>
  );
};

export default AnswerQuestions;
