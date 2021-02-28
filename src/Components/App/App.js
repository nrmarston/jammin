import './App.css';
import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
      searchResults: [
        {name: 'Nico', artist: 'Singa Blinga', album: 'Galbum', id: 'ABC123'},
        {name: 'Rico', artist: 'Suave dem', album: 'Suavitel', id: 'ABC456'},
        {name: 'Zeko', artist: 'Frenchman', album: 'Journey to France', id: 'ABC789'}
      ]
    };
  }
  
  render(){
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults}/>
          <Playlist />
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
