import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {dataFake} from '../../data/dataFake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  capaFoto:string = "https://classic.exame.com/wp-content/uploads/2023/04/IA-1.jpg"
  contentTitulo:string = ""
  contentdescricao:string =""
  contentnoticia:string =""
  private id:string | null = "0"

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id")
    )
    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null){
    const result = dataFake.filter(article => article.id == id) [0]

    this.contentTitulo = result.titulo
    this.contentdescricao = result.descrição
    this.capaFoto = result.capaFoto
    if (result.noticia !== undefined) {
      this.contentnoticia = result.noticia;
    }
    

  }

}
