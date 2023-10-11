import { FcPlus } from "react-icons/fc";
import { useState, useEffect } from "react";
import {
  getAllMedicalService,
  getMedicalServiceSearch,
} from "../service/apiService";
import ModalCreateMedicalService from "./ModalCreateMedicalService";
import TableListMedicalService from "./TableListMedicalService";
import ModalEditMedicalService from "./ModalEditMedicalService";
import ModalDeleteMedicalService from "./ModalDeleteMedicalService";
import SearchName from "./service/searchName.js";
import withAuth from "../Admin/withAuth";
const ManageMedicalService = (props) => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [dataUpdate, setDataUpdate] = useState({});
  const [listMedicalService, setListMedicalService] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [totalUser, setTotalUser] = useState(0);

  //call api render list bệnh nhân
  useEffect(() => {
    fetchListMedicalService();
  }, []);
  const fetchListMedicalService = async (page) => {
    let res = await getAllMedicalService("ALL", page);
    // console.log("check res", res);
    if (res && res.errCode == 0) {
      setListMedicalService(res.data);
      setTotalUser(res?.pagination?.total);
      setTotalPage(res?.pagination?.totalpage);
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
    // console.log("show2", show2);
    // console.log("dataUpdate", dataUpdate);
  };
  const handleSearchName = async (search) => {
    console.log("a", search);
    let tenDV = search;
    let res = await getMedicalServiceSearch(tenDV);
    console.log("check res", res);
    return res;
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
        <SearchName onSearch={handleSearchName} />
        <TableListMedicalService
          fetchListMedicalService={fetchListMedicalService}
          totalPage={totalPage}
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
export default withAuth(ManageMedicalService);
