import { Component } from '@angular/core';
import {Todo} from './todo';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoListApp';
  item;

  list  = [] ;

  todoList = new Array();
  
  
  addTodo(){
  this.todoList.push(new Todo(this.item));
  console.log(this.list)
  }

  delete(i){
    console.log(i);

    this.todoList.splice(i,1)


  }










} 

