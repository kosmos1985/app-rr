import React from 'react';
import "../styles/KontaktPage.css";
import {Prompt} from 'react-router-dom';

class KontaktPage extends React.Component{
    state ={
        value:''
    }
    handleSubmit =(e)=>{
        e.preventDefault()
        this.setState({
            value:''
        })
    }

    handleChange=(e)=>{
    this.setState({
    value: e.target.value
    })
    }

    render(){
    return ( 
        <div className="kontakt">
            <form onSubmit={this.handleSubmit}>
                <h3>Napisz do nas!</h3>
                <textarea value={this.state.value}
                onChange={this.handleChange} 
                placeholder="Wpisz wiadomość"></textarea>
                <button>Wyślij</button>
            </form>
            <Prompt 
            when={this.state.value}
            message="Masz niewypełniony formularz
            Czy napewno chcesz opuścić tę stronę?"
            />
        </div>
     );
    }
}
 
export default KontaktPage;