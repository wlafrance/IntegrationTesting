import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  let component: VoteComponent;

  beforeEach(() => {
    component = new VoteComponent();
  });

  //afterEach(()=>{});

  //beforeAll(()=>{});
  //afterEach(()=>{});

  it('should increment the total votes when upvoted', () => {
    // REMEMBER THESE ARE UNIT TEST, NOT ANGULAR TEST so NEWING UP IS OK in this instance
    // ARRANGE
    //let component = new VoteComponent();

    // ACT
    component.upVote();

    // ASSERT
    expect(component.totalVotes).toBe(1);
  });
  it('should decrement the total votes when downVoted', () => {
    // REMEMBER THESE ARE UNIT TEST, NOT ANGULAR TEST so NEWING UP IS OK in this instance
    // ARRANGE
    //let component = new VoteComponent();

    // ACT
    component.downVote();

    // ASSERT
    expect(component.totalVotes).toBe(-1);
  });


});