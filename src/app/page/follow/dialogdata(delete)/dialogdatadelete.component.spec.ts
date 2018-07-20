import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogdatadeleteComponent } from './dialogdatadelete.component';

describe('DialogdatadeleteComponent', () => {
  let component: DialogdatadeleteComponent;
  let fixture: ComponentFixture<DialogdatadeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogdatadeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogdatadeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
