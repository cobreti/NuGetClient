import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NugetPackagesListComponent } from './nuget-packages-list.component';

describe('NugetPackagesListComponent', () => {
  let component: NugetPackagesListComponent;
  let fixture: ComponentFixture<NugetPackagesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NugetPackagesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NugetPackagesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
