import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Purchase } from '../models/cytokeratin-model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss'],
})
export class PurchaseComponent implements OnInit {
  @Input() public purchase!: Purchase;
  @Output() emitMessage = new EventEmitter<string>();

  public data?: string;
  constructor() {}

  ngOnInit(): void {}

  showAlert() {
    Swal.fire(
      'Purchase done!',
      'You will receive your new posters in the next 24 - 48h and MUST PAY TO THE DELIVERY',
      'success'
    );
  }
  sendMessage() {
    this.emitMessage.emit(this.data);
  }
}
