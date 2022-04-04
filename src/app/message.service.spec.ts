import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageService } from './message.service';

describe('TestComponent', () => {
  let service: MessageService;

  beforeEach(() => {
    service = new MessageService();
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('adds to messages', () => {
    service.add('meow');
    expect(service.messages[0]).toBe('meow');
  });

  it('clears', () => {
    service.add('meow');
    service.clear()
    expect(service.messages).toEqual([]);
  });
});
