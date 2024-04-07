export const jsQuiz = {
  questions: [
    {
      question:
        " What does HTML stand for? ?",
      choices: [
        "Hyperlinks and Text Markup Language",
        "Hyper Text Markup Language",
        "Home Tool Markup Language",
        "Hyperlinking Text Marking Language",
      ],
      type: "MCQs",
      correctAnswer: "Hyper Text Markup Language",
    },
    {
      question:
        " What does NaN stand for in JavaScript? ?",
      choices: [
        "Not a Null",
        "Not a Number",
        " Notable and Noteworthy",
        " Not a Name",
      ],
      type: "MCQs",
      correctAnswer: "Not a Number",
    },
    {
      question:
        "What will be the output of typeof [] in JavaScript?",
      choices: [
        "array",
        "object",
        "string",
        "undefined",
      ],
      type: "MCQs",
      correctAnswer: "object",
    },
    {
      question:
        "What is React.js?",
      choices: [
        "A programming language",
        "A JavaScript library for building user interfaces",
        "A server-side framework",
        "A database management system",
      ],
      type: "MCQs",
      correctAnswer: "A JavaScript library for building user interfaces",
    },
    {
      question:
        "What is the purpose of JSX in React?",
      choices: [
        "To write JavaScript code in XML syntax",
        "To create JSON objects",
        "To handle asynchronous operations",
        "To style React components",
      ],
      type: "MCQs",
      correctAnswer: "To write JavaScript code in XML syntax",
    },
  ]
};

export const resultInitialState = {
  score: 0,
  correctAnswer: 0,
  wrongAnswers : 0
};