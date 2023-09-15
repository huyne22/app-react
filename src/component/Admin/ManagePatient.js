import { FcPlus } from "react-icons/fc";
import { useState, useEffect } from "react";
import { getAllPatient } from "../service/apiService";
import ModalCreateUser from "./ModalCreateUser";
import TableListPatient from "./TableListPatient";
import ModalEditPatient from "./ModalEditPatient";

const ManagePatient = (props) => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [dataUpdate, setDataUpdate] = useState({});
  const [listPatient, setListPatient] = useState([]);

  //call api render list bệnh nhân
  useEffect(() => {
    fetchListPatient();
  }, []);
  const fetchListPatient = async () => {
    let res = await getAllPatient("ALL");
    if (res && res.errCode == 0) {
      setListPatient(res.data);
    }
  };

  //click nút edit
  const handleBtnUpdate = (patient) => {
    setShow1(true);
    setDataUpdate(patient);
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
        />
      </div>
      <ModalCreateUser
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
    </div>
  );
};
export default ManagePatient;
