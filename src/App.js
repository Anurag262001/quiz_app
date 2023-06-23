import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import axios from "axios";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Quiz from "./Pages/Quiz/Quiz";
import Result from "./Pages/Result/Result";
import React from "react";
function App() {
  const [name, setName] = useState("");
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );
    console.log(data);
    setQuestions(data.results);
  };
  return (
    <BrowserRouter>
    <div className="app" style={{backgroundImage:"url(./ques1.png)"}}>
<Header />
<Routes>
<Route path="/" element={<Home name={name} setName={setName} fetchQuestions={fetchQuestions}/>} />
<Route path="/quiz" element={<Quiz name={name} questions={questions} score = {score} setScore={setScore} setQuestions={setQuestions} />} />
<Route path="/result" element={<Result name={name} score={score}/>} />
</Routes>
</div>
<Footer />
</BrowserRouter>
  );
}

export default App;
