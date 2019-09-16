import React, { Component } from 'react';
import Head from "next/head";

import Navbar from "../component/Navbar";
import TitleBoard from "../component/Titleboard";
import SearchResults from "../component/SearchResults";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      keyword: "",
    }
  }

  handleKeywordChange = (keyword) => {
    this.setState({ keyword });
  }

  render() { 
    return ( 
      <div className="container-fluid home">
        <div className="container">
          <Head>
            <title>Find a Social -- Home</title>
          </Head>
          <Navbar />
          <TitleBoard onKeywordChange={this.handleKeywordChange} keyword={this.props.keyword} />
          <SearchResults keyword={this.state.keyword}/>
        </div>
      </div>
     );
  }
}
 
export default Home;