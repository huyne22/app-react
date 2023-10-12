import React, { useState } from "react";
import { FormattedMessage } from "react-intl";

const SearchName = (props) => {
  const [tenDV, setTenDV] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const { onSearch } = props;
  const [data, setData] = useState("");
  const handleSearch = async () => {
    console.log("data", data);
    let on = await onSearch(tenDV);
    setData(on);
    toggleVisibility();
  };
  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };
  return (
    <>
      <div>
        <div className="mb-3">
          <label htmlFor="TenDV" className="form-label">
            <FormattedMessage id="system.service's_name" />
          </label>
          <input
            type="text"
            className="form-control"
            id="TenDV"
            name="TenDV"
            value={tenDV}
            onChange={(e) => setTenDV(e.target.value)}
            required
          />
        </div>
        <button className="btn-search" onClick={handleSearch}>
          <FormattedMessage id="common.search" />
        </button>
      </div>
      <table className="table table-striped table-bordered table-hover table-spacing">
        <div style={{ display: isVisible ? "block" : "none" }}>
          {data?.data &&
            data?.data?.map((item, index) => (
              <tr key={index}>
                <td>{item.MaDV}</td>
                <td>{item.TenDV}</td>
                <td>{item.MoTaDV}</td>
                <td>{item.GiaTien}</td>
                <td>{item.GhiChu}</td>
              </tr>
            ))}
        </div>
      </table>
    </>
  );
};

export default SearchName;
