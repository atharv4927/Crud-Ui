import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S3OperationsComponent } from './s3-operations.component';

describe('S3OperationsComponent', () => {
  let component: S3OperationsComponent;
  let fixture: ComponentFixture<S3OperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [S3OperationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(S3OperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
