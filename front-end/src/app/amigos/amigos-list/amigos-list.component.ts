import { Component, OnInit } from '@angular/core';
import { Amigo } from '../shared/amigo';
import { AmigosService } from '../shared/amigos.service';
import { Api } from '../shared/api';

@Component({
  selector: 'app-amigos-list',
  templateUrl: './amigos-list.component.html',
  styleUrls: ['./amigos-list.component.css']
})
export class AmigosListComponent implements OnInit {

  amigos: Amigo[] = [];
  message: string = '';

  constructor(private amigosService: AmigosService) { }

  ngOnInit(): void {
    this.amigosService.getAll().subscribe(amigos => {
      this.amigos = amigos.data;
    });
  }

  onAmigoDelete(amigo: Amigo): void {
    let index = this.amigos.findIndex((amigoItem) => amigoItem.id === amigo.id);
    this.amigos.splice(index, 1);

  }

}
