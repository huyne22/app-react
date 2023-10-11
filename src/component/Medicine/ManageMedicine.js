import { FcPlus } from "react-icons/fc";
import { useState, useEffect } from "react";
import { getAllMedicine, getMedicineSearch } from "../service/apiService";
import ModalCreateMedicine from "./ModalCreateMedicine";
import TableListMedicine from "./TableListMedicine";
import ModalEditMedicine from "./ModalEditMedicine";
import ModalDeleteMedicine from "./ModalDeleteMedicine";
import SearchName from "./service/searchName.js";

import withAuth from "../Admin/withAuth";
const ManageMedicine = (props) => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [dataUpdate, setDataUpdate] = useState({});
  const [listMedicine, setListMedicine] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [totalUser, setTotalUser] = useState(0);

  //call api render list bệnh nhân
  useEffect(() => {
    fetchListMedicine();
  }, []);
  const fetchListMedicine = async (page) => {
    let res = await getAllMedicine("ALL", page);
    // console.log("check res", res);
    if (res && res.errCode == 0) {
      setListMedicine(res.data);
      setTotalUser(res?.pagination?.total);
      setTotalPage(res?.pagination?.totalpage);
    }
  };

  //click nút edit
  const handleBtnUpdate = (medicine) => {
    setShow1(true);
    setDataUpdate(medicine);
  };
  const handleBtnDelete = (medicine) => {
    setShow2(true);
    setDataUpdate(medicine);
    // console.log("show2", show2);
    // console.log("dataUpdate", dataUpdate);
  };
  const handleSearchName = async (search) => {
    console.log("a", search);
    let tenThuoc = search;
    let res = await getMedicineSearch(tenThuoc);
    console.log("check res", res);
    return res;
  };

  return (
    <div className="manage-user-container">
      <div className="title">Quản lý thuốc</div>
      <div className="user-content">
        <div className="btn-add-new">
          <button className="btn btn-primary" onClick={() => setShow(true)}>
            <FcPlus />
            Thêm mới thuốc
          </button>
        </div>
      </div>
      <div className="table-user-container">
        <SearchName onSearch={handleSearchName} />

        <TableListMedicine
          fetchListMedicine={fetchListMedicine}
          totalPage={totalPage}
          listMedicine={listMedicine}
          handleBtnUpdate={handleBtnUpdate}
          handleBtnDelete={handleBtnDelete}
        />
      </div>
      <ModalCreateMedicine
        show={show}
        setShow={setShow}
        fetchListMedicine={fetchListMedicine}
      />
      <ModalEditMedicine
        show1={show1}
        setShow1={setShow1}
        dataUpdate={dataUpdate}
        fetchListMedicine={fetchListMedicine}
      />
      <ModalDeleteMedicine
        show2={show2}
        setShow2={setShow2}
        dataUpdate={dataUpdate}
        fetchListMedicine={fetchListMedicine}
      />
    </div>
  );
};
export default withAuth(ManageMedicine);
