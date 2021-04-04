import Head from "next/head";
import React, { useState } from "react";
import Layout from "../Compenents/Layout/Layout";
import axios from "axios";
import SearchInput from "../Compenents/SearchInput/SearchInput";
import CountryTable from "../Compenents/CountryTable/CountryTable";
import style from "../../styles/Home.module.css";

export default function Home({ country }) {
  const [keywords, setkeywords] = useState(" ");

  const countryVal = country.filter((counter) =>
    counter.name.toLowerCase().includes(keywords)
  );

  const ChangeCountry = (e) => {
    e.preventDefault();
    setkeywords(e.target.value.toLowerCase());
  };

  console.log(countryVal);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Layout>
        <div className={style.header}>
          found
          <sub style={{ margin: "0 5px" }}>{country.length}</sub>
          country
          <SearchInput onchange={ChangeCountry} />
        </div>
        <div className={style.sort}>
          <div className={style.name}>
            <button>name</button>
          </div>

          <div className={style.poulation}>
            <button>population</button>
          </div>
        </div>
      </Layout>
      <div>
        <CountryTable country={countryVal} />
      </div>
    </div>
  );
}
export async function getServerSideProps() {
  const response = await axios.get("https://restcountries.eu/rest/v2/all");
  return {
    props: {
      country: response.data,
    },
  };
}
