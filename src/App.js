import logo from './logo.svg';
import './App.css';
import InputSearch from './components/InputSearch';
import { PureComponent } from 'react';

class App extends PureComponent{

  state = {
    repo: "facebook/react",
    label: "Type: Bug"
  }

  onChangeRepo = (event) => {
    console.log(event.target.value);
    this.setState({
      repo: event.target.value
    });
  }
  onChangeLabel = (event) => {
    console.log(event.target.value);
    this.setState({
      label: event.target.value
    });
  }

  searchIssues = () => {
    const formatedLabel = this.state.label.replaceAll(" ", "+");
    console.log(formatedLabel);
    fetch("https://api.github.com/repos/"+this.state.repo+"/issues?q=is%3Aopen+label%3A"+formatedLabel)
    .then(res => res.json())
    .then(
      (result) => {
        console.log(result);
      }
    )
  }

  render() {
    return (
      <div className="App">
        <InputSearch
          repo={this.state.repo}
          label={this.state.label}
          onChangeRepo={(event) => this.onChangeRepo(event)}
          onChangeLabel={(event) => this.onChangeLabel(event)}
          onSearch={() => this.searchIssues()}
        />
      </div>
    )
  }
}

export default App;
