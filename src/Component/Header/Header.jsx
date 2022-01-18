/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { fontSize } from '@mui/system'
import React from 'react'
import '../Header/Header.css'
import download from '../../Image/download.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { GrSettingsOption } from "react-icons/si";
import { faCoffee} from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faListUl } from '@fortawesome/free-solid-svg-icons'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import { faRecycle } from '@fortawesome/free-solid-svg-icons'
import { faTasks } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


// import { FaBars, GrSettingsOption, HiOutlineRefresh, FaListUl, GiHamburgerMenu, AiOutlineMail } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
    return (
        <div>
            <div className={"containerOne"}>
                <div className="elementOne">
                    <FontAwesomeIcon icon={faBars} style={{ marginTop: "10px", fontSize: "24px" }} />
                    <p>Keep</p>
                    <img src={download} alt="Img" style={{ width: "34px" }} />
                </div>
                <div className="elementTwo">
                    <input type="text" placeholder="Search Here" />
                </div>
                <div className="elementThree">
                    <div className="box1">
                        <FontAwesomeIcon icon={faCog} style={{ marginTop: "10px", fontSize: "24px" }} />
                    </div>
                    <div className="box2">
                        <FontAwesomeIcon icon={faRecycle} style={{ marginTop: "10px", fontSize: "24px" }} />
                    </div>
                    <div className="box3">
                        <FontAwesomeIcon icon={faListUl} style={{ marginTop: "10px", fontSize: "24px" }} />
                    </div>
                </div>
                <div className="elementFour">
                    <div className="side-icon">
                        <FontAwesomeIcon icon={faTasks} style={{ marginTop: "10px", fontSize: "24px" }} />
                    </div>
                    <div className="side-icon1">
                        <FontAwesomeIcon icon={faEnvelope} style={{ marginTop: "10px", fontSize: "24px" }} />
                    </div>
                </div>
            </div>
            </div>
    )
}

export default Header
