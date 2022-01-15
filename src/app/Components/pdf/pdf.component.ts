import { Component, OnInit } from '@angular/core';
import '@cds/core/input/register.js';
import '@cds/core/icon/register.js';
import { ProductServiceService } from 'src/app/Services/product-service.service';
import { produitVendu } from 'src/app/Models/produitvendu';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})
export class PdfComponent implements OnInit {
  val=true;
  searchb: any ; 
  products:any[]=[];
  produitsVendus : produitVendu [] = []; 



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
    i=0;



    
    addToCommand(id:string){
      if( this.produitsVendus.length > 0) {
        let index = this.produitsVendus.findIndex(pVendu =>{ return pVendu.produit._Id == id} );
        if(index>=0){
          this.produitsVendus[index].quantity= this.produitsVendus[index].quantity + 1;
        }

        else {
          const produitToAdd = this.products[this.products.findIndex(p =>{ return p._Id == id} )]
          this.produitsVendus.push(
            {
              quantity:1,
              totalHt:0.0,
              produit:produitToAdd
            }
          )
        }
        
      }  
      else {
        const produitToAdd = this.products[this.products.findIndex(p =>{ return p._Id == id} )]
        this.produitsVendus.push(
          {
            quantity:1,
            totalHt:0.0,
            produit:produitToAdd
          }
        )
      }      
    }

 cardItem=[];   
   
    close(){
      this.val=true;
    }
}
