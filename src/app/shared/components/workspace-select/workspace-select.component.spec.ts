import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkspaceSelectComponent } from './workspace-select.component';

describe('WorkspaceSelectComponent', () => {
  let component: WorkspaceSelectComponent;
  let fixture: ComponentFixture<WorkspaceSelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkspaceSelectComponent]
    });
    fixture = TestBed.createComponent(WorkspaceSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
