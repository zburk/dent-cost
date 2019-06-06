import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import '../output.css';

const linkStyle = {
  marginRight: 15
};

class Header extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <title>My page title</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="stylesheet" type="text/css" href="/static/css/output.css" />
        </Head>

        <Link href="/">
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
          <a style={linkStyle}>About</a>
        </Link>
      </div>
    );
  }
}

export default Header;