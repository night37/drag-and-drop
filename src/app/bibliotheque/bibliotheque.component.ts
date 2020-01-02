import { Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {saveAs} from "file-saver";
import * as data from "../json/data.json";
//import {Document, HeadingLevel, Paragraph, Packer,} from "docx";













@Component({
  selector: 'app-bibliotheque',
  templateUrl: './bibliotheque.component.html',
  styleUrls: ['./bibliotheque.component.css']
})

export class BibliothequeComponent  {

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;

  }



  
  bibliothequeArticles = [
    {
      id: 1,
      label: "titre1", 
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia blanditiis amet sed doloribus temporibus. Quaerat, quibusdam, incidunt ab amet, esse nostrum perspiciatis perferendis neque eos ad beatae voluptas dolore doloremque."
    },
    {
      id: 2,
      label: "titre2", 
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia blanditiis amet sed doloribus temporibus. Quaerat, quibusdam, incidunt ab amet, esse nostrum perspiciatis perferendis neque eos ad beatae voluptas dolore doloremque."
    },    
    {
      id: 3,
      label: "titre3", 
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia blanditiis amet sed doloribus temporibus. Quaerat, quibusdam, incidunt ab amet, esse nostrum perspiciatis perferendis neque eos ad beatae voluptas dolore doloremque."
    },    
    {
      id: 4,
      label: "titre4", 
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia blanditiis amet sed doloribus temporibus. Quaerat, quibusdam, incidunt ab amet, esse nostrum perspiciatis perferendis neque eos ad beatae voluptas dolore doloremque."
    },    
    {
      id: 5,
      label: "titre5", 
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia blanditiis amet sed doloribus temporibus. Quaerat, quibusdam, incidunt ab amet, esse nostrum perspiciatis perferendis neque eos ad beatae voluptas dolore doloremque."
    },    
    {
      id: 6,
      label: "titre6", 
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia blanditiis amet sed doloribus temporibus. Quaerat, quibusdam, incidunt ab amet, esse nostrum perspiciatis perferendis neque eos ad beatae voluptas dolore doloremque."
    },
    
  ];
  depotArticles = [
    {
      id: 6,
      label: "titre6", 
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia blanditiis amet sed doloribus temporibus. Quaerat, quibusdam, incidunt ab amet, esse nostrum perspiciatis perferendis neque eos ad beatae voluptas dolore doloremque."
    },

  ]

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      
     
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);                        
    }
  }   

  open(content) {
    this.modalService.open(content);
  }

  ngOnInit() {
    const importation =  (data  as  any).default
    this.bibliothequeArticles.push(importation);
    console.log(importation)
    console.log(this.bibliothequeArticles)
  }

  // création d'un element html--------------------

  /* generateHTML(){

    let sourceHTML = ""
    if (this.depotArticles.length > 0){
      for(let article of this.depotArticles){

        sourceHTML += "<h1>" + article.label + "</h1>"
        sourceHTML += "<p>" + article.content + "</p>"

      }
    }
    return sourceHTML    
  }
  
  generateDocx(){
    const doc = new Document ()
    doc.addSection({
      children:[
        new Paragraph({
          text : "hello world"
        })
      ]
    
    })
    Packer.toBuffer(doc).then((buffer) =>{
      let blob = new Blob(["Hello world"],{type:"text/plain"});
      let url = URL.createObjectURL(blob);
      console.log(url)
      //document.querySelector("a").href = url;

   
    });

  } */



}
