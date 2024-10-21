import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCholloComponent } from './create-chollo.component';

describe('CreateCholloComponent', () => {
  let component: CreateCholloComponent;
  let fixture: ComponentFixture<CreateCholloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateCholloComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateCholloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
