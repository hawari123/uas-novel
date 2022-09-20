import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

const Novellist = () => {

const [novels, setNovel] = useState([]);

useEffect(()=>{
    getnovels();
})

const getnovels = async () => {
    const response = await axios.get("http://127.0.0.1:8000/api/Novel/");
    setNovel(response.data);
};

const deleteNovel = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/Novel/${id}`);
      getnovels();
    } catch (error) {
      console.log(error);
    }
  };


  return (
    
    <div className='columns mt-5 is-centered'>
        <div className='column is half'>
        <tr>
            <Link to={'/create'} className='button is-success'> Create </Link>
        </tr>
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>No</th>
              <th>judul</th>
              <th>genre</th>
              <th>author</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {novels.map((novel, index) => (
              <tr key={novels.id}>
                <td>{index + 1}</td>
                <td>{novel.judul}</td>
                <td>{novel.genre}</td>
                <td>{novel.author}</td>
                <td>
                  <Link to={`edit/${novel.id}`} className="button is-small is-info">
                    Edit
                  </Link>
                  
                  <button onClick={() => deleteNovel(novel.id)} className="button is-small is-danger">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
    </div>
  )
}

export default Novellist