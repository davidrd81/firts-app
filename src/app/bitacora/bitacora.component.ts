import { Component, OnInit, Inject } from '@angular/core';
import { BitacoraService } from '../services/bitacora.service';
import { NgForm, FormBuilder } from '@angular/forms';
import { Bitacora } from '../models/bitacora';
import { HomeComponent } from '../home/home.component';
import { BitacoraPopupComponent } from '../preview/bitacora-popup/bitacora-popup.component';
import { Router } from '@angular/router';
import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';



declare let M: any;

@Component({
  selector: 'app-bitacora',
  templateUrl: './bitacora.component.html',
  styleUrls: ['./bitacora.component.css'],
  providers: [BitacoraService]
})
export class BitacoraComponent implements OnInit {
  // tabla
  displayedColumns: string[] = ['Name', 'Usuario', 'Area', 'posición', 'Turno', 'bottom_edit', 'bottom_delete'];
  dataSource: Bitacora;

  crear: any;
  salida: any;
  r: any;
  ActT = false;
  constructor(
    public bitacoraService: BitacoraService,
    private router: Router,
    private formbuilder: FormBuilder,
    private dialog: MatDialog,
    ) { }

  ngOnInit() {
    this.getBitacora();
  }

  openDialog() {
    this.dialog.open(BitacoraPopupComponent);
  }

/*  addBitacora(form?: NgForm) {
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
  */
 addBitacora(salida) {
   salida = {ActT: true, crear: true};
   return( salida );
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
