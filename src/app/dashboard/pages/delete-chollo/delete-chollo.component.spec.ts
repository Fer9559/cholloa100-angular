import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCholloComponent } from './delete-chollo.component';

describe('DeleteCholloComponent', () => {
  let component: DeleteCholloComponent;
  let fixture: ComponentFixture<DeleteCholloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteCholloComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteCholloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
