import Header from './Header';

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="container mx-auto">
          <Header />
          { this.props.children }
        </div>
      </div>
    );
  }
}

export default Layout;