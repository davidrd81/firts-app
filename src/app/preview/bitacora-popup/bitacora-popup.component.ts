import { Component, OnInit } from '@angular/core';
import { BitacoraService } from '../../services/bitacora.service';
import { NgForm } from '@angular/forms';
import { Bitacora } from '../../models/bitacora';
import { ActivatedRoute, Router } from '@angular/router';

// declaracion de variables
declare let M: any;

@Component({
  selector: 'app-bitacora-popup',
  templateUrl: './bitacora-popup.component.html',
  styleUrls: ['./bitacora-popup.component.css'],
  providers: [BitacoraService]
})
export class BitacoraPopupComponent implements OnInit {
  id: string;
  lista: string [] = ['06:00-14:00', '14:00-22:00', '22:00-06:00', '06:00-18:00', '18:00-06:00'];
  constructor(
    public bitacoraService: BitacoraService,
    private activateroute: ActivatedRoute,
    private router: Router,
    ) { }
// carga inicial de la pagina
  ngOnInit() {
    this.activateroute.params.subscribe(params => {
      this.id = params['id'];
      this.bitacoraService.getBitacorabyId(this.id)
        .subscribe(
          res => {this.bitacoraService.selectedBitacora = res,
          console.log(res);
          },
          error => console.log(error),
          );
    });
  }

  updateBitacora(form?: NgForm) {
    if (form.value._id) {
      console.log('aun mantiene el valor del id ' + this.bitacoraService.selectedBitacora._id),
      this.bitacoraService.putBitacora(form.value)
      .subscribe(res => {console.log(res),
        M.toast({html: 'update succesfully'});
      });
    } else {
        console.log(form.value);
        this.bitacoraService.postBitacora(form.value)
        .subscribe(res => {
          M.toast({html: 'save succesfully'});
        });
        }
  }

}
