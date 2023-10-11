import { FcPlus } from "react-icons/fc";
import { useState, useEffect } from "react";
import { getAllPatient, getPatientSearch } from "../service/apiService";
import ModalCreatePatient from "./ModalCreatePatient";
import TableListPatient from "./TableListPatient";
import ModalEditPatient from "./ModalEditPatient";
import ModalDeletePatient from "./ModalDeletePatient";
import SearchPhone from "./service/SearchPhone";
import withAuth from "../Admin/withAuth";
// import withAuth from "../Admin/withAuth";
const ManagePatient = (props) => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [dataUpdate, setDataUpdate] = useState({});
  const [listPatient, setListPatient] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [totalUser, setTotalUser] = useState(0);

  //call api render list bệnh nhân
  useEffect(() => {
    const token = 2;
    if (token) {
      console.log("token", token);
      fetchListPatient();
    }
  }, []);
  const fetchListPatient = async (page) => {
    let res = await getAllPatient("ALL", page);
    console.log("check res", res);
    if (res && res.errCode == 0) {
      setListPatient(res?.data);
      setTotalUser(res?.pagination?.total);
      setTotalPage(res?.pagination?.totalpage);
    }
  };

  //click nút edit
  const handleBtnUpdate = (patient) => {
    setShow1(true);
    setDataUpdate(patient);
  };
  const handleBtnDelete = (patient) => {
    setShow2(true);
    setDataUpdate(patient);
    // console.log("show2", show2);
    // console.log("dataUpdate", dataUpdate);
  };
  const handleSearchPhone = async (search) => {
    let tel = { SoDT: search.toString() };
    let res = await getPatientSearch(tel);
    // console.log("check res", res);
    return res;
  };

  return (
    <div className="manage-user-container">
      <div className="title">Quản lý bệnh nhân</div>
      <div className="user-content">
        <div className="btn-add-new">
          <button className="btn btn-primary" onClick={() => setShow(true)}>
            <FcPlus />
            Thêm mới bệnh nhân
          </button>
        </div>
      </div>
      <SearchPhone onSearch={handleSearchPhone} />

      <div className="table-user-container">
        <TableListPatient
          listPatient={listPatient}
          totalPage={totalPage}
          fetchListPatient={fetchListPatient}
          handleBtnUpdate={handleBtnUpdate}
          handleBtnDelete={handleBtnDelete}
        />
      </div>
      <ModalCreatePatient
        show={show}
        setShow={setShow}
        fetchListPatient={fetchListPatient}
      />
      <ModalEditPatient
        show1={show1}
        setShow1={setShow1}
        dataUpdate={dataUpdate}
        fetchListPatient={fetchListPatient}
      />
      <ModalDeletePatient
        show2={show2}
        setShow2={setShow2}
        dataUpdate={dataUpdate}
        fetchListPatient={fetchListPatient}
      />
    </div>
  );
};
export default withAuth(ManagePatient);
