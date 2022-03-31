import { useMemo } from "react";
import { useEffect, useState } from "react";
import "../app.css";
import Quiz from "./Quiz";
import Timer from "./Timer";





function Main() {
  const [questionNumber, setQuestionNumber] = useState(1)
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState(" Rs. 0")

  const moneyPyramid = useMemo(() =>
    [
      { id: 1, amount: "Rs. 100" },
      { id: 2, amount: "Rs. 200" },
      { id: 3, amount: "Rs. 300" },
      { id: 4, amount: "Rs. 500" },
      { id: 5, amount: "Rs. 1000" },
      { id: 6, amount: "Rs. 2000" },
      { id: 7, amount: "Rs. 4000" },
      { id: 8, amount: "Rs. 8000" },
      { id: 9, amount: "Rs. 16,000" },
      { id: 10, amount: "Rs. 32,000" },
      { id: 11, amount: "Rs. 64,000" },
      { id: 12, amount: "Rs. 1,25,000" },
      { id: 13, amount: "Rs. 2,50,000" },
      { id: 14, amount: "Rs. 5,00,000" },
      { id: 15, amount: "Rs. 10,00,000" }
    ].reverse(), [])

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    }, {
      id: 4,
      question: "India has largest deposits of ____ in the world?",
      answers: [
        {
          text: "Gold",
          correct: false,
        },
        {
          text: "Copper",
          correct: false,
        },
        {
          text: "Mica",
          correct: true,
        },
        {
          text: "None of the above",
          correct: false,
        },
      ],
    }, {
      id: 5,
      question: "When ancient Olympic games first held?",
      answers: [
        {
          text: "776 BC",
          correct: true,
        },
        {
          text: "780 BC",
          correct: false,
        },
        {
          text: "790 BC",
          correct: false,
        },
        {
          text: " 800 BC",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "Who is the first person to reach Mount Everest?",
      answers: [
        {
          text: " Rajesh Sharma",
          correct: false,
        },
        {
          text: "Sherpa Tensing, Edmund Hillary",
          correct: true,
        },
        {
          text: " Johan don",
          correct: false,
        },
        {
          text: "Charles Hillary",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "Which is the biggest underground railway network?",
      answers: [
        {
          text: "London",
          correct: true,
        },
        {
          text: "New York",
          correct: false,
        },
        {
          text: "Moscow",
          correct: false,
        },
        {
          text: "Paris",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "What is the name of the Indian State with the least population?",
      answers: [
        {
          text: "Sikkim",
          correct: true,
        },
        {
          text: "Goa",
          correct: false,
        },
        {
          text: "Nagaland",
          correct: false,
        },
        {
          text: "Tamil Nadu",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "Name the Indian film which has 71 songs ?",
      answers: [
        {
          text: "Indra Sabha",
          correct: true,
        },
        {
          text: "CoVeer Zarapper",
          correct: false,
        },
        {
          text: "Bahubali",
          correct: false,
        },
        {
          text: "Khiladi 786",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "The Olympic Flame, was, for the first time, ceremonially lighted and burnt in a giant torch at the entrance of the stadium at",
      answers: [
        {
          text: "Athens Games (1896)",
          correct: false,
        },
        {
          text: "	London Games (1908)",
          correct: false,
        },
        {
          text: "MiParis Games (1924)ca",
          correct: false,
        },
        {
          text: "Amsterdam Games (1928)",
          correct: true,
        },
      ],
    },
    {
      id: 11,
      question: "The range of missile Agni is approximately",
      answers: [
        {
          text: "150 km",
          correct: false,
        },
        {
          text: "1200-2000 km",
          correct: true,
        },
        {
          text: "500 m to 9 km",
          correct: false,
        },
        {
          text: "4 km",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "The red blood cells are in the",
      answers: [
        {
          text: "lymph nodes",
          correct: false,
        },
        {
          text: "liver",
          correct: false,
        },
        {
          text: "bone marrow",
          correct: true,
        },
        {
          text: "heart",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "The only Indian woman who become President of the World Health Organisation so far is/was",
      answers: [
        {
          text: "Smt. Kamala Devi Chattopadhyaya",
          correct: false,
        },
        {
          text: "Raj Kumari Amrit Kaur",
          correct: true,
        },
        {
          text: "Smt. Vijayalakshmi Pandit",
          correct: false,
        },
        {
          text: "Dr. Sushila Nayar",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "When a moving bus stops suddenly, the passenger are pushed forward because of the",
      answers: [
        {
          text: "friction between the earth and the bus",
          correct: false,
        },
        {
          text: "friction between the passengers and the earth",
          correct: false,
        },
        {
          text: "inertia of the passengers",
          correct: true,
        },
        {
          text: "inertia of the bus",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "The significance of peace is denoted by which of the following symbol?",
      answers: [
        {
          text: "Olive branch",
          correct: true,
        },
        {
          text: "Green light",
          correct: false,
        },
        {
          text: "Lotus",
          correct: false,
        },
        {
          text: "White flag",
          correct: false,
        },
      ],
    }
  ];

  useEffect(() => {
    questionNumber > 1 && setEarned(moneyPyramid.find(m => m.id === questionNumber - 1).amount)
  }, [moneyPyramid, questionNumber])
  return (
    <div className="app">

      <>
        <div className="main">
          {
            stop ? <h2 className="endText">You earned : {earned
              // src={win}
              // alt="loading..."
              // style={{
              //   position: "absolute",
              //   width: 1030,
              //   height: 670,
              //   top: "5%",
              //   bottom:"20%",
              //   left: "50%",
              //   transform: "translate(-50%, -50%)"
              // }}

            }
            </h2> :
              (
                <>
                  <div className="top">
                    <div className="timer">
                      <Timer setStop={setStop}
                        questionNumber={questionNumber} />
                    </div>
                  </div>
                  <div className="bottom">
                    <Quiz
                      data={data}
                      setStop={setStop}
                      questionNumber={questionNumber}
                      setQuestionNumber={setQuestionNumber} />
                  </div>
                </>)
          }
        </div>
        <div className="pyramid">
          <ul className="moneyList">
            {
              moneyPyramid.map((m) => (
                <li className={questionNumber === m.id ? "moneyListItem active" : "moneyListItem"}>
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>

              ))
            }
          </ul>
        </div>
      </>


    </div>
  );
}

export default Main;
