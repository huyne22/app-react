import { useState } from "react";

const HomeDoctor = (props) => {
  const { settings } = props;
  const [doctor, setDoctor] = useState([]);
  return (
    <>
      <div className="container">
        <a href="#" className="text-decoration-none">
          <div className="card">
            <img
              src="path_to_your_image.jpg"
              className="card-img-top"
              alt="Ảnh"
            />
            <div className="card-body">
              <h5 className="card-title">Tiêu đề</h5>
              <p className="card-text">
                Nội dung mô tả. Đây là dòng văn bản thứ nhất.
              </p>
              <p className="card-text">Dòng văn bản thứ hai.</p>
            </div>
          </div>
        </a>
      </div>
    </>
  );
};
export default HomeDoctor;
