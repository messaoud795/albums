import React from "react";
import sourceLogo from "../resources/images/qobuz.png";
import "./Album.css";
import undefined_album_cover from "../resources/images/undefined_album_cover.png";

export default function Album({ album: { source, artist, album, cover } }) {
  return (
    <div className="album">
      {cover ? (
        <img src={`covers/${cover}`} alt="cover" className="album__cover" />
      ) : (
        <img src={undefined_album_cover} alt="cover" className="album__cover" />
      )}
      <span className="album__title">{album}</span>
      <span className="album__artist">{artist}</span>
      {source === "QOBUZ" && (
        <img src={sourceLogo} alt="source" className="album__logo" />
      )}
    </div>
  );
}
