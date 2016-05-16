const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import PostList from '../post_list';

describe('core.components.post_list', () => {
  it('should display the list of posts', () => {
    const el = shallow(<PostList />);
    expect(el.find('p').text()).to.be.match(/thisis where the items will be./);
  });
});
