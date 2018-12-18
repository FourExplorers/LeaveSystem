import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdsearchComponent } from './mdsearch.component';

describe('MdsearchComponent', () => {
  let component: MdsearchComponent;
  let fixture: ComponentFixture<MdsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
