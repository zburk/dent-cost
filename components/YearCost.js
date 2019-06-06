import React from 'react';
import Link from 'next/link';

class YearCost extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <span className="text-2xl">{ this.props.title }</span>
      </div>
    );
  }
}

export default YearCost;