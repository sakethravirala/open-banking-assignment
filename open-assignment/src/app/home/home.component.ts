/*
 * Copyright (C) - All Rights Reserved
 * Written by Saketh Ravirala
 * Unauthorized use or copying of this file, via any medium is strictly prohibited and will be subject to legal action.
 * Proprietary and confidential
 */

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  host: {
    '(document:click)': 'onClick($event)',
  },
})
export class HomeComponent implements OnInit {
  income: any = 100000;
  expense: any = 10000;
  existingLoan: boolean = false;
  existingLoanValue: any = 0;
  toggleDropdown: boolean = false;
  tenure = "6 Months"
  tenures = ["1 Month", "3 Months", "6 Months", "9 Months", "12 Months"];
  constructor(private _eref: ElementRef) { }

  ngOnInit(): void {
  }

  onToggle(event: any) {
    this.existingLoan = event.checked;
  }

  selectTenure(tenure: any) {
    this.tenure = tenure;
  }

  toggle() {
    this.toggleDropdown = !this.toggleDropdown;
  }

  onClick(event: any) {
    if (!this._eref.nativeElement.contains(event.target))
      this.toggleDropdown = false;
  }
}
