import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrichMotMaterialComponent } from './trich-mot-material.component';

describe('TrichMotMaterialComponent', () => {
  let component: TrichMotMaterialComponent;
  let fixture: ComponentFixture<TrichMotMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrichMotMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrichMotMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
