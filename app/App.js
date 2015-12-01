
import React, {createClass} from 'react';
import {render}             from 'react-dom';

// const Item = createClass({


// });

const App = createClass({
    getInitialState(){
      return {
        list: [],
      };
    },

    handleSubmit(e){
      e.preventDefault();
      // console.log(this.refs.newItemForm[0].value);
      if (this.refs.newItemForm[0].value) {
        const newList = this.refs.newItemForm[0].value;
        
        this.setState({
          list: [...this.state.list, newList],
        });

        this.refs.newItemForm[0].value = '';
      }
    },

    handleDelete(index){
      const newArr = this.state.list.slice();
      newArr.splice(index, 1);
      this.setState({
        list: newlist,
      });
    },

     render(){
      console.log(this.state.list);
      const list = this.state.list.map((item, index) => {
        return (
                <li key = {`${item}${index}`}>
                  <i onClick={this.handleDelete.bind(null, index)} className='large close icon'/>
                  {item}
                </li>
          );
      })
      return (
        <div className ='ui container'> 
          <h1>
              React is Here for a Todo list.
          </h1>

          <form  ref='newItemForm' onSubmit={this.handleSubmit}>
            <input placeholder='New Item'/>
            <button>
              Add item 
            </button>
          </form>
          {list}
        </div>
        );
     }
});

//props


// class App extends Component {
//   render() {
//     return (
//       <div>
//         <h1>
//           Welcome to the react starter.
//         </h1>
//       </div>
//     );
//   }
// }

render(<App />, document.getElementById('root'));