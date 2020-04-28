import { Component, OnInit } from '@angular/core';
import { BitacoraService } from '../services/bitacora.service';
import { NgForm } from '@angular/forms';
import { Bitacora } from '../models/bitacora';
import { Router } from '@angular/router';


declare let M: any;

@Component({
  selector: 'app-bitacora',
  templateUrl: './bitacora.component.html',
  styleUrls: ['./bitacora.component.css'],
  providers: [BitacoraService]
})
export class BitacoraComponent implements OnInit {
  lista: string [] = ['06:00-14:00', '14:00-22:00', '22:00-06:00', '06:00-18:00', '18:00-06:00'];
  constructor(public bitacoraService: BitacoraService, private router: Router ) { }
  ngOnInit() {
    this.getBitacora();
    console.log(this.bitacoraService.bitacoras);
  }

  addBitacora(form?: NgForm) {
    if (form.value._id) {
      this.bitacoraService.putBitacora(form.value)
      .subscribe(res => {console.log(res);
      });
    } else {
        console.log(form.value);
        this.bitacoraService.postBitacora(form.value)
        .subscribe(res => {
          this.resetForm(form);
          M.toast({html: 'save succesfully'});
          this.getBitacora();
        });
        }
  }

  getBitacora() {
    this.bitacoraService.getBitacora()
    .subscribe(res => {
      this.bitacoraService.bitacoras = res as Bitacora[];
      console.log(res);
    });
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.bitacoraService.selectedBitacora = new Bitacora();
    }
  }

  updateBitacora(_id: string) {
    this.router.navigate(['/updatebitacora', _id]),
    console.log(_id);
  }

  // tslint:disable-next-line: variable-name
  deleteBitacora(_id: string) {
      if (confirm ('are you sure you want to delete it?')) {
        this.bitacoraService.deleteBitacora(_id)
    .subscribe(res => {
        this.getBitacora();
      });
    }
  }
}
