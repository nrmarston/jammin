import './App.css';
import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component{
  
  constructor(props){
    super(props);
    this.state.searchResults = {
      name: 'One Life',
      artist: 'Nico',
      album: 'Black',
      id: 'A1'
    };
    this.state.SearchResults = this.state.SearchResults.bind(this);
  }
  
  render(){
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
        <SearchResults searchResults={this.searchResults}/>
          <div className="App-playlist">
          <SearchBar />
          <Playlist />
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
