import React from 'react';
import "./landing.css";
import topImg from '../resourse/detail_01.png'
import bottomImg from '../resourse/detail_02.png'


const limmitUp = window.innerWidth >= 600 ?  'limmitUp' : ''
const limmitdown = window.innerWidth <= 600 ?  'limmitdown' : ''


const Landing = () => {
    
    
    
    
    
    return (
        <>
            { limmitUp && (
                <div className="full-screen">
                    <main className="main-area">
                        {/* 상단 이미지  */}
                            <img className="top-img" src={topImg} />
                            
                        {/* 중간 신청 버튼  */}

                            <div >
                                <button className="apply-btn">신청하기</button>
                            </div>


                        {/* 하단 디자인 */}
                            <img className="bottomImg-img" src={bottomImg} />
                    </main>
                </div>
            )}
            
            { limmitdown && (
                <div className="full-screen">
                    <main className="main-area">
                        {/* 상단 이미지  */}
                            <div>
                                <img className="top-img" src={topImg} />
                            </div>
                            
                        {/* 중간 신청 버튼  */}

                            <div className="apply-area">
                                <button className="apply-btn">신청하기</button>
                            </div>


                        {/* 하단 디자인 */}
                            <div>
                                <img className="bottomImg-img" src={bottomImg} />
                            </div>
                    </main>
                </div>
            )}
        </>
    );
};

export default Landing;