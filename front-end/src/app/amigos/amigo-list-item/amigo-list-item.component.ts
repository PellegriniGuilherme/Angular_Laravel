import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Amigo } from '../shared/amigo';
import { AmigosService } from '../shared/amigos.service';


@Component({
  selector: 'app-amigo-list-item',
  templateUrl: './amigo-list-item.component.html',
  styleUrls: ['./amigo-list-item.component.css']
})
export class AmigoListItemComponent implements OnInit {

  @Input()
  amigo!: Amigo;

  @Output()
  onDeleteAmigo = new EventEmitter();

  constructor( private amigosService: AmigosService) { }

  ngOnInit(): void { }

  delete(amigo: Amigo): void {
    if(amigo.id){
      this.amigosService.delete(amigo.id).subscribe((res) => {
        this.onDeleteAmigo.emit(amigo);
      });
    }
  }

}
