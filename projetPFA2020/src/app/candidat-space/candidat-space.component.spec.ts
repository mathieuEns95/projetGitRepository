import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatSpaceComponent } from './candidat-space.component';

describe('CandidatSpaceComponent', () => {
  let component: CandidatSpaceComponent;
  let fixture: ComponentFixture<CandidatSpaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidatSpaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
