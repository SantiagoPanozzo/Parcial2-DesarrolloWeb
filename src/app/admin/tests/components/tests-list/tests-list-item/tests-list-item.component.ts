import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITest } from 'src/app/admin/tests/interfaces/ITest';

@Component({
  selector: 'app-tests-list-item',
  templateUrl: './tests-list-item.component.html',
  styleUrls: ['./tests-list-item.component.css']
})
export class TestsListItemComponent {
  
  @Input()
  public test!: ITest;

  constructor() { }

  ngOnInit(): void {
    if(!this.test) throw new Error('Test no está definido');
  }

  @Output()
  public onDelete: EventEmitter<number> = new EventEmitter<number>();

  deleteTest(): void {
    this.onDelete.emit(this.test.id);
  }
}
