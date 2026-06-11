import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hairstylists } from './hairstylists';

describe('Hairstylists', () => {
  let component: Hairstylists;
  let fixture: ComponentFixture<Hairstylists>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hairstylists]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hairstylists);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
