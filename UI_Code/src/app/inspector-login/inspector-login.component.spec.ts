import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectorLoginComponent } from './inspector-login.component';

describe('InspectorLoginComponent', () => {
  let component: InspectorLoginComponent;
  let fixture: ComponentFixture<InspectorLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InspectorLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InspectorLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
