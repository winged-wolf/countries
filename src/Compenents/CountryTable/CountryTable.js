import React from "react";
import style from "./CountryTable.module.css";
import Link from "next/link";

const CountryTable = ({ country }) => {
  return (
    <div className={style.cont}>
      {country.map((country) => {
        return (
          <Link href={`/Country/${country.alpha3Code}`}>
            <div className={style.row}>
              <div className={style.imgFlag}>
                <img src={country.flag} />
              </div>
              <div className={style.mname}>{country.name}</div>

              <div className={style.mpopulation}>{country.population}</div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default CountryTable;
