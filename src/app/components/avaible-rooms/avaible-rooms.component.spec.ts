import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaibleRoomsComponent } from './avaible-rooms.component';

describe('AvaibleRoomsComponent', () => {
  let component: AvaibleRoomsComponent;
  let fixture: ComponentFixture<AvaibleRoomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvaibleRoomsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvaibleRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
