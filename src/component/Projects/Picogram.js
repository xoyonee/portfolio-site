import classes from "./inProjects.module.css";
import Card from "../../UI/Card";
import imac from "../../assets/img/mockup/picogram-iMac.png";
import iPhone from "../../assets/img/mockup/picogram-iPhone.png";

const Picogram = () => {
  return (
    <Card>
      <div className={classes.card}>
        <div className={classes.img_box}>
          <img className={classes.imac} src={imac} alt="booklocker-iMac" />
          <img
            className={classes.iPhone}
            src={iPhone}
            alt="booklocker-iPhone"
          />
        </div>
        <div className={classes.desc}>
          <h3>Picogram(ํผ์ฝ๊ทธ๋จ)</h3>
          <div>
            <p className={classes.title}>
              ๐น picogram(ํผ์ฝ๊ทธ๋จ) ํํ์ด์ง๋ฅผ pc, ๋ชจ๋ฐ์ผ์ ๋ง์ถฐ ๋ฐ์ํ์ผ๋ก
              ๋ฆฌ๋ด์ผํ ํ๋ก์ ํธ์๋๋ค.
            </p>
            <p className={classes.title}>
              ๐น ๋ฉ์ธ ํํ์ด์ง, ์นดํ๊ณ ๋ฆฌ ํ์ด์ง, ์๊ฐ ํ์ด์ง 3๊ฐ์ง ํ์ด์ง๋ฅผ
              ๊ตฌํํ์์ต๋๋ค.
            </p>
            <p className={classes.title}>
              ๐น ํ์ฌ ํ์ด์ง์ url์ ๋ฐ๋ผ ์ ๋ณด๋ฅผ ๊ฐ์ ธ์ ์นดํ๊ณ ๋ฆฌ ํ์ด์ง์
              ์์ดํ์ ์ ๋ ฌํ์ต๋๋ค.
            </p>
            <ul>
              <li>
                <h4>โ๏ธ ์ฃผ์ ๊ธฐ๋ฅ โ๏ธ</h4>
              </li>
              <li>
                โ๏ธ ๋ฉ์ธ: ๋ฉ๋ด๋ฐ, ์ด๋ฏธ์ง ์ฌ๋ผ์ด๋, svg ์ ๋๋ฉ์ด์, ์คํฌ๋กค
                ์ ๋๋ฉ์ด์
              </li>
              <li>โ๏ธ ์นดํ๊ณ ๋ฆฌ: ์ด๋ฏธ์ง ์ฌ๋ผ์ด๋, ์์ธํ์ด์ง ๋ชจ๋ฌ</li>
              <li>โ๏ธ ํ์ฌ ์๊ฐ: ํก ์คํฌ๋กค, ๋ชจ๋ฐ์ผ: ๋๋๊ทธ ์ฌ๋ผ์ด๋</li>
            </ul>
            <h4>๐ง ๊ธฐ์  ์คํ ๐ง</h4>
            <img src="https://img.shields.io/badge/html5-E34F26?style=flat-square&#38;logo=html5&#38;logoColor=white" />
            <img src="https://img.shields.io/badge/css-1572B6?style=flat-square&#38;logo=css3&#38;logoColor=white" />
            <img src="https://img.shields.io/badge/javascript-F7DF1E?style=flat-square&#38;logo=javaScipt&#38;logoColor=black" />

            <a href="http://yeonee27.dothome.co.kr/picogram/">
              โ๏ธ ๋ฐ๋ชจ ์ฌ์ดํธ ๋ณด๋ฌ๊ฐ๊ธฐ โ๏ธ
            </a>
            <a href="https://github.com/xoyonee/picogram-project">
              <img
                className={classes.git_hub}
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                alt="git-hub์ฃผ์"
              />
              ๊น์ฃผ์
            </a>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Picogram;
