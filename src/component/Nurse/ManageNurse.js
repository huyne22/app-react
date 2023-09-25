import { FcPlus } from "react-icons/fc";
import { useState, useEffect } from "react";
import { getAllNurse } from "../service/apiService";
import ModalCreateNurse from "./ModalCreateNurse";
import TableListNurse from "./TableListNurse";
import ModalEditNurse from "./ModalEditNurse";
import ModalDeleteNurse from "./ModalDeleteNurse";

const ManageNurse = (props) => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [dataUpdate, setDataUpdate] = useState({});
  const [listNurse, setListNurse] = useState([]);

  //call api render list y tá
  useEffect(() => {
    fetchListNurse();
  }, []);
  const fetchListNurse = async () => {
    let res = await getAllNurse("ALL");
    console.log("check res", res);
    if (res && res.errCode == 0) {
      setListNurse(res.data);
    }
  };

  //click nút edit
  const handleBtnUpdate = (nurse) => {
    setShow1(true);
    setDataUpdate(nurse);
  };
  const handleBtnDelete = (nurse) => {
    setShow2(true);
    setDataUpdate(nurse);
    console.log("show2", show2);
    console.log("dataUpdate", dataUpdate);
  };

  return (
    <div className="manage-user-container">
      <div className="title">Quản lý y tá</div>
      <div className="user-content">
        <div className="btn-add-new">
          <button className="btn btn-primary" onClick={() => setShow(true)}>
            <FcPlus />
            Thêm mới y tá
          </button>
        </div>
      </div>
      <div className="table-user-container">
        <TableListNurse
          listNurse={listNurse}
          handleBtnUpdate={handleBtnUpdate}
          handleBtnDelete={handleBtnDelete}
        />
      </div>
      <ModalCreateNurse
        show={show}
        setShow={setShow}
        fetchListNurse={fetchListNurse}
      />
      <ModalEditNurse
        show1={show1}
        setShow1={setShow1}
        dataUpdate={dataUpdate}
        fetchListNurse={fetchListNurse}
      />
      <ModalDeleteNurse
        show2={show2}
        setShow2={setShow2}
        dataUpdate={dataUpdate}
        fetchListNurse={fetchListNurse}
      />
    </div>
  );
};
export default ManageNurse;
