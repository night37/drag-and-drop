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

  }

  

  generateHTML(){

    let labelSourceHTML = ""
    let articleSourceHTML =""
    let newDoc = document.implementation.createHTMLDocument("depot html ")
    let container =newDoc.createElement("div")
    container.setAttribute("container","div")
    let h1 = newDoc.createElement ("h1")
    let article = newDoc.createElement("article")
  
    newDoc.body.appendChild(container)
    container.appendChild(h1)
    //div.appendChild(h1)
    //div.append(article)
    
    if (this.depotArticles.length > 0){
      for(let article of this.depotArticles){
        
        labelSourceHTML = article.label 
        articleSourceHTML = article.content 

        
      }
    }
    h1.textContent = labelSourceHTML;
    article.textContent = articleSourceHTML

   
    //window.open(newDoc,"_blank")   
  }
  
   Export2Doc(element, filename = ''){
     
    var preHtml = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>";
    var postHtml = "</body></html>";
    let depotArticles = this.depotArticles

    console.log(depotArticles)
    var html = preHtml+document.getElementById(element).innerHTML+postHtml;

    var blob = new Blob(['\ufeff', html], {
        type: 'application/msword'
    });
    
    // Specify link url
    var url = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(html);
    
    // Specify file name
    filename = filename?filename+'.doc':'document.doc';
    
    // Create download link element
    var downloadLink = document.createElement("a");

    document.body.appendChild(downloadLink);
    
    if(navigator.msSaveOrOpenBlob ){
        navigator.msSaveOrOpenBlob(blob, filename);
    }else{
        // Create a link to the file
        downloadLink.href = url;
        
        // Setting the file name
        downloadLink.download = filename;
        
        //triggering the function
        downloadLink.click();
    }
    
    document.body.removeChild(downloadLink);
}

}
