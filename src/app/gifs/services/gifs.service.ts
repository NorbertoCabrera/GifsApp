import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  
  private _historial:string[]=[]
  private apiKey:string='oJP1NZ3xAErOEodh9BXCR7HAfkeaOSzr'
  private url:string='api.giphy.com/v1/gifs/search?api_key=oJP1NZ3xAErOEodh9BXCR7HAfkeaOSzr&q=messi&limit=10'

  public resultados : any[]=[];


  get historial(){
    return [...this._historial]
  }

  
  
  constructor(private http:HttpClient){} // uso de httpClient en constructor




  
  //metodo para buscar Gifs-------------
  buscarGifs(query:string){

    query=query.trim().toLowerCase();

    if(!this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial=this._historial.splice(0,10)
    } 

    //console.log(this._historial)



    this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=oJP1NZ3xAErOEodh9BXCR7HAfkeaOSzr&q=${query}&limit=10`)
        .subscribe((resp:any)=>{
          console.log(resp.data)
          this.resultados=resp.data;
        })
  }

   




}
