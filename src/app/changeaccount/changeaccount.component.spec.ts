import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeaccountComponent } from './changeaccount.component';

describe('ChangeaccountComponent', () => {
  let component: ChangeaccountComponent;
  let fixture: ComponentFixture<ChangeaccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeaccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
