import React from 'react';

const Titleboard = (props) => (
  <div className="row title-board text-center">
    <div className="title-block">
      <label className="title">The easiest way to find <span>Tik Tok</span> influencers</label>
      <label className="subtitle">Search a database of over 1.5M tiktok accounts in seconds</label>
    </div>
    <div className="search-container">
      <form className="form-inline">
        <input
          type="text"
          placeholder="Enter keywords e.g. Canada, Fashion, Football"
          name="search"
          className="form-control search"
          value={props.keyword}
          onChange={(e) => props.onKeywordChange(e.target.value)}
        />
        <button type="submit" className="btn search-button mr-0"><span>Search</span></button>
      </form>
    </div>
    <div className="hint">
      <small>See stats for your account</small>
    </div>
  </div>
)

export default Titleboard;