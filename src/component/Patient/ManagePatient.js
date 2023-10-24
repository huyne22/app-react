import { FcPlus } from "react-icons/fc";
import { useState, useEffect } from "react";
import { getAllPatient, getPatientSearch } from "../service/apiService";
import ModalCreatePatient from "./ModalCreatePatient";
import TableListPatient from "./TableListPatient";
import ModalEditPatient from "./ModalEditPatient";
import ModalDeletePatient from "./ModalDeletePatient";
import SearchPhone from "./service/SearchPhone";
import { FormattedMessage } from "react-intl";
import withAuth from "../Admin/withAuth";
const ManagePatient = (props) => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [dataUpdate, setDataUpdate] = useState({});
  const [listPatient, setListPatient] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [totalUser, setTotalUser] = useState(0);

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

  const handleBtnUpdate = (patient) => {
    setShow1(true);
    setDataUpdate(patient);
  };
  const handleBtnDelete = (patient) => {
    setShow2(true);
    setDataUpdate(patient);
  };
  const handleSearchPhone = async (search) => {
    let tel = { SoDT: search.toString() };

    let res = await getPatientSearch(tel);
    return res;
  };

  return (
    <div className="manage-user-container">
      <div className="title">
        {" "}
        <FormattedMessage id="system.patient_management" />
      </div>
      <div className="user-content">
        <div className="btn-add-new">
          <button className="btn btn-primary" onClick={() => setShow(true)}>
            <FcPlus />
            <FormattedMessage id="system.add_new_patient" />
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
