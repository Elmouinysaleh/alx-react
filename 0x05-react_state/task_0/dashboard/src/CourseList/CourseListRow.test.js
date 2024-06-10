import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('CourseListRow tests', () => {
  it('renders without crashing', () => {
    const component = shallow(<CourseListRow textFirstCell="Test" />);
    expect(component).toBeDefined();
  });

  it('renders row with correct background color for header', () => {
    const component = shallow(<CourseListRow isHeader textFirstCell="Header1" textSecondCell="Header2" />);
    const tr = component.find('tr');

    expect(tr.props().style.backgroundColor).toBe('#deb5b545');
  });

  it('renders row with correct background color for non-header', () => {
    const component = shallow(<CourseListRow textFirstCell="Cell1" textSecondCell="Cell2" />);
    const tr = component.find('tr');

    expect(tr.props().style.backgroundColor).toBe('#f5f5f5ab');
  });

  it('renders header row with colspan when textSecondCell is null', () => {
    const component = shallow(<CourseListRow isHeader textFirstCell="Header" textSecondCell={null} />);
    const th = component.find('th');

    expect(th.props().colSpan).toBe(2);
  });

  it('renders header row with two th elements when textSecondCell is not null', () => {
    const component = shallow(<CourseListRow isHeader textFirstCell="Header1" textSecondCell="Header2" />);
    const th = component.find('th');

    expect(th).toHaveLength(2);
  });

  it('renders non-header row with two td elements', () => {
    const component = shallow(<CourseListRow textFirstCell="Cell1" textSecondCell="Cell2" />);
    const td = component.find('td');

    expect(td).toHaveLength(2);
  });
});

