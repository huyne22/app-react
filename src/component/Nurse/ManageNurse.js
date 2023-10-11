import { FcPlus } from "react-icons/fc";
import { useState, useEffect } from "react";
import { getAllNurse, getNurseSearch } from "../service/apiService";
import ModalCreateNurse from "./ModalCreateNurse";
import TableListNurse from "./TableListNurse";
import ModalEditNurse from "./ModalEditNurse";
import ModalDeleteNurse from "./ModalDeleteNurse";
import SearchName from "./service/searchName.js";

import withAuth from "../Admin/withAuth";
const ManageNurse = (props) => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [dataUpdate, setDataUpdate] = useState({});
  const [listNurse, setListNurse] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [totalUser, setTotalUser] = useState(0);

  //call api render list y tá
  useEffect(() => {
    fetchListNurse();
  }, []);
  const fetchListNurse = async (page) => {
    let res = await getAllNurse("ALL", page);
    // console.log("check res", res);
    if (res && res.errCode == 0) {
      setListNurse(res.data);
      setTotalUser(res?.pagination?.total);
      setTotalPage(res?.pagination?.totalpage);
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
    // console.log("show2", show2);
    // console.log("dataUpdate", dataUpdate);
  };
  const handleSearchName = async (search) => {
    console.log("a", search);
    let tenYT = search;
    let res = await getNurseSearch(tenYT);
    console.log("check res", res);
    return res;
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
        <SearchName onSearch={handleSearchName} />

        <TableListNurse
          fetchListNurse={fetchListNurse}
          totalPage={totalPage}
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
export default withAuth(ManageNurse);
