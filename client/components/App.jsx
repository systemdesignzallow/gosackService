import React from 'react';
import FactsAndFeatures from './QuickFacts.jsx';
import TopDescription from './TopDescription.jsx';
import Details from './Details.jsx';
// import style from '../styles.css';

class GenDesc extends React.Component {
  constructor(props) {
    super();
    this.state = {
      house: props.house,
      toggle: false
    };
  }

  toggle() {
    this.setState({ toggle: !this.state.toggle });
  }

  render() {
    const { house } = this.state;
    return (
      <div className="containerMain">
        <TopDescription house={house} />
        <FactsAndFeatures house={house} />
        <hr />
        <Details house={house} toggle={this.state.toggle} handleClick={this.toggle.bind(this)} />
      </div>
    );
  }
}

export default GenDesc;
