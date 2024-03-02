import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MytodosPage } from './mytodos.page';

describe('MytodosPage', () => {
  let component: MytodosPage;
  let fixture: ComponentFixture<MytodosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MytodosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
