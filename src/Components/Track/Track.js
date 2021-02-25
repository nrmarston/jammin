import React from 'react';
import './Track.css';

export class Track extends React.Component {
  // renderAction(){
  //   return(
      
  //   );
  // }
  
  render(){
    return (
      <div className="Track">
      <div className="Track-information">
        <h3>TrackName</h3>
        <p>TrackArtist | TrackAlbum</p>
      </div>
        <button className="Track-action">PlusOrMinus</button>
      </div>
    );
  }
}