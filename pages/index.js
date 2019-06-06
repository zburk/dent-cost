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

  totalCost() {
    return 80000;
  }

  render() {
    return (
      <Layout>
        <div className="flex">
          <div className="flex-1">
            <div class="flex flex-col">
              <div className="text-2xl">&nbsp;</div>
              <div>Tuition</div>
              <div>Fees</div>
              <div>Total</div>
            </div>
          </div>
          <div className="flex-1">
            <YearCost title="Year 1" costs={ { tuition: 20000, fees: 4000 } }></YearCost>
          </div>
          <div className="flex-1">
            <YearCost title="Year 2" costs={ { tuition: 20000, fees: 4000 } }></YearCost>
          </div>
          <div className="flex-1">
            <YearCost title="Year 3" costs={ { tuition: 20000, fees: 4000 } }></YearCost>
          </div>
          <div className="flex-1">
            <YearCost title="Year 4" costs={ { tuition: 20000, fees: 4000 } }></YearCost>
          </div>
        </div>

        <h2 className="text-xl">Total cost: { this.totalCost() }</h2>
      </Layout>
    );
  }
}

export default Index;