import React from "react";
import { Button, Container, Divider, Header, Icon, Input, Segment } from "semantic-ui-react";

class App extends React.Component {
  
  constructor(){
    super();
    this.state = {
      task: "",
      tasks: [
        "Hire a good developer!",
        "Already Found one, i guess.",
        "Lets hope he's as good as he says."
      ]
    };
    this.handleTask = this.handleTask.bind(this);
    this.addTask = this.addTask.bind(this);
  }


  addTask(){
    var tasks = this.state.tasks;
    tasks.push(this.state.task);
    this.setState({
      task: "",
      tasks: tasks,
    });
    
  }

  handleTask(event){
    this.setState({
      task: event.target.value
    });
  }

  render(){

    return (
      <Container text textAlign="center" >
        <Header as="h2">My Todo List with React & Sementic UI</Header>
        <Segment>
          <Input onChange={this.handleTask} value={this.state.task} size="big" placeholder="Task Name" action={{
            color: "blue",
            icon: "plus",
            content: "Add",
            onClick: () => this.addTask()
          }}></Input>
          {/* <Button primary>
            <Icon name="plus" />Add</Button> */}
        </Segment>
        <Segment.Group raised>
          {this.state.tasks.map(element => (<Segment>{element}</Segment>))}
        </Segment.Group>
      </Container>
    );
  }
}

export default App;
