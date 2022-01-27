import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Amigo } from '../shared/amigo';
import { AmigosService } from '../shared/amigos.service';

@Component({
  selector: 'app-amigos-form',
  templateUrl: './amigos-form.component.html',
  styleUrls: ['./amigos-form.component.css']
})
export class AmigosFormComponent implements OnInit {

  amigo: Amigo = new Amigo();
  update: boolean = false;
  title: string = "Indicando um amigo";
  error: string = "";
  errors: Amigo = new Amigo();

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private amigosService: AmigosService,
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get("id");
    if(id){
      this.amigosService.getById(parseInt(id)).subscribe((amigo) => {
        this.update = true;
        this.amigo = amigo.data;
        this.title = "Alterando um amigo";
      });
    }
    
  }

  onSubmit(): void {
  
    if(this.update && this.amigo.id && this.amigo.status_id) {
      this.amigosService.update(this.amigo.id, { status_id : this.amigo.status_id}).subscribe(
        result => {
          this.router.navigate(['']);
        }, err => {
          let error = err.error;
          this.error = error.message;
          if(error.errors){
            this.errors = error.errors;
          }
        }
      )
    }else{
      this.amigosService.create(this.amigo).subscribe(
        result => {
          this.router.navigate(['']);
        }, err => {
          let error = err.error;
          this.error = error.message;
          this.errors = error.errors;
        }
      );
    }
  
  }



}
