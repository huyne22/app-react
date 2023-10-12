import { FcPlus } from "react-icons/fc";
import { useState, useEffect } from "react";
import { getAllScheduleNurse, getScheduleSearch } from "../service/apiService";
import ModalCreateScheduleNurse from "./ModalCreateScheduleNurse";
import TableListScheduleNurse from "./TableListScheduleNurse";
import ModalEditScheduleNurse from "./ModalEditScheduleNurse";
import ModalDeleteScheduleNurse from "./ModalDeleteScheduleNurse";
import SearchDate from "./service/searchDate";
import { FormattedMessage } from "react-intl";
import withAuth from "../Admin/withAuth";
const ManageScheduleNurse = (props) => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [dataUpdate, setDataUpdate] = useState({});
  const [listSchedule, setListSchedule] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [totalUser, setTotalUser] = useState(0);

  useEffect(() => {
    fetchListSchedule();
  }, []);
  const fetchListSchedule = async (page) => {
    let res = await getAllScheduleNurse("ALL", page);
    if (res && res.errCode == 0) {
      setListSchedule(res.data);
      setTotalUser(res?.pagination?.total);
      setTotalPage(res?.pagination?.totalpage);
    }
  };

  const handleBtnUpdate = (schedule) => {
    setShow1(true);
    setDataUpdate(schedule);
  };
  const handleBtnDelete = (schedule) => {
    setShow2(true);
    setDataUpdate(schedule);
  };
  const handleSearchDate = async (search) => {
    let date = { Ngay: search.toString() };
    let res = await getScheduleSearch(date);
    return res;
  };

  return (
    <div className="manage-user-container">
      <div className="title">
        <FormattedMessage id="system.manage_doctor's_duty_schedule" />
      </div>
      <div className="user-content">
        <div className="btn-add-new">
          <button className="btn btn-primary" onClick={() => setShow(true)}>
            <FcPlus />
            <FormattedMessage id="system.add_new_on-call_schedule" />
          </button>
        </div>
      </div>
      <SearchDate onSearch={handleSearchDate} />

      <div className="table-user-container">
        <TableListScheduleNurse
          fetchListSchedule={fetchListSchedule}
          totalPage={totalPage}
          listSchedule={listSchedule}
          handleBtnUpdate={handleBtnUpdate}
          handleBtnDelete={handleBtnDelete}
        />
      </div>
      <ModalCreateScheduleNurse
        show={show}
        setShow={setShow}
        fetchListSchedule={fetchListSchedule}
      />
      <ModalEditScheduleNurse
        show1={show1}
        setShow1={setShow1}
        dataUpdate={dataUpdate}
        fetchListSchedule={fetchListSchedule}
      />
      <ModalDeleteScheduleNurse
        show2={show2}
        setShow2={setShow2}
        dataUpdate={dataUpdate}
        fetchListSchedule={fetchListSchedule}
      />
    </div>
  );
};
export default withAuth(ManageScheduleNurse);
