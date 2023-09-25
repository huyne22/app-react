import { FcPlus } from "react-icons/fc";
import { useState, useEffect } from "react";
import { getAllPatient } from "../service/apiService";
import ModalCreatePatient from "./ModalCreatePatient";
import TableListPatient from "./TableListPatient";
import ModalEditPatient from "./ModalEditPatient";
import ModalDeletePatient from "./ModalDeletePatient";
// import withAuth from "../Admin/withAuth";
const ManagePatient = (props) => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [dataUpdate, setDataUpdate] = useState({});
  const [listPatient, setListPatient] = useState([]);

  //call api render list bệnh nhân
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      fetchListPatient();
    }
  }, []);
  const fetchListPatient = async () => {
    let res = await getAllPatient("ALL");
    console.log("check res", res);
    if (res && res.errCode == 0) {
      setListPatient(res.data);
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
    console.log("show2", show2);
    console.log("dataUpdate", dataUpdate);
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
      <div className="table-user-container">
        <TableListPatient
          listPatient={listPatient}
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
export default ManagePatient;
