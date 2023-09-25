import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { postEditDoctor } from "../service/apiService";
import { useEffect } from "react";
import _ from "lodash";
import { toast } from "react-toastify";
const ModalEditDoctor = (props) => {
  const { show1, setShow1, dataUpdate } = props;
  const [maBS, setMaBS] = useState("");
  const [hoBS, setHoBS] = useState("");
  const [tenBS, setTenBS] = useState("");
  const [soDT, setSoDT] = useState("");
  const [email, setEmail] = useState("");
  const [bangCap, setBangCap] = useState("");
  const [chuyenMon, setChuyenMon] = useState("");
  const [gioiTinh, setGioiTinh] = useState("Nam");
  const [maNguoiDung, setMaNguoiDung] = useState("");
  const [ghiChu, setGhiChu] = useState("");
  const [yourObject, setYourObject] = useState({});

  const updateObjectWithNewProperty = () => {
    // Tạo bản sao của đối tượng hiện tại để không ghi đè lên trực tiếp
    const updatedObject = { ...yourObject };
    setYourObject(updatedObject); // Cập nhật đối tượng với thuộc tính mới
  };
  useEffect(() => {
    console.log("dataUpdate");
    if (!_.isEmpty(dataUpdate)) {
      setMaBS(dataUpdate.MaBS);
      setHoBS(dataUpdate.HoBS);
      setTenBS(dataUpdate.TenBS);
      setSoDT(dataUpdate.SoDT);
      setEmail(dataUpdate.Email);
      setBangCap(dataUpdate.BangCap);
      setChuyenMon(dataUpdate.ChuyenMon);
      setGioiTinh(dataUpdate.GioiTinh);
      setMaNguoiDung(dataUpdate.MaNguoiDung);
      setGhiChu(dataUpdate.GhiChu);
      updateObjectWithNewProperty();
    } else {
    }
  }, [dataUpdate]);
  //ma
  useEffect(() => {
    setYourObject((prevObject) => ({
      ...prevObject,
      MaBS: maBS.toString(),
    }));
  }, [maBS]);
  //ho
  useEffect(() => {
    setYourObject((prevObject) => ({
      ...prevObject,
      HoBS: hoBS,
    }));
  }, [hoBS]);
  //ten
  useEffect(() => {
    setYourObject((prevObject) => ({
      ...prevObject,
      TenBS: tenBS,
    }));
  }, [tenBS]);
  //soDT
  useEffect(() => {
    setYourObject((prevObject) => ({
      ...prevObject,
      SoDT: soDT,
    }));
  }, [soDT]);
  //email
  useEffect(() => {
    setYourObject((prevObject) => ({
      ...prevObject,
      Email: email,
    }));
  }, [email]);
  //bangCap
  useEffect(() => {
    setYourObject((prevObject) => ({
      ...prevObject,
      BangCap: bangCap,
    }));
  }, [bangCap]);
  //chuyenMon
  useEffect(() => {
    setYourObject((prevObject) => ({
      ...prevObject,
      ChuyenMon: chuyenMon,
    }));
  }, [chuyenMon]);
  //gioiTinh
  useEffect(() => {
    setYourObject((prevObject) => ({
      ...prevObject,
      GioiTinh: gioiTinh,
    }));
  }, [gioiTinh]);
  // maNguoiDung
  useEffect(() => {
    setYourObject((prevObject) => ({
      ...prevObject,
      MaNguoiDung: maNguoiDung,
    }));
  }, [maNguoiDung]);
  //ghichu
  useEffect(() => {
    setYourObject((prevObject) => ({
      ...prevObject,
      GhiChu: ghiChu,
    }));
  }, [ghiChu]);

  const handleSubmit = async (e) => {
    let res = await postEditDoctor(yourObject);
    console.log(res);
    if (res?.errCode === 0) {
      setShow1(false);
      toast.success("Cập nhật bác sĩ thành công!");
      await props.fetchListDoctor();
    } else if (res?.errCode === 3) {
      setShow1(false);
      toast.info("Không có trường dữ liệu nào được cập nhật!");
    } else {
      toast.error("Cập nhật bác sĩ thất bại!");
    }
  };

  const handleClose = () => {
    setShow1(false);
    // setMaBS("");
    // setHoBS("");
    // setTenBS("");
    // setSoDT("");
    // setEmail("");
    // setBangCap("");
    // setChuyenMon("Nam");
    // setGioiTinh("");
    console.log("close");
  };
  return (
    <>
      <Modal
        size="lg"
        show={show1}
        onHide={() => handleClose(false)}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Chỉnh sửa thông tin bác sĩ</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container mt-3">
            <div className="mb-3">
              <label htmlFor="MaBS" className="form-label">
                Mã Bác sĩ
              </label>
              <input
                type="text"
                className="form-control"
                id="MaBS"
                name="MaBS"
                value={maBS}
                onChange={(e) => setMaBS(e.target.value)}
                disabled
              />
            </div>
            <div className="mb-3">
              <label htmlFor="HoBS" className="form-label">
                Họ
              </label>
              <input
                type="text"
                className="form-control"
                id="HoBS"
                name="HoBS"
                value={hoBS}
                onChange={(e) => setHoBS(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="TenBS" className="form-label">
                Tên
              </label>
              <input
                type="text"
                className="form-control"
                id="TenBS"
                name="TenBS"
                value={tenBS}
                onChange={(e) => setTenBS(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="SoDT" className="form-label">
                Số Điện Thoại
              </label>
              <input
                type="tel"
                className="form-control"
                id="SoDT"
                name="SoDT"
                value={soDT}
                onChange={(e) => setSoDT(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="Email"
                name="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="BangCap" className="form-label">
                Bằng cấp
              </label>
              <input
                type="text"
                className="form-control"
                id="BangCap"
                name="BangCap"
                value={bangCap}
                onChange={(e) => setBangCap(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="ChuyenMon" className="form-label">
                Chuyên môn
              </label>
              <input
                type="text"
                className="form-control"
                id="ChuyenMon"
                name="ChuyenMon"
                value={chuyenMon}
                onChange={(e) => setChuyenMon(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="GioiTinh" className="form-label">
                Giới tính
              </label>
              <select
                className="form-select"
                id="GioiTinh"
                name="GioiTinh"
                value={gioiTinh}
                onChange={(e) => setGioiTinh(e.target.value)}
              >
                <option value="Nam">Nam</option>
                <option value="Nữ">Nữ</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="MaNguoiDung" className="form-label">
                Mã người dùng
              </label>
              <input
                className="form-control"
                id="MaNguoiDung"
                name="MaNguoiDung"
                value={maNguoiDung}
                onChange={(e) => setMaNguoiDung(e.target.value)}
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="GhiChu" className="form-label">
                Ghi Chú
              </label>
              <textarea
                className="form-control"
                id="GhiChu"
                name="GhiChu"
                value={ghiChu}
                onChange={(e) => setGhiChu(e.target.value)}
              ></textarea>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={(e) => handleSubmit(e)}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ModalEditDoctor;
