import React from 'react';
import Link from 'next/link';

class YearCost extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      eTuition: props.costs.tuition,
      eFees: props.costs.fees,
      disabled: false
    };
  }

  onUpdate = (e) => {
    const fieldName = e.target.name;
    this.setState({
      [fieldName]: e.target.value
    });
  }

  toggleDisabled = () => {
    if (!this.state.disabled) {
      this.setState({
        disabled: !this.state.disabled,
        eTuition: this.props.costs.tuition,
        eFees: this.props.costs.fees,
      });
    } else {
      this.setState({
        disabled: !this.state.disabled
      });
    }
  }

  render() {
    return (
      <div>
      { this.disabled }
        <div class="flex flex-col">
          <div className="text-2xl">{ this.props.title }</div>
          <div className="text-right">
            <input
              type="text"
              name="eTuition"
              value={ this.state.eTuition }
              className={ "text-right " + (this.state.disabled ? 'bg-gray-200' : '') }
              onChange={ this.onUpdate }
              disabled={ this.state.disabled }/>
          </div>
          <div className="text-right">
            <input
              type="text"
              name="eFees"
              value={ this.state.eFees }
              className={ "text-right " + (this.state.disabled ? 'bg-gray-200' : '') }
              onChange={ this.onUpdate }
              disabled={ this.state.disabled }/>
          </div>
          <div className="text-right">{ parseInt(this.state.eTuition) + parseInt(this.state.eFees) }</div>
          <div><button onClick={ this.toggleDisabled }>{ this.state.disabled ? 'Edit' : 'Reset' }</button></div>
        </div>
      </div>
    );
  }
}

export default YearCost;