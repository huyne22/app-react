import { FcPlus } from "react-icons/fc";
import { useState, useEffect } from "react";
import { getAllPatientMedicalService } from "../service/apiService";
import ModalCreatePatientMedicalService from "./ModalCreatePatientMedicalService";
import TableListPatientMedicalService from "./TableListPatientMedicalService";
import ModalEditPatientMedicalService from "./ModalEditPatientMedicalService";
import ModalDeletePatientMedicalService from "./ModalDeletePatientMedicalService";

const ManagePatientMedicalService = (props) => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [dataUpdate, setDataUpdate] = useState({});
  const [listPatientMedicalService, setListPatientMedicalService] = useState(
    []
  );

  //call api render list bệnh nhân
  useEffect(() => {
    fetchListPatientMedicalService();
  }, []);
  const fetchListPatientMedicalService = async () => {
    let res = await getAllPatientMedicalService("ALL");
    console.log("check res", res);
    if (res && res.errCode == 0) {
      setListPatientMedicalService(res.data);
    }
  };

  //click nút edit
  const handleBtnUpdate = (examination) => {
    setShow1(true);
    setDataUpdate(examination);
  };
  const handleBtnDelete = (examination) => {
    setShow2(true);
    setDataUpdate(examination);
    console.log("show2", show2);
    console.log("dataUpdate", dataUpdate);
  };

  return (
    <div className="manage-user-container">
      <div className="title">Quản lý bệnh nhân - dịch vụ</div>
      <div className="user-content">
        <div className="btn-add-new">
          <button className="btn btn-primary" onClick={() => setShow(true)}>
            <FcPlus />
            Thêm mới bệnh nhân - dịch vụ
          </button>
        </div>
      </div>
      <div className="table-user-container">
        <TableListPatientMedicalService
          listPatientMedicalService={listPatientMedicalService}
          handleBtnUpdate={handleBtnUpdate}
          handleBtnDelete={handleBtnDelete}
        />
      </div>
      <ModalCreatePatientMedicalService
        show={show}
        setShow={setShow}
        fetchListPatientMedicalService={fetchListPatientMedicalService}
      />
      <ModalEditPatientMedicalService
        show1={show1}
        setShow1={setShow1}
        dataUpdate={dataUpdate}
        fetchListPatientMedicalService={fetchListPatientMedicalService}
      />
      <ModalDeletePatientMedicalService
        show2={show2}
        setShow2={setShow2}
        dataUpdate={dataUpdate}
        fetchListPatientMedicalService={fetchListPatientMedicalService}
      />
    </div>
  );
};
export default ManagePatientMedicalService;
