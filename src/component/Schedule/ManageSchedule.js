import { FcPlus } from "react-icons/fc";
import { useState, useEffect } from "react";
import { getAllSchedule } from "../service/apiService";
import ModalCreateSchedule from "./ModalCreateSchedule";
import TableListSchedule from "./TableListSchedule";
// import ModalEditSchedule from "./ModalEditSchedule";
import ModalDeleteSchedule from "./ModalDeleteSchedule";

const ManageSchedule = (props) => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [dataUpdate, setDataUpdate] = useState({});
  const [listSchedule, setListSchedule] = useState([]);

  //call api render list lịch trực
  useEffect(() => {
    fetchListSchedule();
  }, []);
  const fetchListSchedule = async () => {
    let res = await getAllSchedule("ALL");
    console.log("check res", res);
    if (res && res.errCode == 0) {
      setListSchedule(res.data);
    }
  };

  //click nút edit
  const handleBtnUpdate = (schedule) => {
    setShow1(true);
    setDataUpdate(schedule);
  };
  const handleBtnDelete = (schedule) => {
    setShow2(true);
    setDataUpdate(schedule);
    console.log("show2", show2);
    console.log("dataUpdate", dataUpdate);
  };

  return (
    <div className="manage-user-container">
      <div className="title">Quản lý lịch trực</div>
      <div className="user-content">
        <div className="btn-add-new">
          <button className="btn btn-primary" onClick={() => setShow(true)}>
            <FcPlus />
            Thêm mới lịch trực
          </button>
        </div>
      </div>
      <div className="table-user-container">
        <TableListSchedule
          listSchedule={listSchedule}
          handleBtnUpdate={handleBtnUpdate}
          handleBtnDelete={handleBtnDelete}
        />
      </div>
      <ModalCreateSchedule
        show={show}
        setShow={setShow}
        fetchListSchedule={fetchListSchedule}
      />
      {/* <ModalEditSchedule
        show1={show1}
        setShow1={setShow1}
        dataUpdate={dataUpdate}
        fetchListSchedule={fetchListSchedule}
      /> */}
      <ModalDeleteSchedule
        show2={show2}
        setShow2={setShow2}
        dataUpdate={dataUpdate}
        fetchListSchedule={fetchListSchedule}
      />
    </div>
  );
};
export default ManageSchedule;