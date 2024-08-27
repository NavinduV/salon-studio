import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Context } from "../../main";
import { Navigate } from "react-router-dom";

const Artists = () => {
  const [artists, setArtists] = useState([]);
  const { isAuthenticated } = useContext(Context);
  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/artists",
          { withCredentials: true }
        );
        setArtists(data.artists);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };
    fetchArtists();
  }, []);

  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }
  return (
    <section className="page artists">
      <h1>ARTISTS</h1>
      <div className="banner">
        {artists && artists.length > 0 ? (
          artists.map((element, index) => {
            return (
              <div className="card" key={index}>
                <img
                  src={element.avatar && element.avatar.url}
                  alt="artist avatar"
                  style={{height: "50px", width: "50px"}}
                />
                <h4>{`${element.firstName} ${element.lastName}`}</h4>
                <div className="details">
                  <p>
                    Email: <span>{element.email}</span>
                  </p>
                  <p>
                    Phone: <span>{element.phone}</span>
                  </p>
                  <p>
                    DOB: <span>{element.dob.substring(0, 10)}</span>
                  </p>
                  
                  <p>
                    NIC: <span>{element.nic}</span>
                  </p>
                  <p>
                    Gender: <span>{element.gender}</span>
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <h1>No Registered Artists Found!</h1>
        )}
      </div>
    </section>
  );
};

export default Artists;
