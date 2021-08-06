import "./Join.scss";
import { useEffect, useState } from "react";
import axios from "axios";

import Postcode from "@actbase/react-daum-postcode";
import { useHistory } from "react-router-dom";
import {
  faEnvelope,
  faIdCard,
  faLock,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Input from "../../components/Input/Input";

const Join = () => {
  const initValues = {
    name: "",
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  };
  const [values, setValues] = useState(initValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    console.log("dd", values);
  };

  const [errorMessage, setErrorMessage] = useState("");
  let history = useHistory();

  // const [isModal, setModal] = useState(false);

  const postJoin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/join", {
        name: values.name,
        username: values.username,
        email: values.email,
        password: values.password,
        passwordConfirm: values.passwordConfirm,
      })
      .then((response) => {
        console.log("success");
        history.push("/login");
      })
      .catch((err) => {
        if (err.response) {
          setErrorMessage(err.response.data.errorMessage);
        }
      });
  };

  return (
    <div className="form-container">
      {errorMessage && <span>{errorMessage}</span>}
      <form
        action="http://localhost:3001/join"
        method="POST"
        onSubmit={postJoin}
      >
        <Input
          inputIcon={faUser}
          inputName={"name"}
          inputPlaceholder={"이름"}
          inputType={"text"}
          inputOnChange={handleInputChange}
        />
        <Input
          inputIcon={faIdCard}
          inputName={"username"}
          inputPlaceholder={"아이디"}
          inputType={"text"}
          inputOnChange={handleInputChange}
        />
        <Input
          inputIcon={faEnvelope}
          inputName={"email"}
          inputPlaceholder={"이메일"}
          inputType={"email"}
          inputOnChange={handleInputChange}
        />
        <Input
          inputIcon={faLock}
          inputName={"password"}
          inputPlaceholder={"비밀번호"}
          inputType={"password"}
          inputOnChange={handleInputChange}
        />
        <Input
          inputIcon={faLock}
          inputName={"passwordConfirm"}
          inputPlaceholder={"비밀번호 확인"}
          inputType={"password"}
          inputOnChange={handleInputChange}
        />

        <input type="submit" value="회원가입" />
      </form>
    </div>
  );
};

export default Join;

// {
//   /* <div className="custormer__input">
//           <div className="custormer__input--icon">
//             <FontAwesomeIcon icon={faUser} className="fa-icon" />
//           </div>
//           <div>
//             <input
//               name="name"
//               placeholder="이름"
//               type="text"
//               onChange={handleInputChange}
//               required
//             />
//           </div>
//         </div>
//         <div className="custormer__input">
//           <div className="custormer__input--icon">
//             <FontAwesomeIcon icon={faIdCard} />
//           </div>
//           <input
//             name="username"
//             placeholder="닉네임"
//             type="text"
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div className="custormer__input">
//           <div className="custormer__input--icon">
//             <FontAwesomeIcon icon={faEnvelope} />
//           </div>

//           <input
//             name="email"
//             placeholder="이메일"
//             type="email"
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div className="custormer__input">
//           <div className="custormer__input--icon">
//             <FontAwesomeIcon icon={faLock} />
//           </div>
//           <input
//             name="password"
//             placeholder="비밀번호"
//             type="password"
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div className="custormer__input">
//           <div className="custormer__input--icon">
//             <FontAwesomeIcon icon={faLock} />
//           </div>
//           <input
//             name="passwordConfirm"
//             placeholder="비밀번호 확인"
//             type="password"
//             onChange={handleInputChange}
//             required
//           /> */
// }
// {
//   /* </div> */
// }

// {
//   /* <Postcode
//           style={{ width: 320, height: 320 }}
//           jsOptions={{ animated: true, hideMapBtn: true }}
//           onSelected={(data) => {
//             alert(JSON.stringify(data));
//             setModal(false);
//           }}
//         /> */
// }
