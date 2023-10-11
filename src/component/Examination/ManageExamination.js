import { FcPlus } from "react-icons/fc";
import { useState, useEffect } from "react";
import {
  getAllExamination,
  getMedicalExaminationSearch,
} from "../service/apiService";
import ModalCreateExamination from "./ModalCreateExamination";
import TableListExamination from "./TableListExamination";
import ModalEditExamination from "./ModalEditExamination";
import ModalDeleteExamination from "./ModalDeleteExamination";
import SearchDate from "./service/searchDate";
import withAuth from "../Admin/withAuth";
const ManageExamination = (props) => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [dataUpdate, setDataUpdate] = useState({});
  const [listExamination, setListExamination] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [totalUser, setTotalUser] = useState(0);

  //call api render list bệnh nhân
  useEffect(() => {
    fetchListExamination();
  }, []);
  const fetchListExamination = async (page) => {
    let res = await getAllExamination("ALL", page);
    console.log("check res", res);
    if (res && res.errCode == 0) {
      setListExamination(res?.data);
      setTotalUser(res?.pagination?.total);
      setTotalPage(res?.pagination?.totalpage);
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
    // console.log("show2", show2);
    // console.log("dataUpdate", dataUpdate);
  };
  const handleSearchDate = async (search) => {
    let date = { Ngay: search.toString() };
    let res = await getMedicalExaminationSearch(date);
    // console.log("check res", res);
    return res;
  };
  return (
    <div className="manage-user-container">
      <div className="title">Quản lý phiếu khám bệnh</div>
      <div className="user-content">
        <div className="btn-add-new">
          <button className="btn btn-primary" onClick={() => setShow(true)}>
            <FcPlus />
            Thêm mới phiếu khám bệnh
          </button>
        </div>
      </div>
      <SearchDate onSearch={handleSearchDate} />

      <div className="table-user-container">
        <TableListExamination
          fetchListExamination={fetchListExamination}
          totalPage={totalPage}
          listExamination={listExamination}
          handleBtnUpdate={handleBtnUpdate}
          handleBtnDelete={handleBtnDelete}
        />
      </div>
      <ModalCreateExamination
        show={show}
        setShow={setShow}
        fetchListExamination={fetchListExamination}
      />
      <ModalEditExamination
        show1={show1}
        setShow1={setShow1}
        dataUpdate={dataUpdate}
        fetchListExamination={fetchListExamination}
      />
      <ModalDeleteExamination
        show2={show2}
        setShow2={setShow2}
        dataUpdate={dataUpdate}
        fetchListExamination={fetchListExamination}
      />
    </div>
  );
};
export default withAuth(ManageExamination);
