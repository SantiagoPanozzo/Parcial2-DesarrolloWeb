import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFormViewComponent } from './test-form-view.component';

describe('TestFormViewComponent', () => {
  let component: TestFormViewComponent;
  let fixture: ComponentFixture<TestFormViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestFormViewComponent]
    });
    fixture = TestBed.createComponent(TestFormViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
