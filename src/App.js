import React, { Component } from 'react';
import Todoitem from './todoitem';
import './App.css';
import './bootstrap.min.css';
import Time from "./date-time";
import list from './array';

class App extends Component {
  constructor(){
    super();
    this.state = {
      todos: [],
      newtodo: ''
    }
  }

  componentDidMount(){
    this.setState(()=>({ todos: list }));
  }

  submit = (e) =>{
    e.preventDefault();
    
    let { newtodo, todos } = this.state;

    if(newtodo === ""){
      
      alert("The input field can not be empty!");

    }else{

      newtodo = { id: todos.length, content: newtodo, isChecked: false };

      this.setState(()=>({
        todos: [ ...todos, newtodo ],
        newtodo: ""
      }))

    }
  }

  onChange = e =>{
    const { name, value } = e.target;
    this.setState(()=>({
      [name]: value
    }))
  }

  deleteAll = () =>{
    this.setState(()=>({ todos: [] }))
  }

  toggleChecked = (e) =>{
    const { id } = e.target;

    const { todos } = this.state;

    let the_one = todos.filter(todo => todo.id === +id)[0];
    the_one.isChecked = !the_one.isChecked;
    

    this.setState(()=>({
      todos: todos
    }))

  }

  trash = e =>{
    const { id } = e.target;

    const { todos } = this.state;

    let new_todos = todos.filter(todo => todo.id !== +id);

    this.setState(()=>({ todos: new_todos }));
  }

  render(){

    const { newtodo, todos } = this.state;


    let todoArray = todos.length < 1 ? <legend>Add item to your list</legend> : todos.map(todo =>(
      <Todoitem 
        key={todo.id} identifier={todo.id} 
        todo={todo.content} checked={todo.isChecked} 
        toggle={this.toggleChecked} trash={this.trash}
      />
    ))

    return (

      <React.Fragment>
        <div className="row mt-5">

        <div className="col-md-2"></div>

          <div className="col-md-8">
            <div className="card shadow">
              <div className="card-header">
                <Time/>
              </div>
              <div className="card-body">
                {todoArray}
              </div>
              <div className="card-footer text-muted">
               
                <form onSubmit={this.submit}>
                  <input type="text" value={newtodo} name="newtodo" onChange={this.onChange} />
                  <input type="submit" className="btn btn-info m-1" value="Add" />
                  {(todos < 1) ? "" : <input type="button" className="btn btn-warning m-1" value="Delete all" onClick={this.deleteAll} />}
                </form>

                
              </div>
            </div>
          </div>{/* col-md-8 */}

          <div className="col-md-2"></div>
        </div>{/* row */}
      </React.Fragment>

    );
  }
}

export default App;