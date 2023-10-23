
import { Component } from "react";
import pencil from './pencil.png'

export class MyPlans extends Component {
state ={
    userInput : "",
    listToDo : []
}
onChangeEvent (e) {
this.setState ({userInput : e})
}


submitList (e) {
e.preventDefault ();
}


 addPlans (input) {
if ( input === '') {
    alert ( 'Please add any text')
}
else {
    let listArray = this.state.listToDo;
    listArray.push (input);
    this.setState (
        {listToDo : listArray, userInput : ''})
}
 }


 crossedPlan (e) {
const li = e.target;
li.classList.toggle ('crossed');
 }


 removeItem () {
    let listArray = this.state.listToDo;
    listArray = [];
    this.setState ({
        listToDo : listArray})
 }

render () {
    return (
        <div> 
            <form onSubmit={this.submitList}>
<div className = "container">
<input type="text" placeholder="What is your plans for today?" 
onChange ={(e) => {this.onChangeEvent(e.target.value)}} value = {this.state.userInput}/>
</div>

<div className="container">
<button className="btn" onClick={() => this.addPlans (this.state.userInput)}> Add</button>
</div>
<div className="container">

</div>

<ul>
    {this.state.listToDo.map ((item, index) => (
        <li onClick={ this.crossedPlan} key={index}>
<img src={pencil} width="35px" alt="pencil"/>
{item} 
        </li>
    ))}
</ul>

<div className="container">

<button className= "btn-remove" onClick={ () => this.removeItem()}> Remove </button>
</div>
     </form>
        </div>
    )
}

}


