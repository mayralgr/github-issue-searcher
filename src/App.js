import logo from './logo.svg';
import './App.css';
import InputSearch from './components/InputSearch';
import { PureComponent } from 'react';
import IssueCard from './components/IssueCard'
class App extends PureComponent{

  state = {
    repo: "angular/angular",
    label: "Type: Bug",
    issues: []
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
    const query = "https://api.github.com/repos/"+this.state.repo+"/issues?q=is%3Aopen+label%3A"+formatedLabel;
    console.log(`query: ${query}`)
    fetch(query)
    .then(res => res.json())
    .then(
      (result) => {

        const issues = result.map((issue, index) => {
            const { html_url, title, state } = issue
            return (<IssueCard key={index} 
              html_url={html_url} 
              title={title} 
              state={state}/>)
        })


        this.setState({
          issues
        })
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

        {this.state.issues.map(issue => issue)}

      </div>
    )
  }
}

export default App;
