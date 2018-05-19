import React, { Component } from 'react';

// Listコンポーネントの作成
function List(props){
  return(
    <ul>
      {props.todo.map( (todo, i) => {
        return <li key={i}>  {todo.title} <input type="button" value="delete" onClick={()=>props.deleteTodo(i)}/></li>
      })}
    </ul>
  )
}
// Inputコンポーネントの作成
class Input extends Component{
  constructor(props){
    super(props);
    this.addTodo=this.addTodo.bind(this);
  }
  addTodo(){
    this.props.addTodo(this.refs.newText.value);
    this.refs.newText.value='';
  }
  render(){
    return(
      <div>
      <input type="text" ref="newText"/>
      <input type="button" value="add" onClick={this.addTodo}/>
      </div>
    )
  }

}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todo: [
       { title: 'JavaScriptを勉強' } ,
       { title: 'Reactを勉強' },
       { title: 'typescriptを勉強' }
      ]
    };
    this.addTodo = this.addTodo.bind(this);//thisを固定するためのテクニック
    this.deleteTodo=this.deleteTodo.bind(this);
  }
  // 新規追加
  addTodo(value) {
    // 追加
    this.state.todo.push({
      title: value
    });
    // 保存
    this.setState({
      todo : this.state.todo
    });
  }
  // 削除機能
  deleteTodo(i){
    //削除
    this.state.todo.splice(i,1);
    //保存
    this.setState({
      todo: this.state.todo
    })
  }
  render() {
    return (
      <div>
        <h1>TODO</h1>
        <Input addTodo={this.addTodo} />
        <List todo={this.state.todo} deleteTodo={this.deleteTodo}/>
      </div>
    );
  }
}

export default App;
