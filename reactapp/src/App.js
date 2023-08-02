import {useState} from 'react';
import './App.css';
import Button from './components/UI/Button/Button';
import Card from './components/UI/Card/Card';
import React from 'react';

function App(){
  var qCards;
  var startBtn;
  var resultBtn;

  const questionData=[
    {
      key: 1,
      question: 'Who is the father of the nation ?',
      options: {
        option1: 'Mahatma Gandhi',
        option2: 'Jawaharlal Nehru',
        option3: 'Donald Trump',
        option4: 'Barrack Obama'
      },
      answer: 'Mahatma Gandhi'
    },
    {
      key: 2,
      question: 'What color is are the leaves ?',
      options: {
        option1: 'Blue',
        option2: 'Red',
        option3: 'Yellow',
        option4: 'Green'
      },
      answer: 'Green'
    },
    {
      key: 3,
      question: 'What color is the sky ?',
      options: {
        option1: 'Blue',
        option2: 'Red',
        option3: 'Yellow',
        option4: 'Green'
      },
      answer: 'Blue'
    },
    {
      key: 4,
      question: 'What color is the sky ? ',
      options: {
        option1: 'Blue',
        option2: 'Red',
        option3: 'Yellow',
        option4: 'Green'
      },
      answer: 'Blue'
    },
    {
      key: 5,
      question: 'What color is the fire ?',
      options: {
        option1: 'Blue',
        option2: 'Red',
        option3: 'Yellow',
        option4: 'Green'
      },
      answer: 'Yellow'
    }
  ]
}
