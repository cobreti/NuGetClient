import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NugetPackageComponent } from './nuget-package.component';

describe('NugetPackageComponent', () => {
  let component: NugetPackageComponent;
  let fixture: ComponentFixture<NugetPackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NugetPackageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NugetPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
