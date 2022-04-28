import React from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

const SearchPost = ({
  write,
  setBartu,
  setPostId,
  setView,
  setCommentView,
  commentView,
}) => {
  const searchPostList = write.map((item, index) => ({
    id: index,
    name: item.title,
  }));

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results);
  };

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result);
  };

  const handleOnSelect = (item) => {
    setBartu(item.id);
    setPostId(write.id);
    setView("show-comment");

    // the item selected
    console.log("selectItem", item);
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };

  const formatResult = (item) => {
    return (
      <div style={{ zIndex: 1990 }}>
        <span style={{ display: "block", textAlign: "left" }}>{item.name}</span>
      </div>
    );
  };

  return (
    <div className="ui-menu-item-wrapper">
      <header className="App-header">
        <div style={{ width: 400 }}>
          <ReactSearchAutocomplete
            items={searchPostList}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            formatResult={formatResult}
            styling={{ zIndex: 1000 }}
          />
        </div>
      </header>
    </div>
  );
};

export default SearchPost;
