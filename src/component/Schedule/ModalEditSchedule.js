import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { postEditSchedule } from "../service/apiService";
import { useEffect } from "react";
import _ from "lodash";
import { toast } from "react-toastify";
const ModalEditSchedule = (props) => {
  const { show1, setShow1, dataUpdate } = props;
  const [ngay, setNgay] = useState("");
  const [buoi, setBuoi] = useState("");
  const [maBS, setMaBS] = useState("");
  const [soLuongBNToiDa, setSoLuongBNToiDa] = useState("");
  const [ghiChu, setGhiChu] = useState("");
  const [yourObject, setYourObject] = useState({});

  const updateObjectWithNewProperty = () => {
    // Tạo bản sao của đối tượng hiện tại để không ghi đè lên trực tiếp
    const updatedObject = { ...yourObject };
    setYourObject(updatedObject); // Cập nhật đối tượng với thuộc tính mới
  };
  useEffect(() => {
    // console.log("dataUpdate");
    if (!_.isEmpty(dataUpdate)) {
      setNgay(dataUpdate.Ngay.split("T")[0]);
      setBuoi(dataUpdate.Buoi);
      setMaBS(dataUpdate.MaBS);
      setSoLuongBNToiDa(dataUpdate.SoLuongBNToiDa);
      setGhiChu(dataUpdate.GhiChu);
      updateObjectWithNewProperty();
    } else {
    }
  }, [dataUpdate]);
  //ma
  useEffect(() => {
    setYourObject((prevObject) => ({
      ...prevObject,
      Ngay: ngay.toString(),
    }));
  }, [ngay]);
  //ho
  useEffect(() => {
    setYourObject((prevObject) => ({
      ...prevObject,
      Buoi: buoi,
    }));
  }, [buoi]);
  //ten
  useEffect(() => {
    setYourObject((prevObject) => ({
      ...prevObject,
      MaBS: maBS,
    }));
  }, [maBS]);
  //soLuongBNToiDa
  useEffect(() => {
    setYourObject((prevObject) => ({
      ...prevObject,
      SoLuongBNToiDa: soLuongBNToiDa,
    }));
  }, [soLuongBNToiDa]);
  //ghiChu
  useEffect(() => {
    setYourObject((prevObject) => ({
      ...prevObject,
      GhiChu: ghiChu,
    }));
  }, [ghiChu]);

  const handleSubmit = async (e) => {
    // console.log("chek lich truc", yourObject);
    let res = await postEditSchedule(yourObject);
    // console.log("chek update", res);
    if (res?.errCode === 0) {
      setShow1(false);
      toast.success("Cập nhật lịch trực thành công!");
      await props.fetchListSchedule();
    } else if (res?.errCode === 3) {
      setShow1(false);
      toast.info("Không có trường dữ liệu nào được cập nhật!");
    } else {
      toast.error("Cập nhật lịch trực thất bại!");
    }
  };

  const handleClose = () => {
    setShow1(false);
    // setNgay("");
    // setBuoi("");
    // setMaBS("");
    // setSoLuongBNToiDa("");
    // setGhiChu("");
    // setBangCap("");
    // setChuyenMon("Nam");
    // setGioiTinh("");
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
          <Modal.Title>Chỉnh sửa thông tin lịch trực</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container mt-3">
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
              <label htmlFor="SoLuongBNToiDa" className="form-label">
                Số lượng bệnh nhân tối đa
              </label>
              <input
                type="text"
                className="form-control"
                id="SoLuongBNToiDa"
                name="SoLuongBNToiDa"
                value={soLuongBNToiDa}
                onChange={(e) => setSoLuongBNToiDa(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="GhiChu" className="form-label">
                Ghi chú
              </label>
              <textarea
                className="form-control"
                id="GhiChu"
                name="GhiChu"
                value={ghiChu}
                onChange={(e) => setGhiChu(e.target.value)}
              />
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
export default ModalEditSchedule;
