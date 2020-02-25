import { Component, OnInit } from '@angular/core';
import { BitacoraService } from '../services/bitacora.service';
import { NgForm } from '@angular/forms';
import { Bitacora } from '../models/bitacora';


declare var M: any;

@Component({
  selector: 'app-bitacora',
  templateUrl: './bitacora.component.html',
  styleUrls: ['./bitacora.component.css'],
  providers: [BitacoraService]
})
export class BitacoraComponent implements OnInit {
  lista: string [] = ['06:00-14:00', '14:00-22:00', '22:00-06:00', '06:00-18:00', '18:00-06:00'];
  constructor(private bitacoraService: BitacoraService) { }
  ngOnInit() {
    this.getBitacora();

  }

  addBitacora(form?: NgForm) {
    if (form.value._id) {
      this.bitacoraService.putBitacora(form.value)
      .subscribe(res => {console.log(res);
      });
    } else {
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

  editBitacora(bitacora: Bitacora) {
      this.bitacoraService.selectedBitacora = bitacora;
  }

  deleteBitacora(_id: string) {
      if (confirm ('are you sure you want to delete it?')) {
        this.bitacoraService.deleteBitacora(_id)
    .subscribe(res => {
        this.getBitacora();
      });
    }
  }
}
