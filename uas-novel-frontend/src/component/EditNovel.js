import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditNovel = () => {
  const [judul, setJudul] = useState("");
  const [genre, setGenre] = useState("");
  const [isi, setIsi] = useState("");
  const [author, setAuthor] = useState("");
  const navigate = useNavigate();
  const {id} = useParams();

  useEffect(() => {
    getNovelById();
  }, []); 

  const updateNovel = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://127.0.0.1:8000/api/Novel/${id}`, {
        judul,
        genre,
        isi,
        author,
      });
      navigate("/");
    } catch (error) {
      console.log("datanya ga masuk", error);
    }
  };

  const getNovelById = async () => {
    const response = await axios.get(`http://127.0.0.1:8000/api/Novel/${id}`);
    setJudul(response.data.judul);
    setGenre(response.data.genre);
    setIsi(response.data.isi);
    setAuthor(response.data.author);
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={updateNovel}>
          <div className="field">
            <label className="label">Judul</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={judul}
                onChange={(e) => setJudul(e.target.value)}
                placeholder="Judul"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Genre</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                placeholder="Genre"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Isi</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={isi}
                onChange={(e) => setIsi(e.target.value)}
                placeholder="Isi"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Author</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Author"
              />
            </div>
          </div>


          <div className="field">
            <button type="submit" className="button is-success">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditNovel;
