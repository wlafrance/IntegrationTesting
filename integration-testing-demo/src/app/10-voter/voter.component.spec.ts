//PUT YOUR INTERGRATION TEST HERE
// PROPERTY AND EVENT BINDING TEST

import { TestBed, ComponentFixture } from '@angular/core/testing';
import {By} from '@angular/platform-browser';
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

  it('sould render total votes', () => {
    //ARRANGE - see before
   
    component.othersVote = 20;
    component.myVote = 1;
    fixture.detectChanges(); // -- needed because we are running a test and anuglar change detection is not activated in test automatically.
     
    //ACT
    // Where are we goig to render the total votes. IN the span with class vote-count
    // QUERY DOM and get reference to element
    //--------------  do I need the . in the pred below?
    let de = fixture.debugElement.query(By.css('.vote-count'));
    let el: HTMLElement = de.nativeElement;
  
    //ASSERT
    expect(el.innerText).toContain('21');
  });

  it('sould highligth the upvote button if I have upvoted', () => {
    //ARRANGE
    component.myVote = 1;
    fixture.detectChanges();

    component.upVote();
     
    //ACT
    let de = fixture.debugElement.query(By.css('.glyphicon-menu-up'));
    //let el: HTMLElement = de.nativeElement;
  
    //ASSERT
    expect(de.classes['highlighted']).toBeTruthy;
  });

  it('should increase total votes when I click the upvote button',()=>{
    let button =fixture.debugElement.query(By.css('.glyphicon-menu-up'));
    button.triggerEventHandler('click',null);

    //ASSERT
    expect(component.totalVotes).toBe(1);
  });
});
