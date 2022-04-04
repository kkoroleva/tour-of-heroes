import { CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Output } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesComponent } from './messages.component';

describe('TestComponent', () => {
  let component: MessagesComponent;
  let fixture: ComponentFixture<MessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessagesComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render html-message', () => {
    component.messageService.add('meow');
    expect(component.messageService.messages[0]).toBe('meow');
    fixture.detectChanges();
  });

  it('should clear messages', () => {
    component.messageService.add('meow');
    expect(component.messageService.messages[0]).toBe('meow');
    fixture.detectChanges();
    component.messageService.clear();
    expect(component.messageService.messages).toEqual([]);
    fixture.detectChanges();
  });
});
