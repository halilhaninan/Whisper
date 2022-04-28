import React, { useEffect, useState } from "react";
import axios from "axios";
import { connect, useSelector } from "react-redux";

const YaziListesi = () => {
  const [yaziListesi, setYaziListesi] = useState([]);

  useEffect(() => {
    axios
      .get(`https://react-yazi-yorum.herokuapp.com/posts`)
      .then((response) => {
        setYaziListesi(response.data);
      });
  }, []);

  return (
    <div className="ui relaxed divided list">
      <a href={`/yaziekle`} className="ui brown basic button">
        yazi ekle
      </a>
      {yaziListesi.map((yazi, index) => {
        return (
          <div key={index} className="item">
            <i className="large github middle aligned icon"></i>
            <div className="content">
              <a href={`/posts/${yazi.id}`} className="header">
                {yazi.title}
              </a>

              <div className="description">{yazi.created_at}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default YaziListesi;
