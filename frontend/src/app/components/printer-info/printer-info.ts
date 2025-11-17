import { Component, Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { Printer } from '../../model/printer.model';
import { NgClass } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';

@Component({
  selector: 'app-printer-info',
  imports: [
    MatCardModule,
    NgClass,
    MatButtonModule,
    MatProgressBarModule
],
  templateUrl: './printer-info.html',
  styleUrls: ['./printer-info.scss'],
})
export class PrinterInfo {

  status : boolean;
  isPrinting : boolean;
  @Input() printer! : Printer ;

  reminder: number = 2;
  total: number = 10;

  constructor(){
    this.status = true;
    this.isPrinting = true;
  }

}

@Component({
  selector: 'printer-details-dialog',
  templateUrl: 'printer-details.html',
  imports: [
    MatDialogModule
  ],
  styleUrl: 'printer-info.scss'
})
export class printerDetailsDialog{

  @Input() readonly printerInput! : Printer;


}
