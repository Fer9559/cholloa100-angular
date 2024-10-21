import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCholloComponent } from './update-chollo.component';

describe('UpdateCholloComponent', () => {
  let component: UpdateCholloComponent;
  let fixture: ComponentFixture<UpdateCholloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateCholloComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateCholloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
