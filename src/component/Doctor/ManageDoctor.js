import { FcPlus } from "react-icons/fc";
import { useState, useEffect } from "react";
import { getAllDoctor, getDoctorSearch } from "../service/apiService";
import ModalCreateDoctor from "./ModalCreateDoctor";
import TableListDoctor from "./TableListDoctor";
import ModalEditDoctor from "./ModalEditDoctor";
import ModalDeleteDoctor from "./ModalDeleteDoctor";
import SearchName from "./service/searchName.js";
import { FormattedMessage } from "react-intl";

import withAuth from "../Admin/withAuth";
const ManageDoctor = (props) => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [dataUpdate, setDataUpdate] = useState({});
  const [listDoctor, setListDoctor] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [totalUser, setTotalUser] = useState(0);

  useEffect(() => {
    fetchListDoctor();
  }, []);
  const fetchListDoctor = async (page) => {
    let res = await getAllDoctor("ALL", page);
    if (res && res.errCode == 0) {
      setListDoctor(res.data);
      setTotalUser(res?.pagination?.total);
      setTotalPage(res?.pagination?.totalpage);
    }
  };

  //click nút edit
  const handleBtnUpdate = (doctor) => {
    setShow1(true);
    setDataUpdate(doctor);
  };
  const handleBtnDelete = (doctor) => {
    setShow2(true);
    setDataUpdate(doctor);
  };
  const handleSearchName = async (search) => {
    console.log("a", search);
    let tenBS = search;
    let res = await getDoctorSearch(tenBS);
    console.log("check res", res);
    return res;
  };

  return (
    <div className="manage-user-container">
      <div className="title">
        <FormattedMessage id="system.doctor_management" />
      </div>
      <div className="user-content">
        <div className="btn-add-new">
          <button className="btn btn-primary" onClick={() => setShow(true)}>
            <FcPlus />
            <FormattedMessage id="system.add_new_doctor" />
          </button>
        </div>
      </div>
      <div className="table-user-container">
        <SearchName onSearch={handleSearchName} />

        <TableListDoctor
          fetchListDoctor={fetchListDoctor}
          totalPage={totalPage}
          listDoctor={listDoctor}
          handleBtnUpdate={handleBtnUpdate}
          handleBtnDelete={handleBtnDelete}
        />
      </div>
      <ModalCreateDoctor
        show={show}
        setShow={setShow}
        fetchListDoctor={fetchListDoctor}
      />
      <ModalEditDoctor
        show1={show1}
        setShow1={setShow1}
        dataUpdate={dataUpdate}
        fetchListDoctor={fetchListDoctor}
      />
      <ModalDeleteDoctor
        show2={show2}
        setShow2={setShow2}
        dataUpdate={dataUpdate}
        fetchListDoctor={fetchListDoctor}
      />
    </div>
  );
};
export default withAuth(ManageDoctor);
