import PropTypes from 'prop-types';
import React from 'react';
import PBCalc from './PBCalc';
import TableLine from './TableLine';
import TableBlock from './TableBlock';
import RaceSelect from './RaceSelect';

export default class HelloWorld extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired, // this is passed from the Rails view
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedRace: this.props.raceStats[0],
    };
  }

  updateRace = (race) => {
    this.setState({ selectedRace: race });
  };

  render() {
    return (
      <div>
        <h3>
          Hello, {this.state.name}!
        </h3>
        <hr />
        <form >
          <label htmlFor="name">
            Say hello to:
          </label>
          <input
            id="name"
            type="text"
            value={this.state.name}
            onChange={(e) => this.updateName(e.target.value)}
          />
        </form>
      </div>
    );
  }
}
