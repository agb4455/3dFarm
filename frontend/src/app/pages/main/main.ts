import { Component } from '@angular/core';
import { Printer } from '../../model/printer.model';
import { PrinterInfo } from '../../components/printer-info/printer-info';

@Component({
  selector: 'app-main',
  imports: [
    PrinterInfo
  ],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main {

  printers : Printer[] = [
    new Printer("ender3","salon","cdp://salon.octo:3355",""),
  ];



}
