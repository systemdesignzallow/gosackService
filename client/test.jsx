import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render, configure } from 'enzyme';
import { spy } from 'sinon';
import GenDesc from './app.jsx';
import FactsAndFeatures from './quickFacts.jsx';
import TopDescription from './TopDescription.jsx';
import Details from './Details.jsx';
import Adapter from 'enzyme-adapter-react-16';
import ShowMore from './ShowMore.jsx';
import house from './testhouse';
import MortgageCalculator from './MortgageCalculator.jsx';
import style from './styles.css';
configure({ adapter: new Adapter() });

spy(GenDesc.prototype, 'render');

describe('<GenDesc />', () => {
  it('calls render', () => {
    const wrapper = mount(<GenDesc house={house} />);
    expect(GenDesc.prototype.render.callCount).to.be.greaterThan(0);
  });
  it('renders a main container', () => {
    const wrapper = mount(<GenDesc house={house} />);
    expect(wrapper.find(`div.${style.containerMain}`).length).to.be.greaterThan(0);
  });
  describe('Top level dynamic rendering', () => {
    const wrapper = mount(<GenDesc house={house} />);
    it('should render address line 1 dynamically', () => {
      expect(
        wrapper
          .find('#line1')
          .render()
          .text()
      ).to.equal(house.address.split('\n')[0]);
    });
    it('should render address line 2 dynamically', () => {
      expect(
        wrapper
          .find('#line2')
          .render()
          .text()
      ).to.equal(house.address.split('\n')[1]);
    });
    it('should render house description dynamically', () => {
      expect(wrapper.find('#house-description').text()).to.equal(house.description);
    });
    it('should render price dynamically', () => {
      expect(wrapper.find('#house-price').text()).to.equal(
        `$${Intl.NumberFormat().format(house.price)}`
      );
    });
  });
  describe('Show more button', () => {
    it('should show more info when clicked', () => {
      const wrapper = mount(<GenDesc house={house} />);
      wrapper.find(`div#${style.seeMore}`).simulate('click');
      expect(wrapper.find(style.greyedOut).findWhere(node => node.text() === 'Unit Count: ')).to
        .exist;
    });
    it('it should hide extra info when clicked again', () => {
      const wrapper = mount(<GenDesc house={house} />);
      wrapper.find(`div#${style.seeMore}`).simulate('click');
      expect(wrapper.find(style.greyedOut).findWhere(node => node.text() === 'Unit Count: ')).to
        .exist;
      wrapper.find(`div#${style.seeMore}`).simulate('click');
      expect(wrapper.find(style.greyedOut).findWhere(node => node.text() === 'Unit Count: ')).to.be
        .empty;
    });
  });
  describe('Component Rendering', () => {
    const wrapper = mount(<GenDesc house={house} />);
    it('should render <Top Description />', () => {
      expect(wrapper.find(TopDescription).length).to.equal(1);
    });
    it('should render <FactsAndFeatures />', () => {
      expect(wrapper.find(FactsAndFeatures).length).to.equal(1);
    });
    it('should render <Details />', () => {
      expect(wrapper.find(Details).length).to.equal(1);
    });
    it('should not render <ShowMore /> on load', () => {
      expect(wrapper.find(ShowMore).length).to.equal(0);
    });
  });
  describe('Mortgage Calculator', () => {
    const wrapper = mount(<GenDesc house={house} />);
    it('should not render the calculator until button clicked', () => {
      expect(wrapper.find(`#${style.calculatorMain}`).length).to.equal(0);
      wrapper.find(`#${style.calculatorButton}`).simulate('click');
      expect(wrapper.find(`#${style.calculatorMain}`).length).to.equal(1);
    });
    it('should calculate house specific data by default', () => {
      expect(wrapper.find(`#${style.paymentBig}`).text()).to.equal(`$2,295.17`);
    });
    it('should have default values set dynamically for input', () => {
      expect(wrapper.find('#priceInput').instance().value).to.equal(
        Intl.NumberFormat().format(house.price)
      );
      expect(wrapper.find('#downPaymentPercent').instance().value).to.equal('20');
      expect(wrapper.find('#downPaymentDollar').instance().value).to.equal(
        Intl.NumberFormat().format(Math.floor(0.2 * house.price))
      );
      expect(wrapper.find('#interest').instance().value).to.equal('4.173');
    });
    it('should update respective fields with any input change', () => {
      expect(wrapper.find(`#${style.calculatorMain}`).length).to.equal(1);
      let priceInput = wrapper.find('#priceInput');
      let downPaymentDollar = wrapper.find('#downPaymentDollar');
      let downPaymentPercent = wrapper.find('#downPaymentPercent');
      let term = wrapper.find(`#${style.selectLoanTerm}`);
      let interest = wrapper.find('#interest');
      let monthly = wrapper.find(`#${style.paymentBig}`);
      priceInput.simulate('change', { target: { id: 'priceInput', value: '200000' } });
      priceInput.simulate('keyPress', { key: 'Enter' });
      expect(monthly.text()).to.equal('$401.09');
      downPaymentDollar.simulate('change', {
        target: { id: 'downPaymentDollar', value: '100000' }
      });
      downPaymentDollar.simulate('keyPress', { key: 'Enter' });
      expect(downPaymentPercent.instance().value).to.equal('50');
      downPaymentPercent.simulate('change', { target: { id: 'downPaymentPercent', value: '75' } });
      downPaymentPercent.simulate('keyPress', { key: 'Enter' });
      expect(downPaymentDollar.instance().value).to.equal('150,000');
      term.simulate('change', { target: { value: '15', id: style.selectLoanTerm } });
      expect(monthly.text()).to.equal('$374.19');
      interest.simulate('change', { target: { id: 'interest', value: '5' } });
      interest.simulate('keyPress', { key: 'Enter' });
      expect(monthly.text()).to.not.equal('$374.19');
    });
  });
});
