import './App.css';
import React from 'react';
import TodoItems from './TodoItems';

class TodoList extends React.Component{

    constructor(props){
        super(props);

        this.state={
            items:[]
        };

        this.addItem= this.addItem.bind(this);
        this.deleteItem=this.deleteItem.bind(this);
    }

    addItem=(event)=>{
        var inputElement=this.refs.inputElement.value;
        if(inputElement!==""){
            var currentItem={
                text: inputElement,
                key: Date.now()
            };

            const items= [...this.state.items,currentItem];
            this.setState({
                items:items
            },()=>{
                console.log(this.state.items);
            });

            this.refs.inputElement.value="";
            currentItem="";
        }
        event.preventDefault();
    }

    deleteItem=(key)=>{
        var newItems = this.state.items.filter(item=> item.key!==key);
        this.setState({items:newItems}
        );
        
    }



    render(){
        return(
            <div className="todoListMain">
                <form onSubmit={this.addItem}>
                    <input 
                    className="items" 
                    type="text" placeholder="Please enter your tasks" 
                    ref="inputElement"></input>
                    <button className="add" type="submit">Add</button>
                </form>
                
                <div>
                    <TodoItems list={this.state.items} deleteItem={this.deleteItem}/>
                </div>

            </div>
            
        )
    }
}

export default TodoList;