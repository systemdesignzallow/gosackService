import React from 'react';
// import style from '../styles.css';

class MortgageCalculator extends React.Component {
  constructor({ house }) {
    super();
    this.state = {
      estimate: 2000,
      calcToggle: false,
      priceInput: house.price,
      interest: 4.173,
      downPaymentDollar: Math.floor(house.price * 0.2),
      downPaymentPercent: 20,
      duration: 30 * 12
    };
  }
  componentWillMount() {
    this.calculateMonthly();
  }
  calculateMonthly() {
    const loan = this.state.priceInput - this.state.downPaymentDollar;
    const interest = this.state.interest / (12 * 100);
    const duration = this.state.duration;
    const estimate =
      (loan * (interest * Math.pow(1 + interest, duration))) /
      (Math.pow(1 + interest, duration) - 1);
    this.setState({ estimate });
  }
  handleKeyPress(e) {
    e.persist();
    if (e.key === 'Enter') {
      this.calculateMonthly();
    }
  }
  handleChange(e) {
    e.persist();
    let state = {};
    switch (e.target.id) {
      case 'priceInput': {
        let val = e.target.value;
        val = Number(val.split(',').join(''));
        state[e.target.id] = Number(val);
        this.setState(state);
        break;
      }
      case 'downPaymentDollar': {
        let val = e.target.value;
        val = Number(val.split(',').join(''));
        state[e.target.id] = Number(val);
        let percent = (Number(val) * 100) / this.state.priceInput;
        state.downPaymentPercent = percent.toFixed(0);
        this.setState(state);
        break;
      }
      case 'downPaymentPercent': {
        let val = e.target.value;
        val = val > 100 ? 100 : val;
        val = val < 0 ? 0 : val;
        state[e.target.id] = Number(val);
        let dollar = (this.state.priceInput * Number(val)) / 100;
        state.downPaymentDollar = dollar.toFixed(0);
        this.setState(state);
        break;
      }
      case 'interest': {
        let val = e.target.value;
        val = val > 100 ? 100 : val;
        val = val < 0 ? 0 : val;
        state[e.target.id] = val;
        this.setState(state);
        break;
      }
      case style.selectLoanTerm: {
        this.setState({ duration: Number(e.target.value) * 12 }, () => this.calculateMonthly());
      }
    }
  }
  render() {
    return (
      <div className="containerCalculator">
        <div>
          ${Intl.NumberFormat().format(this.state.estimate.toFixed(2))}
          /mo
        </div>
        <div
          id="calculatorButton"
          onClick={() => this.setState({ calcToggle: !this.state.calcToggle })}
        >
          <img src="https://image.flaticon.com/icons/svg/149/149169.svg" />
          <div>▼</div>
        </div>
        {this.state.calcToggle ? (
          <div id="calculatorMain">
            <div id="calculatorTitle">ESTIMATED MONTHLY PAYMENT</div>
            <div id="calculatorMonthly">
              <div>
                Your payment:{' '}
                <span id="paymentBig">
                  ${Intl.NumberFormat().format(this.state.estimate.toFixed(2))}
                </span>
                <span id="paymentLittle">/mo</span>
              </div>
            </div>
            <span id="disclaimer">{'Estimated taxes & insurance are not included.'}</span>
            <div id="calculatorInput">
              <div>
                <div className="inputTitle"> Home Price</div>
                <div className="inputOuter">
                  $
                  <input
                    className="inputInner"
                    type="text"
                    id="priceInput"
                    contentEditable="true"
                    onKeyPress={this.handleKeyPress.bind(this)}
                    onChange={this.handleChange.bind(this)}
                    value={Intl.NumberFormat().format(this.state.priceInput)}
                  />
                </div>
              </div>
              <div>
                <div className="inputTitle"> Down Payment</div>
                <div id="downpayment">
                  <div className="inputOuter">
                    $
                    <input
                      className="inputInner"
                      type="text"
                      id="downPaymentDollar"
                      onKeyPress={this.handleKeyPress.bind(this)}
                      onChange={this.handleChange.bind(this)}
                      value={Intl.NumberFormat().format(this.state.downPaymentDollar)}
                    />
                  </div>
                  <div id="inputDownpaymentPercent" className="inputOuter">
                    <input
                      className="inputInner"
                      type="text"
                      id="downPaymentPercent"
                      onKeyPress={this.handleKeyPress.bind(this)}
                      onChange={this.handleChange.bind(this)}
                      value={this.state.downPaymentPercent}
                    />{' '}
                    %
                  </div>
                </div>
              </div>
              <div>
                <div className="inputTitle"> Loan Term</div>
                <div className="inputOuter">
                  <select id="selectLoanTerm" onChange={this.handleChange.bind(this)}>
                    <option value="30">30-year fixed</option>
                    <option value="15">15-year fixed</option>
                  </select>
                </div>
              </div>
              <div>
                <div className="inputTitle"> Interest Rate</div>
                <div id="interestRate">
                  <div className="inputOuter">
                    <input
                      className="inputInner"
                      type="text"
                      id="interest"
                      onKeyPress={this.handleKeyPress.bind(this)}
                      onChange={this.handleChange.bind(this)}
                      value={this.state.interest}
                    />{' '}
                    %
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}
export default MortgageCalculator;
