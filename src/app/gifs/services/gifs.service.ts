import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GifsSearchResponse, Gif } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  
  private _historial:string[]=[]
  private servicioURL:string='https://api.giphy.com/v1/gifs'
  private apiKey:string='oJP1NZ3xAErOEodh9BXCR7HAfkeaOSzr'
  private url:string='api.giphy.com/v1/gifs/search?api_key=oJP1NZ3xAErOEodh9BXCR7HAfkeaOSzr&q=messi&limit=10'

  public resultados : Gif[]=[];


  get historial(){
    return [...this._historial]
  }

  
  
  constructor(private http:HttpClient){// uso de httpClient en constructor
    this._historial=JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados=JSON.parse(localStorage.getItem('resultados')!) || [];
  } 




  
  //metodo para buscar Gifs-------------
  buscarGifs(query:string){

    query=query.trim().toLowerCase();

    if(!this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial=this._historial.splice(0,10)
      localStorage.setItem('historial', JSON.stringify( this._historial));
      
    } 

    //console.log(this._historial)

    const params =new HttpParams()
          .set('api_key',this.apiKey)
          .set('limit','10')
          .set('q',query);

    this.http.get<GifsSearchResponse>(`${this.servicioURL}/search`,{params})
        .subscribe((resp)=>{
          console.log(resp.data)
          this.resultados=resp.data;
          localStorage.setItem('resultados',JSON.stringify(this.resultados));
        })
  }
 
   




}
