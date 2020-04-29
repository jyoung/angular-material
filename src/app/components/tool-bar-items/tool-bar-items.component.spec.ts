import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolBarItemsComponent } from './tool-bar-items.component';

describe('ToolBarItemsComponent', () => {
  let component: ToolBarItemsComponent;
  let fixture: ComponentFixture<ToolBarItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolBarItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolBarItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
