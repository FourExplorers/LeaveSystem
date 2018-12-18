import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchNavBarComponent } from './search-nav-bar.component';

describe('SearchNavBarComponent', () => {
  let component: SearchNavBarComponent;
  let fixture: ComponentFixture<SearchNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
