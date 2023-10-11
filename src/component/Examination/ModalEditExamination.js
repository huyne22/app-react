import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { postEditExamination } from "../service/apiService";
import { useEffect } from "react";
import _ from "lodash";
import { toast } from "react-toastify";
const ModalEditExamination = (props) => {
  const { show1, setShow1, dataUpdate } = props;
  const [maBS, setMaBS] = useState("");
  const [maBN, setMaBN] = useState("");
  const [ngay, setNgay] = useState("");
  const [buoi, setBuoi] = useState("");
  const [maYTa, setMaYTa] = useState("");
  const [ketQuaChuanDoanBenh, setKetQuaChuanDoanBenh] = useState("");
  const [ghiChu, setGhiChu] = useState("");
  const [maThuoc, setMaThuoc] = useState("");
  const [thanhToan, setThanhToan] = useState("");
  const [yourObject, setYourObject] = useState({});

  const updateObjectWithNewProperty = () => {
    // Tạo bản sao của đối tượng hiện tại để không ghi đè lên trực tiếp
    const updatedObject = { ...yourObject };
    setYourObject(updatedObject); // Cập nhật đối tượng với thuộc tính mới
  };
  useEffect(() => {
    // console.log("dataUpdate");
    if (!_.isEmpty(dataUpdate)) {
      setMaBS(dataUpdate.MaBS);
      setMaBN(dataUpdate.MaBN);
      setNgay(dataUpdate.Ngay);
      setBuoi(dataUpdate.Buoi);
      setMaYTa(dataUpdate.MaYTa);
      setKetQuaChuanDoanBenh(dataUpdate.KetQuaChuanDoanBenh);
      setGhiChu(dataUpdate.GhiChu);
      setMaThuoc(dataUpdate.MaThuoc);
      setThanhToan(dataUpdate.ThanhToan);
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
  //ten
  useEffect(() => {
    setYourObject((prevObject) => ({
      ...prevObject,
      MaBN: maBN,
    }));
  }, [maBN]);
  //motaDv
  useEffect(() => {
    setYourObject((prevObject) => ({
      ...prevObject,
      Ngay: ngay,
    }));
  }, [ngay]);
  //giatien
  useEffect(() => {
    setYourObject((prevObject) => ({
      ...prevObject,
      Buoi: buoi,
    }));
  }, [buoi]);
  // maYTa
  useEffect(() => {
    setYourObject((prevObject) => ({
      ...prevObject,
      MaYTa: maYTa,
    }));
  }, [maYTa]);
  // kq
  useEffect(() => {
    setYourObject((prevObject) => ({
      ...prevObject,
      KetQuaChuanDoanBenh: ketQuaChuanDoanBenh,
    }));
  }, [ketQuaChuanDoanBenh]);
  // ghichu
  useEffect(() => {
    setYourObject((prevObject) => ({
      ...prevObject,
      GhiChu: ghiChu,
    }));
  }, [ghiChu]);
  // ghichu
  useEffect(() => {
    setYourObject((prevObject) => ({
      ...prevObject,
      MaThuoc: maThuoc,
    }));
  }, [maThuoc]);
  // ghichu
  useEffect(() => {
    setYourObject((prevObject) => ({
      ...prevObject,
      ThanhToan: thanhToan,
    }));
  }, [thanhToan]);

  const handleSubmit = async (e) => {
    let res = await postEditExamination(yourObject);
    // console.log(res);
    if (res?.errCode == 0) {
      setShow1(false);
      toast.success("Cập nhật phiếu khám bệnh thành công!");
      await props.fetchListExamination();
    } else if (res?.errCode == 3) {
      setShow1(false);
      toast.info("Không có trường dữ liệu nào được cập nhật!");
    } else {
      toast.error("Cập nhật phiếu khám bệnh thất bại!");
    }
  };

  const handleClose = () => {
    setShow1(false);
    // console.log("close");
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
          <Modal.Title>Chỉnh sửa thông tin phiếu khám bệnh</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container mt-3">
            <div className="mb-3">
              <label htmlFor="MaBS" className="form-label">
                Mã bác sĩ
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
              <label htmlFor="MaBN" className="form-label">
                Mã bệnh nhân
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
              <label htmlFor="Ngay" className="form-label">
                Ngày
              </label>
              <input
                type="date"
                className="form-control"
                id="Ngay"
                name="Ngay"
                value={ngay}
                onChange={(e) => setNgay(e.target.value)}
                disabled
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Buoi" className="form-label">
                Buổi
              </label>
              <input
                type="text"
                className="form-control"
                id="Buoi"
                name="Buoi"
                value={buoi}
                onChange={(e) => setBuoi(e.target.value)}
                disabled
              />
            </div>
            <div className="mb-3">
              <label htmlFor="MaYTa" className="form-label">
                Mã y tá
              </label>
              <input
                type="text"
                className="form-control"
                id="MaYTa"
                name="MaYTa"
                value={maYTa}
                onChange={(e) => setMaYTa(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="KetQuaChuanDoanBenh" className="form-label">
                Kết quả chuẩn đoán bệnh
              </label>
              <input
                type="text"
                className="form-control"
                id="KetQuaChuanDoanBenh"
                name="KetQuaChuanDoanBenh"
                value={ketQuaChuanDoanBenh}
                onChange={(e) => setKetQuaChuanDoanBenh(e.target.value)}
              />
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
            <div className="mb-3">
              <label htmlFor="MaThuoc" className="form-label">
                Mã thuốc
              </label>
              <input
                type="text"
                className="form-control"
                id="MaThuoc"
                name="MaThuoc"
                value={maThuoc}
                onChange={(e) => setMaThuoc(e.target.value)}
                required
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="ThanhToan" className="form-label">
                Thanh toán
              </label>
              <select
                className="form-select"
                id="ThanhToan"
                name="ThanhToan"
                value={thanhToan}
                onChange={(e) => setThanhToan(e.target.value)}
                required
              >
                <option value="0">Chưa thanh toán</option>
                <option value="1">Đã thanh toán</option>
              </select>
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
export default ModalEditExamination;
