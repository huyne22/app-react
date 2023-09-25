import { FcPlus } from "react-icons/fc";
import { useState, useEffect } from "react";
import { getAllDoctor } from "../service/apiService";
import ModalCreateDoctor from "./ModalCreateDoctor";
import TableListDoctor from "./TableListDoctor";
import ModalEditDoctor from "./ModalEditDoctor";
import ModalDeleteDoctor from "./ModalDeleteDoctor";

const ManageDoctor = (props) => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [dataUpdate, setDataUpdate] = useState({});
  const [listDoctor, setListDoctor] = useState([]);

  //call api render list bác sĩ
  useEffect(() => {
    fetchListDoctor();
  }, []);
  const fetchListDoctor = async () => {
    let res = await getAllDoctor("ALL");
    console.log("check res", res);
    if (res && res.errCode == 0) {
      setListDoctor(res.data);
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
    console.log("show2", show2);
    console.log("dataUpdate", dataUpdate);
  };

  return (
    <div className="manage-user-container">
      <div className="title">Quản lý bác sĩ</div>
      <div className="user-content">
        <div className="btn-add-new">
          <button className="btn btn-primary" onClick={() => setShow(true)}>
            <FcPlus />
            Thêm mới bác sĩ
          </button>
        </div>
      </div>
      <div className="table-user-container">
        <TableListDoctor
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
export default ManageDoctor;
