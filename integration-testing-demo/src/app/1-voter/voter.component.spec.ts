import { TestBed, ComponentFixture } from '@angular/core/testing';
import { VoterComponent } from './voter.component';

describe('VoterComponent', () => {
let component: VoterComponent;
let fixture: ComponentFixture<VoterComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoterComponent]  // This is how we create a dynamic testing module  see app.module.ts @ngModule
    });

   fixture =  TestBed.createComponent(VoterComponent);
   component = fixture.componentInstance;
  });

  it('', () => {
  });
});
