import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesAndSuggestionsComponent } from './rules-and-suggestions.component';

describe('RulesAndSuggestionsComponent', () => {
  let component: RulesAndSuggestionsComponent;
  let fixture: ComponentFixture<RulesAndSuggestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RulesAndSuggestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RulesAndSuggestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
