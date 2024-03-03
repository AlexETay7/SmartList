import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { GrocerylistPage } from './grocerylist.page';

describe('GrocerylistPage', () => {
  let component: GrocerylistPage;
  let fixture: ComponentFixture<GrocerylistPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(GrocerylistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
