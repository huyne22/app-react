import { FcPlus } from "react-icons/fc";
import { useState, useEffect } from "react";
import { getAllMedicalService } from "../service/apiService";
import ModalCreateMedicalService from "./ModalCreateMedicalService";
import TableListMedicalService from "./TableListMedicalService";
import ModalEditMedicalService from "./ModalEditMedicalService";
import ModalDeleteMedicalService from "./ModalDeleteMedicalService";

const ManageMedicalService = (props) => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [dataUpdate, setDataUpdate] = useState({});
  const [listMedicalService, setListMedicalService] = useState([]);

  //call api render list bệnh nhân
  useEffect(() => {
    fetchListMedicalService();
  }, []);
  const fetchListMedicalService = async () => {
    let res = await getAllMedicalService("ALL");
    console.log("check res", res);
    if (res && res.errCode == 0) {
      setListMedicalService(res.data);
    }
  };

  //click nút edit
  const handleBtnUpdate = (medicalService) => {
    setShow1(true);
    setDataUpdate(medicalService);
  };
  const handleBtnDelete = (medicalService) => {
    setShow2(true);
    setDataUpdate(medicalService);
    console.log("show2", show2);
    console.log("dataUpdate", dataUpdate);
  };

  return (
    <div className="manage-user-container">
      <div className="title">Quản lý dịch vụ</div>
      <div className="user-content">
        <div className="btn-add-new">
          <button className="btn btn-primary" onClick={() => setShow(true)}>
            <FcPlus />
            Thêm mới dịch vụ
          </button>
        </div>
      </div>
      <div className="table-user-container">
        <TableListMedicalService
          listMedicalService={listMedicalService}
          handleBtnUpdate={handleBtnUpdate}
          handleBtnDelete={handleBtnDelete}
        />
      </div>
      <ModalCreateMedicalService
        show={show}
        setShow={setShow}
        fetchListMedicalService={fetchListMedicalService}
      />
      <ModalEditMedicalService
        show1={show1}
        setShow1={setShow1}
        dataUpdate={dataUpdate}
        fetchListMedicalService={fetchListMedicalService}
      />
      <ModalDeleteMedicalService
        show2={show2}
        setShow2={setShow2}
        dataUpdate={dataUpdate}
        fetchListMedicalService={fetchListMedicalService}
      />
    </div>
  );
};
export default ManageMedicalService;
