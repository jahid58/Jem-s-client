import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { ReactSearchAutocomplete } from "react-search-autocomplete";

function AutoSearch() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const requestBody = {
      query: `
                query {
                  products {
             rating
             title  
             name
             category
             gender
             brand
                  }
                }
                    `,
    };

    fetch("https://jems-server1.herokuapp.com/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())

      .then((resData) => {
        setItems(resData.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const history = useHistory();

  const handleOnSearch = (e) => {
    history.push(`/type/${e}`);
  };

  const handleOnSelect = (item) => {
    history.push(`/type/${item}`);
  };

  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: "block", textAlign: "left" }}>
          {" "}
          {item.name}
        </span>
      </>
    );
  };

  return (
    <div>
      <header>
        {items.length && (
          <div>
            <ReactSearchAutocomplete
              items={items}
              onSearch={handleOnSearch}
              onSelect={handleOnSelect}
              autoFocus
              formatResult={formatResult}
            />
          </div>
        )}
      </header>
    </div>
  );
}

export default AutoSearch;
