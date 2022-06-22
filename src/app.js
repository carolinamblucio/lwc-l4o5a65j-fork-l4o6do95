import { LightningElement, track } from "lwc";


export default class App extends LightningElement {

 isiluminadorV=true;
 isiluminadorR=false;
 isiluminadorA=false;

 iluminadorVermelho(){
   this.isiluminadorV=true;
   this.isiluminadorR=false;
   this.isiluminadorA=false;

 }
 iluminadorRosa(){
   this.isiluminadorV=false;
   this.isiluminadorR=true;
   this.isiluminadorA=false;

 }
 iluminadorAmarelo(){
   this.isiluminadorV=false;
   this.isiluminadorR=false;
   this.isiluminadorA=true;

 }


 delineadorP=true;
 delineadorC=false;
 delineadorG=false;

 delineadorPreto(){
   this.delineadorP=true;
   this.delineadorC=false;
   this.delineadorG=false;

 }
 delineadorColorido(){
   this.delineadorP=false;
   this.delineadorC=true;
   this.delineadorG=false;

 }
 delineadorGlitter(){
   this.delineadorP=false;
   this.delineadorC=false;
   this.delineadorG=true;

 }

 glossV=true;
 glossR=false;
 glossM=false;

  glossVermelho(){
   this.glossV=true;
   this.glossR=false;
   this.glossM=false;

 }
  glossRosa(){
   this.glossV=false;
   this.glossR=true;
   this.glossM=false;

 }
 glossMarrom(){
  this.glossV=false;
  this.glossR=false;
  this.glossM=true;

 }

 
}

 

