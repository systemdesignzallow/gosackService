import React from 'react';
import FactsAndFeatures from './QuickFacts.jsx';
import TopDescription from './TopDescription.jsx';
import Details from './Details.jsx';
import style from '../styles.css';
class GenDesc extends React.Component {
  constructor(props) {
    super();
    this.state = {
      house: props.house[0],
      toggle: false
    };
  }
  componentWillMount() {
    window.addEventListener('house_view', e => {
      fetch(`http://localhost:6001/houses/${Math.floor(Math.random() * 98)}`)
        .then(res => res.json())
        .then(house => this.setState({ house }));
    });
  }
  toggle() {
    this.setState({ toggle: !this.state.toggle });
  }
  render() {
    const { house } = this.state;
    return (
      <div className={style.containerMain}>
        <TopDescription house={house} />
        <FactsAndFeatures house={house} />
        <hr />
        <Details house={house} toggle={this.state.toggle} handleClick={this.toggle.bind(this)} />
      </div>
    );
  }
}
export default GenDesc;
