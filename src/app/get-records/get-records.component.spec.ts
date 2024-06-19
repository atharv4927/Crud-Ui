import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetRecordsComponent } from './get-records.component';

describe('GetRecordsComponent', () => {
  let component: GetRecordsComponent;
  let fixture: ComponentFixture<GetRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetRecordsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
