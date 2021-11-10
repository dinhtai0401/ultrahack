import React, { useState } from "react";
import PropTypes from "prop-types";

const SubmissionList = ({ submissions }) => {
  const [submissonFilter, setSubmissonFilter] = useState(submissions);
  const [inputValue, setInputValue] = useState("");
  const [order, setOrder] = useState(1);

  const handleChange = (e) => {
    let { value } = e.target;
    if (!value.trim()) {
      setSubmissonFilter(submissions);
    }
    setInputValue(value);
  }

  const handleSearch = () => {
    if (inputValue) {
      let result = submissions.filter((submisson) => {
        return (
          submisson.name
            .toLowerCase()
            .match(inputValue.toLocaleLowerCase().trim()) ||
          submisson.description
            .toLowerCase()
            .match(inputValue.toLocaleLowerCase().trim())
        );
      });
      setSubmissonFilter(result);
    } else {
      setSubmissonFilter(submissions);
    }
  }

  const handleSortBy = (name) => {
    let result = submissonFilter.sort((a, b) =>
      name === "name"
        ? a.name.toLowerCase() > b.name.toLowerCase()
          ? order
          : -order
        : a.created_at > b.created_at
          ? order
          : -order
    );
    setOrder(-order);
    setSubmissonFilter(result);
  }

  return (
    <div>
      <button onClick={() => handleSortBy("created_at")}>
        Sort by creation date
      </button>
      <button onClick={() => handleSortBy("name")}>Sort by name</button>
      <input
        type="text"
        onChange={handleChange}
        value={inputValue}
        placeholder="Search"
      />
      <button onClick={handleSearch}>Search</button>
      <div className="submissions">
        {submissonFilter.map((s) => (
          <div key={s.name} className="submission">
            <h1>{s.name}</h1>
            <p>{s.created_at}</p>
            <p>{s.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

SubmissionList.propTypes = {
  submissions: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      created_at: PropTypes.string, // 2021-11-08-T23:30:15.123Z
      description: PropTypes.string,
    })
  ),
};

export default SubmissionList;
