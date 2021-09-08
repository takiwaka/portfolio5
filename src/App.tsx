import React from "react";
import Load from './Load'
import cssTest from './test.module.css';

interface Props { }

interface State {
  message: string;
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      message: "最初のメッセージ"
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      message: "ボタンが押されました"
    });
  }

  render() {
    return (
      <React.Fragment>
        <p>Hello world</p>
        <Sample num={"5"} />

        <p>{this.state.message}</p>
        <button onClick={this.handleClick}>ボタン</button>
      </React.Fragment>
    );
  };

  render() {
    return (
      <React.Fragment>
        <p className={cssTest.text}>これはテストですと。</p>

      </React.Fragment>
    );
  };
};

export default App;