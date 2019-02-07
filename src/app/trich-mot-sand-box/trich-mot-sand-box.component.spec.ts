import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrichMotSandBoxComponent } from './trich-mot-sand-box.component';

describe('TrichMotSandBoxComponent', () => {
  let component: TrichMotSandBoxComponent;
  let fixture: ComponentFixture<TrichMotSandBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrichMotSandBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrichMotSandBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
