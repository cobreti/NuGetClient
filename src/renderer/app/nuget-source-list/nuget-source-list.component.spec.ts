import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NugetSourceListComponent } from './nuget-source-list.component';

describe('NugetSourceListComponent', () => {
  let component: NugetSourceListComponent;
  let fixture: ComponentFixture<NugetSourceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NugetSourceListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NugetSourceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
