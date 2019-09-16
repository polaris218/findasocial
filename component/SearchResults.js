import React, { Component } from 'react';

const items = [
  {
    image: "../static/Circle-Image-1.svg",
    name: `Jurriaan van der Broek`,
    id: `@rhia.official`,
    description: `Hella narwhal Cosby sweater McSweeney's, salvia kitsch before they sold out High Life.`,
    following: `495`,
    fans: `3.4m`,
    hearts: `123.9m`,
  },
  {
    image: "../static/Circle-Image-2.svg",
    name: `Matthew Lina`,
    id: `@rhia.official`,
    description: `Hella narwhal Cosby sweater McSweeney's, salvia kitsch before they sold out High Life.`,
    following: `495`,
    fans: `3.4m`,
    hearts: `123.9m`,
  },
  {
    image: "../static/Circle-Image-3.svg",
    name: `Langke Zambo`,
    id: `@rhia.official`,
    description: `Hella narwhal Cosby sweater McSweeney's, salvia kitsch before they sold out High Life.`,
    following: `495`,
    fans: `3.4m`,
    hearts: `123.9m`,
  }
]

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      
    }
  }
  render() { 
    return ( 
      <div className="row search-result">
        {
          items.map((item, key) => (
            this.props.keyword
              ? item.name.includes(this.props.keyword)
                ? <SearchContents item={ item } key={ key } />
                : <React.Fragment key={ key }/>
              : <SearchContents item={item} key={key} />
          ))
        }
      </div>
     );
  }
}
 
export default SearchResults;

export const SearchContents = ({ item }) => (
  <div className="col-md-4 result-item">
    <div className="board">
      <div className="crown-board">
        <img src={ item.image } alt="result" className="person-image" />
        <span className="crown">
          <img src="../static/Icon-Crown.svg" alt="icon-crown" />
        </span>
      </div>
      <h4>{ item.name }</h4>
      <small>{ item.id }</small>
      <label className="description">{ item.description }</label>
      <div className="row item-row">
        <div className="col-md-4 item">
          <h5>{ item.following }</h5>
          <label className="hints">Following</label>
        </div>
        <div className="col-md-4 item">
          <h5>{ item.fans }</h5>
          <label className="hints">fans</label>
        </div>
        <div className="col-md-4 item">
          <h5>{ item.hearts }</h5>
          <label className="hints">hearts</label>
        </div>
      </div>
      <div className="button-board">
        <span>see report</span>
      </div>
    </div>
  </div>
)