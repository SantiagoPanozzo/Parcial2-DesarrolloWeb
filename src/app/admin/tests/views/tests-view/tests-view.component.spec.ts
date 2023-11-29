import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestsViewComponent } from './tests-view.component';

describe('TestsViewComponent', () => {
  let component: TestsViewComponent;
  let fixture: ComponentFixture<TestsViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestsViewComponent]
    });
    fixture = TestBed.createComponent(TestsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
