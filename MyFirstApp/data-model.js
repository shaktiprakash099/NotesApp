import React from 'react';


export default class  DataModel extends React.Component{
    static sharedInstance = null ;

    static getInstance(){
        if (this.sharedInstance == null){
            this.sharedInstance = new DataModel();
        }
        return this.sharedInstance;
    }


    constructor(props){
        super(props);
        this.state = {
            userDetailsArray : [],
            index : 0,
        };
    }


    _returnDataArray = ()=>{
        return this.state.userDetailsArray;
    }


    _insertuserdetails = (email,password)=>{
        this.state.userDetailsArray.push({UserEmail:email,UserPassword:password,index:this.state.index});
        this.state.index=this.state.index+1;
    }

}