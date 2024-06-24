import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamodbOperationsComponent } from './dynamodb-operations.component';

describe('DynamodbOperationsComponent', () => {
  let component: DynamodbOperationsComponent;
  let fixture: ComponentFixture<DynamodbOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamodbOperationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DynamodbOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
