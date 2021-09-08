import React from "react";
import Load from './Load'


interface Props {}

interface State {
  message: string;
}

class App extends React.Component<Props,State> {
  constructor(props:Props){
    super(props);

    this.state = {
      message:"最初のメッセージ"
    };

this.handClick = this.handClick.bind(this);

handClick(){
  this.setState({
    message:"ボタンが押されました"
  });
}

  }
  render() {
    return (
      <React.Fragment>
        <p>Hello world</p>
        <Load num={"5"} />

        <p>{this.state.message}</p>
        <button onclick={this.handClick}>ボタン</button>
      </React.Fragment>
    );
  }
}

export default App;