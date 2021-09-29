import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadAlbums } from "../actions/albums_actions";
import Album from "../components/Album";
import Filter from "../components/Filter";
import Loader from "../components/Loader";
import "./HomePage.css";
export default function HomePage() {
  //acess store via useSelector
  const { albums, loadingAction, filter } = useSelector(
    (state) => state.albums
  );
  const [albumsFiltered, setAlbumsFiltered] = useState(albums);
  const dispatch = useDispatch();
  //after each time the filter updated filtered data is updated
  useEffect(() => {
    if (filter === "All") setAlbumsFiltered(albums);
    else setAlbumsFiltered(albums.filter((album) => album.source === filter));
  }, [filter, albums]);

  const fetchAlbums = () => {
    dispatch(loadAlbums());
  };

  return (
    <div className="homepage">
      <div className="homepage__header">
        <h1 className="homepage__title">Discover our albums</h1>
        {!albumsFiltered.length && (
          <button className="homePage__btn" onClick={fetchAlbums}>
            load albums
          </button>
        )}
      </div>
      <div>
        {loadingAction ? (
          <Loader />
        ) : (
          <>
            {albumsFiltered.length > 0 && <Filter />}
            <div className="homepage__albums">
              {albumsFiltered.map((album) => (
                <Album key={album.id} album={album} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
