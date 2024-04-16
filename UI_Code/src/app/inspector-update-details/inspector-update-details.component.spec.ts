import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectorUpdateDetailsComponent } from './inspector-update-details.component';

describe('InspectorUpdateDetailsComponent', () => {
  let component: InspectorUpdateDetailsComponent;
  let fixture: ComponentFixture<InspectorUpdateDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InspectorUpdateDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InspectorUpdateDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
