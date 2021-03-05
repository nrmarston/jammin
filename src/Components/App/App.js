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
        {name: 'Girls Time', artist: 'Singa Blinga', album: 'Galbum', id: '1'},
        {name: 'Up and Up', artist: 'Suave dem', album: 'Suavitel', id: '2'},
        {name: 'Money Dreams', artist: 'Frenchman', album: 'Journey to France', id: '3'}
      ],
      playlistName: 'Hot Playlist',
      playlistTracks: [{name: 'Playlist track 1', artist: 'Singa Blinga', album: 'Galbum', id: '4'},
      {name: 'Playlist track 2', artist: 'Suave dem', album: 'Suavitel', id: '5'}]
    };
    
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
  }

  addTrack(track){
    let tracks = this.state.playlistTracks;
    
    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }

    tracks.push(track);

    this.setState({playlistTracks: tracks});
  }

  removeTrack(track){
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);
    this.setState({playlistTracks: tracks});
  }

  updatePlaylistName(name){
    this.setState({playlistName: name});
  }

  savePlaylist(){
    alert('this is working as expected');
    let trackURIs = [this.state.playlistTracks.map(track => track.uri)];
  }
  
  render(){
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>in</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
          <Playlist playlistName={this.state.playlistName} 
            playlistTracks={this.state.playlistTracks}
            onRemove={this.removeTrack}
            onNameChange={this.updatePlaylistName}
            onSave={this.savePlaylist}
            />
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
