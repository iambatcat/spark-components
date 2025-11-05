import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SparkComponents } from './spark-components';

describe('SparkComponents', () => {
  let component: SparkComponents;
  let fixture: ComponentFixture<SparkComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SparkComponents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SparkComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
