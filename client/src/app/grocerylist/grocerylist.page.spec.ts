import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GrocerylistPage } from './grocerylist.page';

describe('GrocerylistPage', () => {
  let component: GrocerylistPage;
  let fixture: ComponentFixture<GrocerylistPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GrocerylistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
