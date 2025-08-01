import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarComponent, RouterTestingModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize menu items', () => {
    expect(component.items).toBeDefined();
    expect(component.items.length).toBe(4);
    expect(component.items[0].label).toBe('Home');
    expect(component.items[1].label).toBe('Contact');
    expect(component.items[2].label).toBe('Privacy');
    expect(component.items[3].label).toBe('Terms');
  });

  it('should have proper router links for menu items', () => {
    expect(component.items[0].routerLink).toEqual(['/home']);
    expect(component.items[1].routerLink).toEqual(['/contact']);
    expect(component.items[2].routerLink).toEqual(['/privacy']);
    expect(component.items[3].routerLink).toEqual(['/terms']);
  });
});
