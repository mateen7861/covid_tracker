import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";

import { getCountries } from "../../api";

const Countries = ({ CountrySelect }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const data = await getCountries();
      setCountries(data.countries);
    };

    fetchCountries();
  }, []);

  return (
    <FormControl>
      <NativeSelect
        defaultValue=""
        onChange={(e) => CountrySelect(e.target.value)}
      >
        <option value="">Global</option>
        {countries.map((country, i) => (
          <option key={i} value={country.name}>
            {country.name}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default Countries;
