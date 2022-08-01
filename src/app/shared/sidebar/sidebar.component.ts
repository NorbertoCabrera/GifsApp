import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent  {

  constructor(private gisfService: GifsService) { }
  get historial(){
    return this.gisfService.historial;
  }
  
  get http(){
   return;
  }
  buscar(item:string){
   
    this.gisfService.buscarGifs(item);
    

    }
  


}
 