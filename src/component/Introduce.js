import classes from "./Introduce.module.css";


const Introduce = () => {
  return (
    <section className={classes.main_banner} id='introduce'>
      <div>
        <h3>Welcome!</h3>
        <div className={classes.title}>
          <p>프론트 엔드 개발자</p>
          <p>
            <span> 김소연</span>의 포트폴리오입니다.
          </p>
        </div>
        <div className={classes.line}></div>
        <h3>Introduce!</h3>
        <div className={classes.intro_txt}>
          <p><span>#커피</span>와 달콤한 <span>디저트</span>를 사랑하는,</p>
          <p><span>#배우는 </span>것에 <span>즐거움</span>을 느끼는,</p>
          <p><span>#계획적인</span> 활동을 좋아하는 <span>ENTJ</span></p>
          <p><span>프론트 엔드</span> 개발자 입니다.</p>
        </div>
      </div>
    </section>
  );
};

export default Introduce;
