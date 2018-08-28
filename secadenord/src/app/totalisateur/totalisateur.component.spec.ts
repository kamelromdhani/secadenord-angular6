import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalisateurComponent } from './totalisateur.component';

describe('TotalisateurComponent', () => {
  let component: TotalisateurComponent;
  let fixture: ComponentFixture<TotalisateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalisateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
