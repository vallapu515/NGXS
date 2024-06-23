import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { UsersComponent } from './users.component';
import { EmployeesService } from '../employees.service';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [EmployeesService],
      imports: [
        HttpClientTestingModule,
      ],
      declarations: [ UsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should component initialized', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
});

