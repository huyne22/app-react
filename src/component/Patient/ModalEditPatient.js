import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { postEditPatient } from "../service/apiService";
import { useEffect } from "react";
import _ from "lodash";
import { toast } from "react-toastify";
const ModalEditPatient = (props) => {
  const { show1, setShow1, dataUpdate } = props;
  const [maBN, setMaBN] = useState("");
  const [hoBN, setHoBN] = useState("");
  const [tenBN, setTenBN] = useState("");
  const [soDT, setSoDT] = useState("");
  const [email, setEmail] = useState("");
  const [ngaySinh, setNgaySinh] = useState("");
  const [gioiTinh, setGioiTinh] = useState("Nam");
  const [diaChi, setDiaChi] = useState("");
  const [ghiChu, setGhiChu] = useState("");
  const [yourObject, setYourObject] = useState({});

  const updateObjectWithNewProperty = () => {
    const updatedObject = { ...yourObject };
    setYourObject(updatedObject);
  };
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
      setGhiChu(dataUpdate.GhiChu);
      updateObjectWithNewProperty();
    } else {
    }
  }, [dataUpdate]);
  useEffect(() => {
    setYourObject((prevObject) => ({
      ...prevObject,
      MaBN: maBN.toString(),
    }));
  }, [maBN]);
  useEffect(() => {
    setYourObject((prevObject) => ({
      ...prevObject,
      HoBN: hoBN,
    }));
  }, [hoBN]);
  useEffect(() => {
    setYourObject((prevObject) => ({
      ...prevObject,
      TenBN: tenBN,
    }));
  }, [tenBN]);
  useEffect(() => {
    setYourObject((prevObject) => ({
      ...prevObject,
      SoDT: soDT,
    }));
  }, [soDT]);
  useEffect(() => {
    setYourObject((prevObject) => ({
      ...prevObject,
      Email: email,
    }));
  }, [email]);
  useEffect(() => {
    setYourObject((prevObject) => ({
      ...prevObject,
      NgaySinh: ngaySinh,
    }));
  }, [ngaySinh]);
  useEffect(() => {
    setYourObject((prevObject) => ({
      ...prevObject,
      GioiTinh: gioiTinh,
    }));
  }, [gioiTinh]);
  useEffect(() => {
    setYourObject((prevObject) => ({
      ...prevObject,
      DiaChi: diaChi,
    }));
  }, [diaChi]);
  useEffect(() => {
    setYourObject((prevObject) => ({
      ...prevObject,
      GhiChu: ghiChu,
    }));
  }, [ghiChu]);

  const handleSubmit = async (e) => {
    let res = await postEditPatient(yourObject);
    if (res?.errCode === 0) {
      setShow1(false);
      toast.success("Cập nhật bệnh nhân thành công!");
      await props.fetchListPatient();
    } else if (res?.errCode === 3) {
      setShow1(false);
      toast.info("Không có trường dữ liệu nào được cập nhật!");
    } else {
      toast.error("Cập nhật bệnh nhân thất bại!");
    }
  };

  const handleClose = () => {
    setShow1(false);
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
                disabled
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
export default ModalEditPatient;
