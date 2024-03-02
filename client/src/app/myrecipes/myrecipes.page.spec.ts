import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyrecipesPage } from './myrecipes.page';

describe('MyrecipesPage', () => {
  let component: MyrecipesPage;
  let fixture: ComponentFixture<MyrecipesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MyrecipesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
