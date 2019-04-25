import React, { Component } from 'react';
import './App.css';
import marked from 'marked';

const placeholder = 
`# Sparky
![campfire](https://i.ibb.co/FKLnMjx/mole2.png)
Sparky.
A Fun Markdown Editor.
## There are many editors, but this one has a hedgehog. 
[CLICK ME TO SEE MORE HEDGEHOGS!!](http://www.cutestpaw.com/tag/hedgehogs/)

**Feeling Bold?** Try creating your own markdown editor!

> This is a blockquote, but don't quote me on that.
  
Oh hey, I'm \`Inline Code\`, good to meet you!.

\`\`\`
// here's a code block!:
const codeblock = () => 'lots of code';
\`\`\`

### Dizzy List
1. Two
1. Three
1. Four
`

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: placeholder

      
    }
  }

  onChange(item) {
    this.setState({
      input: item
    });
  }

  render() {
    marked.setOptions({
      breaks: true
   });
    return (
      <div className="App">
        <div className="preview">
            <h1 className="prevTitle">PREVIEW</h1>
            <div className="prevBack" id="preview" dangerouslySetInnerHTML={{__html: marked(this.state.input)}}></div>  
        </div>
        <div className="editor">
          <h1 className="edTitle">EDITOR</h1>
          <textarea className="input pop popE" value={this.state.input} onChange={e => this.onChange(e.target.value)} id="editor"></textarea>
        </div>
      </div>
    );
  }
}


export default App;
