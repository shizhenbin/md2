import { Component } from '@angular/core';
import { Md2Toast } from 'md2';

@Component({
  moduleId: module.id,
  selector: 'toast-demo',
  templateUrl: 'toast-demo.html'
})
export class ToastDemo {
  constructor(private toast: Md2Toast) { }
  toastMe() {
    this.toast.toast('test message...');
  }
}
