import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSearchBarComponent } from './app-search-bar.component';

describe('AppSearchBarComponent', () => {
  let component: AppSearchBarComponent;
  let fixture: ComponentFixture<AppSearchBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSearchBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
