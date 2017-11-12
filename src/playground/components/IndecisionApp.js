import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';

export default class IndecisionApp extends React.Component{
    constructor(props) {
        super(props);
        this.handleDeleteOptions=this.handleDeleteOptions.bind(this);
        this.handleAddOption=this.handleAddOption.bind(this);
        this.handleDeleteOption=this.handleDeleteOption.bind(this);
        this.state ={
            options:[]
        }
        
    }
    
    componentDidMount() {
        console.log('fetching data');
        try{
            const json=localStorage.getItem('options');
            const options=JSON.parse(json);
            if(options) {
                this.setState(()=>({options}));
            }
        }
       catch(e){
           
       }        
    }
    
    componentDidUpdate(prevProps,prevState) {
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
        }
        console.log('saving data');
    }
    handleDeleteOptions(){
        this.setState(()=>({ options: []} ));
    }
    
    handleDeleteOption(optionToRemove){
        this.setState((prevState)=>({
            options:prevState.options.filter((option)=>{
              return optionToRemove!==option;  
            })
            
        }));
    }
    
    handleAddOption(option){
     if(!option) {
         return 'Enter valid value to Add item';
     } else if (this.state.options.indexOf(option)>-1) {
         return 'This option already exists';
     }  
         
       this.setState((prevState)=>({       
           options:prevState.options.concat(option)  
          
       }));
    }
    
    render(){
        const title = 'Indecision'
        const subtitle = 'Put your life in the hands of a computer'
        return(
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action hasOptions={this.state.options.length>0} />
                <Options 
                 options={this.state.options}
                 handleDeleteOptions={this.handleDeleteOptions}
                 handleDeleteOption ={this.handleDeleteOption} />
                <AddOption handleAddOption={this.handleAddOption} />
            </div>
        );
    }
}
