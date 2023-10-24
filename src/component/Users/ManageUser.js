import { FcPlus } from "react-icons/fc";
import { useState, useEffect } from "react";
import { getAllUser, getUserSearch } from "../service/apiService";
import TableListUser from "./TableListUser";
import ModalEditUser from "./ModalEditUser";
import ModalDeleteUser from "./ModalDeleteUser";
import SearchName from "./service/searchName.js";
import { FormattedMessage } from "react-intl";

import withAuth from "../Admin/withAuth";
const ManageUser = (props) => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [dataUpdate, setDataUpdate] = useState({});
  const [listUser, setListUser] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [totalUser, setTotalUser] = useState(0);

  useEffect(() => {
    fetchListUser();
  }, []);
  const fetchListUser = async (page) => {
    let res = await getAllUser("ALL", page);
    if (res && res.errCode == 0) {
      setListUser(res.data);
      setTotalUser(res?.pagination?.total);
      setTotalPage(res?.pagination?.totalpage);
    }
  };

  const handleBtnUpdate = (user) => {
    setShow1(true);
    setDataUpdate(user);
  };
  const handleBtnDelete = (user) => {
    setShow2(true);
    setDataUpdate(user);
  };
  const handleSearchName = async (search) => {
    console.log("a", search);
    let tenBS = search;
    let res = await getUserSearch(tenBS);
    console.log("check res", res);
    return res;
  };

  return (
    <div className="manage-user-container">
      <div className="title">
        <FormattedMessage id="system.user_management" />
      </div>
      <div className="user-content">
        <div className="btn-add-new">
          <button
            className="btn btn-primary"
            disabled
            onClick={() => setShow(true)}
          >
            <FcPlus />
            <FormattedMessage id="system.add_new_user" />
          </button>
        </div>
      </div>
      <div className="table-user-container">
        <SearchName onSearch={handleSearchName} />
        <ModalEditUser
          show1={show1}
          setShow1={setShow1}
          dataUpdate={dataUpdate}
          fetchListUser={fetchListUser}
        />
        <ModalDeleteUser
          show2={show2}
          setShow2={setShow2}
          dataUpdate={dataUpdate}
          fetchListUser={fetchListUser}
        />
        <TableListUser
          fetchListUser={fetchListUser}
          totalPage={totalPage}
          listUser={listUser}
          handleBtnUpdate={handleBtnUpdate}
          handleBtnDelete={handleBtnDelete}
        />
      </div>
    </div>
  );
};
export default withAuth(ManageUser);
