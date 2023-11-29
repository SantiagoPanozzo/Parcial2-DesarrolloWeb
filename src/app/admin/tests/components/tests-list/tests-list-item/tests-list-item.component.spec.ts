import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestsListItemComponent } from './tests-list-item.component';

describe('TestsListItemComponent', () => {
  let component: TestsListItemComponent;
  let fixture: ComponentFixture<TestsListItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestsListItemComponent]
    });
    fixture = TestBed.createComponent(TestsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
