import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandResumeComponent } from './command-resume.component';

describe('CommandResumeComponent', () => {
  let component: CommandResumeComponent;
  let fixture: ComponentFixture<CommandResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandResumeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
