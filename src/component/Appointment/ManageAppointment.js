import { FcPlus } from "react-icons/fc";
import { useState, useEffect } from "react";
import { getAllAppointment, getAppointmentSearch } from "../service/apiService";
import ModalCreateAppointment from "./ModalCreateAppointment";
import TableListAppointment from "./TableListAppointment";
import ModalDeleteAppointment from "./ModalDeleteAppointment";
import SearchDate from "./service/searchDate";
import withAuth from "../Admin/withAuth";
import { FormattedMessage } from "react-intl";

const ManageAppointment = (props) => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [dataUpdate, setDataUpdate] = useState({});
  const [listAppointment, setListAppointment] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [totalUser, setTotalUser] = useState(0);
  useEffect(() => {
    fetchListAppointment();
  }, []);
  const fetchListAppointment = async (page) => {
    let res = await getAllAppointment("ALL", page);
    if (res && res.errCode === 0) {
      setListAppointment(res.data);
      setTotalUser(res?.pagination?.total);
      setTotalPage(res?.pagination?.totalpage);
    }
  };

  const handleBtnUpdate = (appointment) => {
    setShow1(true);
    setDataUpdate(appointment);
  };
  const handleBtnDelete = (appointment) => {
    setShow2(true);
    setDataUpdate(appointment);
  };
  const handleSearchDate = async (search) => {
    let date = { Ngay: search.toString() };
    let res = await getAppointmentSearch(date);
    return res;
  };

  return (
    <div className="manage-user-container">
      <div className="title">
        <FormattedMessage id="system.manage_patient_appointment_schedules" />
      </div>
      <div className="user-content">
        <div className="btn-add-new">
          <button className="btn btn-primary" onClick={() => setShow(true)}>
            <FcPlus />
            <FormattedMessage id="system.add_new_appointment_schedule" />
          </button>
        </div>
      </div>
      <SearchDate onSearch={handleSearchDate} />
      <div className="table-user-container">
        <TableListAppointment
          fetchListAppointment={fetchListAppointment}
          totalPage={totalPage}
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

      <ModalDeleteAppointment
        show2={show2}
        setShow2={setShow2}
        dataUpdate={dataUpdate}
        fetchListAppointment={fetchListAppointment}
      />
    </div>
  );
};
export default withAuth(ManageAppointment);
