import React, { useState, useMemo } from "react";
import PropTypes from "prop-types";

const SubmissionList = ({ submissions: initialSubmissions }) => {
  const [initial] = useState(initialSubmissions);
  const [text, setText] = useState("");
  const [sorting, setSorting] = useState({ field: "", order: "" });
  const [search, setSearch] = useState("");

  const submissions = useMemo(() => {
    let computedInitial = initial;

    if (search) {
      computedInitial = computedInitial.filter(
        (submission) =>
          submission.name.toLowerCase().includes(search.toLowerCase()) ||
          submission.description.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (sorting.field) {
      const reversed = sorting.order === "asc" ? 1 : -1;
      computedInitial = computedInitial.sort(
        (a, b) => reversed * a[sorting.field].localeCompare(b[sorting.field])
      );
    }

    return computedInitial;
  }, [initial, sorting, search]);

  const handleChange = (e) => {
    const { value } = e.target;
    const trimmedValue = value.trim();
    setText(trimmedValue);
  };

  const handleSearch = () => {
    setSearch(text)
  };

  const onSortingChange = field => () => {
    const order =
      field === sorting.field && sorting.order === "asc" ? "desc" : "asc";
    setSorting({ field, order });
  };

  return (
    <div>
      <button onClick={onSortingChange("created_at")}>
        Sort by creation date
      </button>
      <button onClick={onSortingChange("name")}>Sort by name</button>
      <input
        type="text"
        onChange={handleChange}
        value={text}
        placeholder="Search"
      />
      <button onClick={handleSearch}>Search</button>
      <div className="submissions">
        {submissions.map((s) => (
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
