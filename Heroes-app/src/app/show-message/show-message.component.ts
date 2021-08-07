import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-show-message',
  templateUrl: './show-message.component.html',
  styleUrls: ['./show-message.component.css']
})
export class ShowMessageComponent implements OnInit {

  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
