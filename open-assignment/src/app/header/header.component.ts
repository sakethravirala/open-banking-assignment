/*
 * Copyright (C) - All Rights Reserved
 * Written by Saketh Ravirala
 * Unauthorized use or copying of this file, via any medium is strictly prohibited and will be subject to legal action.
 * Proprietary and confidential
 */

import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  mini: boolean = false;

  ngOnInit(): void {
    setTimeout(()=>{
      document.documentElement.scrollTop = 0;
    }, 25);
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent(event: any) {
    if (event.target.scrollingElement.scrollTop >= 25)
      this.mini = true
    else
      this.mini = false
  }
}
