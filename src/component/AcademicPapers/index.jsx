import React, { useState } from 'react';
import { Container } from '@mui/material';
import './index.css';
import DateRangeIcon from '@mui/icons-material/DateRange';
import LeftSide from '../MastersDegree/component/LeftSide';
import { useNavigate } from 'react-router';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ShareLink from '../MastersDegree/component/ShareLink';
const AcademicPapers = () => {
    const navigate = useNavigate();

    const [isHovered1, setHovered1] = useState(false);
    const [isHovered2, setHovered2] = useState(false);


    const divStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px',
        cursor: 'pointer',
        transition: 'background-image 0.3s',
    };

    const divHoverStyle = {
        backgroundColor: '#222',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        color: '#FFF'
    };
    return (
        <div className='MastersDegreeBody'>
            <Container maxWidth="lg">
                <div className='childMastersDegreeBody'>
                    <div>
                        <p className='UNCATEGORIZED-Text' onClick={() => { navigate('/category/uncategorized/') }}>UNCATEGORIZED</p>
                        <h1 style={{ color: '#333', fontSize: '34px', marginBottom: '0', marginTop: '0' }}>Where to Source For Academic Papers</h1>
                        <div className='nameWithDate'>
                            <div className='rightSideContact'>
                                <img src='https://as1.ftcdn.net/jpg/01/28/56/34/160_F_128563462_MF7W2t5p3w5pQOoV35aqPdTcwCSC5xqH.jpg' alt='not found' />
                                <p>farmzone.net</p>
                            </div>
                            <div style={{ display: 'flex', justifyItems: 'center' }}>
                                <DateRangeIcon style={{ marginTop: '15px', marginRight: '5px', fontSize: '20px' ,color:"#8e8e8e" }} />
                                <p>Nov22,2023</p>
                            </div>
                        </div>
                        <hr style={{ width: '100%', borderTop: '1px solid #eee', marginTop: '15px', marginBottom: '25px' }} />


                        <div style={{ marginTop: '30px', lineHeight: '1.5' }}>
                            <p style={{ color: '#696969', fontSize: '14px' }}>
                                Is it secure to buy essays on the internet? Yes, it’s safe as long as
                                they’re written by professional essayists. These specialists understand how
                                to develop a composition which compels the reader to either read farther or click on
                                the”perform” button. It is safe and legitimate, likewise if you purchased the essay directly
                                from an experienced expert essayist. You would be surprised how many people are unaware of
                                how all these are professionals with real skills in essay writing and editing. Here are a
                                few guidelines on how best to make sure you get value for your money when you purchase essays online.
                            </p>
                        </div>


                        <div style={{ marginTop: '30px', lineHeight: '1.5' }}>
                            <p style={{ color: '#696969', fontSize: '14px' }}>
                                Do check the sources used in essays on the internet. The majority of the time, they’re not free. Many of them are reputed sites that offer
                                quality and original materials but you might not wish to invest a penny to get an education system which provides quality and original newspapers?
                                The notion is to make your investment worthwhile so better conduct a background check on the papers being offered. Check the author resource box
                                too; all the time, an author’s name and affiliation may be found in there.
                            </p>
                        </div>


                        <div style={{ marginTop: '30px', lineHeight: '1.5' }}>
                            <p style={{ color: '#696969', fontSize: '14px' }}>
                                Check out the samples being offered. When you buy pre-written essays on line, have a look at the samples to see if they’re written according to
                                the conventional educational composing solutions. Check too for errors in grammar and punctuation. Make sure also that the significance of this
                                sentence is clear and that the arrangement is accurate. If the essays are only basically copied verbatim from academic writing solutions, they’re
                                probably not from the most qualified professional authors and editors.
                            </p>
                        </div>

                        <div style={{ marginTop: '30px', lineHeight: '1.5' }}>
                            <p style={{ color: '#696969', fontSize: '14px' }}>
                                Do use the internet to the choice of your essay author. Some authors only do marketing research and just offer samples to people who bought their
                                product. Nevertheless, the fantastic news is you can now buy essays online from any author for personal or professional use. So think about buying
                                your essay writer from a respectable website offering samples.
                            </p>
                        </div>


                        <div style={{ marginTop: '30px', lineHeight: '1.5' }}>
                            <p style={{ color: '#696969', fontSize: '14px' }}>
                                Do get your essay proofread by several individuals. An essay is an expression of a writer’s personal opinion on a particular topic.
                                You wouldn’t want your thesis to be turned into as a badly written paper with spelling mistakes and grammatical errors. Thus, always
                                double-check your documents online. Only once it is passed from the editorial board, would you consider selling it.
                            </p>
                        </div>


                        <div style={{ marginTop: '30px', lineHeight: '1.5' }}>
                            <p style={{ color: '#696969', fontSize: '14px' }}>
                                Most academic writers that write online are extremely knowledgeable about the concept of writing and reviewing. So they are very likely to spot any
                                grammatical mistakes or inconsistencies in your essay. For instance, a writer for hire who only writes dissertations online would notice if your
                                essay has sentence structure problems. Such defects will greatly reduce your odds of receiving an evaluation. Such writers, on the other hand,
                                would only recommend such students to other writers who have a fantastic reputation. So consistently get your essays proofread by more than 1
                                person before submitting them to get a review.
                            </p>
                        </div>


                        <div style={{ marginTop: '30px', lineHeight: '1.5' }}>
                            <p style={{ color: '#696969', fontSize: '14px' }}>
                                There are <span style={{ cursor: 'pointer', color: '#76d4f9' }}>https://www.affordable-papers.net/</span> also some websites that offer pre-written essays as a service to pupils. All these are written essays
                                are made by experts in the academic writing services industry who have considerable experience in crafting academic documents. The writers create
                                academic writing solutions essays with caution, taking into consideration punctuation, grammar, and spellings, in accord with the standards set
                                by the majority of universities. You might come across such authors that also customize the information and make suitable alterations, which can be
                                beneficial for your particular needs. But, it’s almost always better to purchase or written essays straight from academic writing solutions
                                companies.

                            </p>
                        </div>


                        <div style={{ marginTop: '30px', lineHeight: '1.5' }}>
                            <p style={{ color: '#696969', fontSize: '14px' }}>

                                Another great place to source for the written academic papers is the world wide web. There are various sources that can be found
                                on the internet where you are able to buy essays online. You could visit the website of the university or college you would like
                                to pursue your schooling from. Or, you could visit sites of renowned universities in your area offering online classes. No matter
                                what you do, ensure that the company offering you these essays is a reputed company.
                            </p>
                        </div>

                        <ShareLink flag='true' />

                        <div className='userSection'>
                            <div>
                                <div>
                                    <img src='https://as1.ftcdn.net/jpg/01/28/56/34/160_F_128563462_MF7W2t5p3w5pQOoV35aqPdTcwCSC5xqH.jpg' alt='image not found' />

                                </div>

                                <div>
                                    <h3>FARMZONE.NET</h3>
                                    <p>เกมสล็อต เกมยิงปลา ยิงปลา slotonline.</p>
                                </div>
                            </div>
                        </div>

                        <div className='option'>
                            <div
                                style={{ ...divStyle, ...(isHovered1 ? divHoverStyle : {}) }}
                                onMouseEnter={() => setHovered1(true)}
                                onMouseLeave={() => setHovered1(false)}
                            >
                                <ArrowBackIosNewIcon style={{ fontSize: '18px', marginRight: '15px', color: '#20ad96' }} />
                                <h6>What’s the Difference Between Leadership and Management?</h6>
                            </div>

                            <div
                                style={{ ...divStyle, ...(isHovered2 ? divHoverStyle : {}) }}
                                onMouseEnter={() => setHovered2(true)}
                                onMouseLeave={() => setHovered2(false)}
                            >
                                <h6>A Guide to Understanding the 13 Weirdest Grading Systems Worldwide</h6>
                                <ArrowForwardIosIcon style={{ fontSize: '18px', marginLeft: '15px', color: '#20ad96' }} />
                            </div>
                        </div>



                    </div>
                    <div>
                        <LeftSide />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default AcademicPapers;
