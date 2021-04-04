import axios from "axios";
import React, { useEffect, useState } from "react";
import Layout from "../../Compenents/Layout/Layout";
import style from "./Country.module.css";

const Country = ({ country }) => {
  var sectionStyle = {
    backgroundImage: `url(${country.flag})`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    height: "400vh",
    width: "100%",
    position: "fixed",
  };

  return (
    <div className={style.org}>
      <img src={country.flag} style={sectionStyle} />

      <div className={style.main}>
        <div className={style.continer}>
          <img src={country.flag} />
          <h1>{country.name}</h1>
          <small>{country.region}</small>
          <div className={style.popname}>
            <div className={style.population}>
              <p>{country.population}</p>
              <p>poulation</p>
            </div>
            <div className={style.area}>
              <p>{country.area}</p>
              <p>area</p>
            </div>
          </div>
        </div>
        <div className={style.continerRight}>
          <div className={style.Details}>
            <h4>Details</h4>
          </div>
          <div className={style.rightcon}>
            <p className={style.first}>Capital</p>
            <p>{country.capital}</p>
          </div>

          <div className={style.rightcon}>
            <p className={style.first}>Languages</p>
            <p>{country.languages.map(({ name }) => name).join(", ")}</p>
          </div>

          <div className={style.rightcon}>
            <p className={style.first}>currencies</p>
            <p>{country.currencies.map(({ name }) => name).join(", ")}</p>
          </div>

          <div className={style.rightcon}>
            <p className={style.first}>native name</p>

            <p>{country.nativeName}</p>
          </div>

          <div className={style.rightcon}>
            <p className={style.first}>Gini</p>

            <p>{country.gini}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;

export async function getServerSideProps({ params }) {
  const response = await axios.get(
    `https://restcountries.eu/rest/v2/alpha/${params.id}`
  );

  return {
    props: {
      country: response.data,
    },
  };
}
