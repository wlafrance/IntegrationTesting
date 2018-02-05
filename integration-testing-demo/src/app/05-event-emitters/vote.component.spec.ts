// TESTING EMITTERS
import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  var component: VoteComponent;

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('should raise voteChanged event when upVoted', () => {
    // ARRANGE
    let totalVotes = null;
    component.voteChanged.subscribe(tv => totalVotes = tv);
    // ACT
    component.upVote();
    // ASSERT
    expect(totalVotes).not.toBeNull();  //THis would not test the actual value, so it could actual be failing.
    expect(totalVotes).toBe(1);  // THis is more specific and test the logic of the code
  });
});