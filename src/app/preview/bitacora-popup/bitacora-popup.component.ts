import { Component, OnInit, Input, Host } from '@angular/core';
import { NgForm, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Validators } from '@angular/forms';
// importacion de otros
import { BitacoraComponent } from 'src/app/bitacora/bitacora.component';
// importacion de servicios
import { BitacoraService } from '../../services/bitacora.service';
import { TurnoService } from '../../services/turno.service';
// importacion de modelos
import { Bitacora } from '../../models/bitacora';
import { Turno } from '../../models/turno';

// declaracion de variables
declare let M: any;


@Component({
  selector: 'app-bitacora-popup',
  templateUrl: './bitacora-popup.component.html',
  styleUrls: ['./bitacora-popup.component.css'],
  providers: [BitacoraService, BitacoraComponent, TurnoService]
})
export class BitacoraPopupComponent implements OnInit {
  @Input() item: any;
  id: string;
  turno: Turno;
  bitacora: Bitacora;
  bitacoraForm = this.fb.group({
    name: ['', Validators.required],
    usuario: ['', Validators.required],
    turno: ['', Validators.required],
    area: ['', Validators.required],
    position: ['', Validators.required],
  });
  constructor(
    public turnoservice: TurnoService,
    private bitacoraService: BitacoraService,
    private activateroute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    @Host() private _app: BitacoraComponent,
    ) {
      this.bitacora = new Bitacora();
      console.log(this._app);
    }
// carga inicial de la pagina
  ngOnInit() {
    this.activateroute.params.subscribe(params => {
      this.id = params['id'];
      this.bitacoraService.getBitacorabyId(this.id)
        .subscribe(
          res => {this.bitacoraForm.patchValue(res),
            this.bitacora = res,
          console.log(res);
          },
          error => console.log(error),
          );
    });
    this.getTurno();
  }

  // CERRAR DIALOG

  updateBitacora(form?: NgForm) {
    console.log('antes de if ' + this.bitacora._id);
    if (this.bitacora._id) {
      this.bitacoraForm.value['_id'] = this.bitacora._id;
      console.log('aun mantiene el valor del id ' + this.bitacora._id + ' ' + this.bitacoraForm.value._id),
      this.bitacoraForm.value['_id'] = this.bitacora._id;
      this.bitacoraService.putBitacora(this.bitacoraForm.value)
      .subscribe(res => {console.log(res),
        M.toast({html: 'update succesfully'}),
        this.router.navigate(['/bitacora']);
      });
    } else {
        console.log('nuevo registro' + this.bitacoraForm.value);
        this.bitacoraService.postBitacora(this.bitacoraForm.value)
        .subscribe(res => {
          this.bitacoraForm.reset();
          M.toast({html: 'save succesfully'}),
          // accedo a la constante ActT de bitacora component para cerrar el formulario y vuelva a refrescar el listado //
          this._app.ActT = false,
          this._app.getBitacora();
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

  getTurno() {
    this.turnoservice.getTurno()
    .subscribe(res => {
      this.turnoservice.turno = res as Turno[];
      console.log(res);
    });
  }
}
