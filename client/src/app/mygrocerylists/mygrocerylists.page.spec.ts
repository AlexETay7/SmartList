import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MygrocerylistsPage } from './mygrocerylists.page';

describe('MygrocerylistsPage', () => {
  let component: MygrocerylistsPage;
  let fixture: ComponentFixture<MygrocerylistsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MygrocerylistsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
