import { Component, OnInit } from '@angular/core';

import { HttpClientModule} from '@angular/common/http';
import { HttpClient} from '@angular/common/http';
import { MatTableModule } from '@angular/material';



export interface PeriodicElement {
  imageUrl: string;
    
}
const ELEMENT_DATA: PeriodicElement[] = [
  { imageUrl: 'https://ecomtrails.s3.ap-south-1.amazonaws.com/test/business/Company_56/bannerImage-cf20200820_1514287636307928_facf5fedd4_b.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAXI2OWQ7NEHIQXEHG%2F20200919%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20200919T091549Z&X-Amz-SignedHeaders=host&X-Amz-Expires=1200&X-Amz-Signature=65d1f59f0236938272c2a61b6f0fc51cc00693e3f3c67ec12d85ee8c5cf7f977'},
  {imageUrl: 'https://ecomtrails.s3.ap-south-1.amazonaws.com/test/business/Company_56/bannerImage-cf20200820_1514287636307928_facf5fedd4_b.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAXI2OWQ7NEHIQXEHG%2F20200919%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20200919T091549Z&X-Amz-SignedHeaders=host&X-Amz-Expires=1200&X-Amz-Signature=65d1f59f0236938272c2a61b6f0fc51cc00693e3f3c67ec12d85ee8c5cf7f977'},
  {imageUrl: 'https://ecomtrails.s3.ap-south-1.amazonaws.com/test/business/Company_56/bannerImage-cf20200820_1514287636307928_facf5fedd4_b.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAXI2OWQ7NEHIQXEHG%2F20200919%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20200919T091549Z&X-Amz-SignedHeaders=host&X-Amz-Expires=1200&X-Amz-Signature=65d1f59f0236938272c2a61b6f0fc51cc00693e3f3c67ec12d85ee8c5cf7f977'},
  {imageUrl: 'https://ecomtrails.s3.ap-south-1.amazonaws.com/test/business/Company_56/bannerImage-UO20200828_01595149820banner5.png?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAXI2OWQ7NEHIQXEHG%2F20200919%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20200919T094950Z&X-Amz-SignedHeaders=host&X-Amz-Expires=1200&X-Amz-Signature=3d2bf7a7cc79995998e8593400bcd060695fb598e6fa27e7619c03a4c57351c7'},


];
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
details=[]
uname:string;
password:string;
addlist:any=[];
displayedColumns: string[] = [ 'imageUrl'];
dataSource = ELEMENT_DATA;
 
  
  constructor(private http:HttpClient) {
    
   }
   

  ngOnInit():void {
    
     this.uname = localStorage.getItem('UserName');
     this.password = localStorage.getItem('Password');


     
  }
  showdetails(){
    let url="https://www.ecomtrails.com/ecom_api_test/index.php/user/fetch_all_content_slider";
    this.http.post(url,{
      comp_num:56

    }).toPromise().then((data:any)=>{
      console.log(data.result)
      return this.details=data.result
    
    })
  }
  tabledetails(){
    this.dataSource;
  }
  

}
