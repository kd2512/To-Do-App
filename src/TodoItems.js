import './App.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'

class TodoItems extends React.Component{

    render(){

        var itemList = this.props.list;
        var list= itemList.map((item)=>{
        return (<div>
                    <li key={item.key}>{item.text}
                    <span>
                        <FontAwesomeIcon className="icons" icon={faTrash} 
                        onClick={()=>this.props.deleteItem(item.key)}/>
                    </span>
                    </li>
                    
                </div>  )
        });


        return(
            <div>
                <ul className="todoItems">
                    {list}
                    
                </ul>
                
            </div>
        )
    }
}

export default TodoItems;