import { FcPlus } from "react-icons/fc";
import { useState, useEffect } from "react";
import {
  getAllPatientMedicalService,
  getPatientMedicalServiceSearch,
} from "../service/apiService";
import ModalCreatePatientMedicalService from "./ModalCreatePatientMedicalService";
import TableListPatientMedicalService from "./TableListPatientMedicalService";
import ModalEditPatientMedicalService from "./ModalEditPatientMedicalService";
import ModalDeletePatientMedicalService from "./ModalDeletePatientMedicalService";
import SearchDate from "./service/searchDate";
import { FormattedMessage } from "react-intl";
import withAuth from "../Admin/withAuth";
const ManagePatientMedicalService = (props) => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [dataUpdate, setDataUpdate] = useState({});
  const [listPatientMedicalService, setListPatientMedicalService] = useState(
    []
  );
  const [totalPage, setTotalPage] = useState(0);
  const [totalUser, setTotalUser] = useState(0);

  useEffect(() => {
    fetchListPatientMedicalService();
  }, []);
  const fetchListPatientMedicalService = async (page) => {
    let res = await getAllPatientMedicalService("ALL", page);
    if (res && res.errCode == 0) {
      setListPatientMedicalService(res.data);
      setTotalUser(res?.pagination?.total);
      setTotalPage(res?.pagination?.totalpage);
    }
  };

  const handleBtnUpdate = (examination) => {
    setShow1(true);
    setDataUpdate(examination);
  };
  const handleBtnDelete = (examination) => {
    setShow2(true);
    setDataUpdate(examination);
  };
  const handleSearchDate = async (search) => {
    let date = { Ngay: search.toString() };
    let res = await getPatientMedicalServiceSearch(date);
    return res;
  };

  return (
    <div className="manage-user-container">
      <div className="title">
        <FormattedMessage id="system.patient_management_and_medical_services" />
      </div>
      <div className="user-content">
        <div className="btn-add-new">
          <button className="btn btn-primary" onClick={() => setShow(true)}>
            <FcPlus />
            <FormattedMessage id="system.add_new_patient-service" />
          </button>
        </div>
      </div>
      <SearchDate onSearch={handleSearchDate} />

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
export default withAuth(ManagePatientMedicalService);
