import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})

export class SidebarComponent  {

  constructor (private gifsservice:GifsService) {
    
  }

  buscar(item:string){
    this.gifsservice.buscarGifs(item);
  }

  get historial (){
    return this.gifsservice.historial;
  }

  
  
}
