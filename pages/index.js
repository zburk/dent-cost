import React from 'react';
import Layout from '../components/Layout';
import YearCost from  '../components/YearCost';
import fetch from 'isomorphic-unfetch';

class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  static async getInitialProps() {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await res.json();

    console.log(`${ data.length } fetched`);

    return {
      shows: data.map(entry => entry.show)
    }
  }

  render() {
    return (
      <Layout>
        <div className="flex">
          <div className="flex-1">
            <YearCost title="Year 1"></YearCost>
          </div>
          <div className="flex-1">
            <YearCost title="Year 2"></YearCost>
          </div>
          <div className="flex-1">
            <YearCost title="Year 3"></YearCost>
          </div>
          <div className="flex-1">
            <YearCost title="Year 4"></YearCost>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Index;