import { Injectable } from '@angular/core';
import { Question } from '../models/Question';

@Injectable()
export class DataService {
  questions:Question[];

  constructor() { 

  /* this.questions = [
      {
        text: 'What is your first name?',
        answer: 'My first name is Andrew.',
        hide:true
      },
      {
        text: 'What is your last name?',
        answer: 'My last name is Waller.',
        hide:true
      },
      {
        text: 'What is your favorite language?',
        answer: 'My favorite language is JavaScript.',
        hide:true
      }
   ]; */
  }

  // Get Questions from LocalStorage
  getQuestions(){
    if(localStorage.getItem('questions') === null) {
      this.questions = [];
    } else {
      this.questions = JSON.parse(localStorage.getItem('questions'));
    }
    return this.questions;
  }

  // Add Question to LocalStorage
  addQuestion(question:Question){
    // Adds FAQ to the UI
    this.questions.unshift(question);
    
    // Init local var
    let questions;

    // Adds FAQ to Local Storage
    if(localStorage.getItem('questions') === null) {
      questions = [];
      // Push new question
      questions.unshift(question);
      // Set new array to LocalStorage
      localStorage.setItem('questions', JSON.stringify(questions));
    } else {
      questions = JSON.parse(localStorage.getItem('questions'));
      // Add new question
      questions.unshift(question);
      // Reset LocalSorage
      localStorage.setItem('questions', JSON.stringify(questions));
    }
  }

  //Remove Question from LocalStorage
  removeQuestion(question:Question){
    for(let i = 0;i < this.questions.length;i++){
      if(question == this.questions[i]){
        this.questions.splice(i, 1);
        localStorage.setItem('questions', JSON.stringify(this.questions));
      }
    }
  }

}