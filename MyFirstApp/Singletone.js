import React from 'react';

export  default class Singletone extends React.Component{
    static sharesingletone = null;

    static getInstance(){
        if (this.sharesingletone == null){
            this.sharesingletone = new Singletone();
        }

        return this.sharesingletone;
    }

    constructor(props){
        super(props);
        this.state = {
            dataArray: [],
            index : 0,
            loggedInuseremail:'',
            isInserted:false,
            isdeleted:false,
            isedited:false,
            // secondScreenPointer: null,
        }
    }
    _returnDataArray = ()=>{


        var tempdataArray = [];
        for (var i = 0; i < this.state.dataArray.length; i++) {

            if (Singletone.getInstance().loggedInuseremail == this.state.dataArray[i].Author){
                tempdataArray.push(this.state.dataArray[i])
            }
        }

        console.log('Temp array is ',tempdataArray);
        return tempdataArray;
        // return this.state.dataArray;
    }
    _savePointerSecondScreen=(pointer)=>{
        this.state.secondScreenPointer=pointer;
    }

    _insertelements = (title,notes,Authorid) =>{
        var dataarraycount = this.state.dataArray.count;
        this.state.dataArray.push({Name:title,Note:notes,index:this.state.index,Author:Authorid})
        this.state.index = this.state.index+1;
        if(this.state.dataArray.count>dataarraycount){
            this.state.isInserted = true;
        }
        this.state.secondScreenPointer.updatestate();
    }
    _deleteElement = (removaitemtitlename ) =>{
        var removaltitlename =  removaitemtitlename;

        for (var i = 0; i < this.state.dataArray.length; i++) {

            if (removaltitlename == this.state.dataArray[i].Name){
                var removalindexnumber = i;
            }
        }

        var removed_elements =  this.state.dataArray.splice(removalindexnumber,1)
        console.log("removed element is ",removed_elements);
        console.log("Array after removal ",this.state.dataArray);
        this.state.secondScreenPointer.updatestate();
    }

    _editElement = (removeitemindex,title,content,AuthorEmail) =>{

        var newDict = {
            Name : title,
            Note : content,
            index: removeitemindex,
            Author: AuthorEmail
        }
    console.log("new dict is ",newDict);

        var foundIndex = this.state.dataArray.findIndex(x => x.index == newDict.index);
        this.state.dataArray[foundIndex] = newDict;
        this.state.secondScreenPointer.updatestate();

    }
}