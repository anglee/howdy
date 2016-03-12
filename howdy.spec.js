import {expect} from 'chai';
import howdy from './howdy';

describe('howdy', () => {
  it('should say howdy', () => {
    expect(howdy).to.equal("Howdy, world!");
  });
});
