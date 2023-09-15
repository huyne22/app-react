import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { postEditPatient } from "../service/apiService";
import { useEffect } from "react";
import _ from "lodash";
import { postCreatePatient } from "../service/apiService";
import { toast } from "react-toastify";
const ModalEditPatient = (props) => {
  const [data, setData] = useState({});
  const { show1, setShow1, dataUpdate } = props;
  const [maBN, setMaBN] = useState("");
  const [hoBN, setHoBN] = useState("");
  const [tenBN, setTenBN] = useState("");
  const [soDT, setSoDT] = useState("");
  const [email, setEmail] = useState("");
  const [ngaySinh, setNgaySinh] = useState("");
  const [gioiTinh, setGioiTinh] = useState("Nam");
  const [diaChi, setDiaChi] = useState("");
  const [patientInfo, setPatientInfo] = useState({
    MaBN: "",
    HoBN: "",
    TenBN: "",
    SoDT: "",
    Email: "",
    NgaySinh: "",
    GioiTinh: "Nam",
    DiaChi: "",
  });

  useEffect(() => {
    if (!_.isEmpty(dataUpdate)) {
      setMaBN(dataUpdate.MaBN);
      setHoBN(dataUpdate.HoBN);
      setTenBN(dataUpdate.TenBN);
      setSoDT(dataUpdate.SoDT);
      setEmail(dataUpdate.Email);
      setNgaySinh(dataUpdate.NgaySinh.split("T")[0]);
      setGioiTinh(dataUpdate.GioiTinh);
      setDiaChi(dataUpdate.DiaChi);
    } else {
    }
  }, [dataUpdate]);

  const handleSubmit = async (e) => {
    await updateBN();

    //set lại ngày

    // let newData = {
    //   MaBN: maBN,
    //   HoBN: hoBN,
    //   TenBN: tenBN,
    //   SoDT: soDT,
    //   Email: email,
    //   NgaySinh: ngaySinh,
    //   GioiTinh: gioiTinh,
    //   DiaChi: diaChi,
    // };

    console.log(patientInfo);
    //truyền data mới
    // let res = await postEditPatient();
    // console.log(res);
    // if (res && res.errCode == 0) {
    //   setShow1(false);
    //   toast.success("Cập nhật bệnh nhân thành công!");
    //   await props.fetchListPatient();
    // } else {
    //   toast.error("Cập nhật bệnh nhân thất bại!");
    // }
  };
  const updateBN = () => {
    let a = new Date(ngaySinh);
    console.log(a.toISOString().split("T")[0]);
    ngaySinh = a.toISOString().split("T")[0];
    setPatientInfo((prevState) => ({
      ...prevState,
      MaBN: maBN,
      HoBN: hoBN,
      TenBN: tenBN,
      SoDT: soDT,
      Email: email,
      NgaySinh: ngaySinh,
      GioiTinh: gioiTinh,
      DiaChi: diaChi,
    }));
  };

  const handleClose = () => {
    setShow1(false);
    setMaBN("");
    setHoBN("");
    setTenBN("");
    setSoDT("");
    setEmail("");
    setNgaySinh("");
    setGioiTinh("Nam");
    setDiaChi("");
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
          <Modal.Title>Chỉnh sửa thông tin bệnh nhân</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container mt-3">
            <div className="mb-3">
              <label htmlFor="MaBN" className="form-label">
                Mã Bệnh Nhân
              </label>
              <input
                type="text"
                className="form-control"
                id="MaBN"
                name="MaBN"
                value={maBN}
                onChange={(e) => setMaBN(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="HoBN" className="form-label">
                Họ
              </label>
              <input
                type="text"
                className="form-control"
                id="HoBN"
                name="HoBN"
                value={hoBN}
                onChange={(e) => setHoBN(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="TenBN" className="form-label">
                Tên
              </label>
              <input
                type="text"
                className="form-control"
                id="TenBN"
                name="TenBN"
                value={tenBN}
                onChange={(e) => setTenBN(e.target.value)}
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
              <label htmlFor="NgaySinh" className="form-label">
                Ngày Sinh (Tháng/Ngày/Năm)
              </label>
              <input
                type="date"
                className="form-control"
                id="NgaySinh"
                name="NgaySinh"
                value={ngaySinh}
                onChange={(e) => setNgaySinh(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="GioiTinh" className="form-label">
                Giới Tính
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
              <label htmlFor="DiaChi" className="form-label">
                Địa Chỉ
              </label>
              <textarea
                className="form-control"
                id="DiaChi"
                name="DiaChi"
                value={diaChi}
                onChange={(e) => setDiaChi(e.target.value)}
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
export default ModalEditPatient;
