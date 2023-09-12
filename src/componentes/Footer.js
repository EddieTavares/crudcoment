import React from "react";

import imgFace from "../img/face.png"
import imgInsta from "../img/insta.png"
import imgYtb from "../img/youtube.png"

function Footer() {
    return (
        <footer>
            <hr />
            <div>
                <a href="https://www.facebook.com/"><img src={imgFace} alt="" /></a>
                <a href="https://www.instagram.com/"><img src={imgInsta} alt="" /></a>
                <a href="https://www.youtube.com/"><img src={imgYtb} alt="" /></a>
            </div>
        </footer>
    );
};

export default Footer;




