import { FcPlus } from "react-icons/fc";
import { useState, useEffect } from "react";
import { getAllAppointment } from "../service/apiService";
import ModalCreateAppointment from "./ModalCreateAppointment";
import TableListAppointment from "./TableListAppointment";
import ModalEditAppointment from "./ModalEditAppointment";
import ModalDeleteAppointment from "./ModalDeleteAppointment";

const ManageAppointment = (props) => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [dataUpdate, setDataUpdate] = useState({});
  const [listAppointment, setListAppointment] = useState([]);

  //call api render list lịch trực
  useEffect(() => {
    fetchListAppointment();
  }, []);
  const fetchListAppointment = async () => {
    let res = await getAllAppointment("ALL");
    console.log("check res", res);
    if (res && res.errCode == 0) {
      setListAppointment(res.data);
    }
  };

  //click nút edit
  const handleBtnUpdate = (appointment) => {
    setShow1(true);
    setDataUpdate(appointment);
  };
  const handleBtnDelete = (appointment) => {
    setShow2(true);
    setDataUpdate(appointment);
    console.log("show2", show2);
    console.log("dataUpdate", dataUpdate);
  };

  return (
    <div className="manage-user-container">
      <div className="title">Quản lý lịch hẹn</div>
      <div className="user-content">
        <div className="btn-add-new">
          <button className="btn btn-primary" onClick={() => setShow(true)}>
            <FcPlus />
            Thêm mới lịch hẹn
          </button>
        </div>
      </div>
      <div className="table-user-container">
        <TableListAppointment
          listAppointment={listAppointment}
          handleBtnUpdate={handleBtnUpdate}
          handleBtnDelete={handleBtnDelete}
        />
      </div>
      <ModalCreateAppointment
        show={show}
        setShow={setShow}
        fetchListAppointment={fetchListAppointment}
      />
      <ModalEditAppointment
        show1={show1}
        setShow1={setShow1}
        dataUpdate={dataUpdate}
        fetchListAppointment={fetchListAppointment}
      />
      <ModalDeleteAppointment
        show2={show2}
        setShow2={setShow2}
        dataUpdate={dataUpdate}
        fetchListAppointment={fetchListAppointment}
      />
    </div>
  );
};
export default ManageAppointment;
