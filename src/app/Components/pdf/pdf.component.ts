import { Component, OnInit } from '@angular/core';
import '@cds/core/input/register.js';
import '@cds/core/icon/register.js';
import { ProductServiceService } from 'src/app/Services/product-service.service';
import { produitvendu } from 'src/app/Models/produitvendu';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})
export class PdfComponent implements OnInit {
  val=true;
  searchb: any ; 
  products:any[]=[];
  constructor(private ps:ProductServiceService) { }

  ngOnInit(): void {
    this.getproducts();
 
  }
  getproducts() {
    this.ps.getAllproducts().subscribe(res=>{
      this.products=res ;  
      console.log(res);
    })
  }
  search(){
    if(this.searchb==""){
      this.ngOnInit();
    }else { 
      this.products=this.products.filter(res=>{
        return res.name.toLocaleLowerCase().match(this.searchb)
      })
    }
    }
    qte:any[]=[];
   productadd:any[]=[];
    clrtab:any[]=[];
    exist: produitvendu[]=[];
    i=0;
    addthis(id:string){
      this.ps.getproductByid(id).subscribe(res=>{
        this.exist[this.i].produit=res;
        this.i++;
        console.log(this.exist);

     //   this.productadd.push(res) ;
      //  this.clrtab.push(res)  
        //console.log(this.productadd);
        //const exist=this.cardItem.find((item:any)=>{
       // for (let i = 0; i < this.clrtab.length; i++) {
       //    for(let j=i+1;j<this.clrtab.length;j++){
      //    if(this.clrtab[i].name==this.clrtab[j].name){
             //this.clrtab[i].quantity+=1;
              //lezem qte n'incrementi aleha lenna w magher mat3alla9 al boucle khater 9a3ed njarreb biih asba 
       //     this.clrtab.splice(j,1);}
          
        
        });

this.val=false ;
      
    }
 cardItem=[];   
   
    close(){
      this.val=true;
    }
}
