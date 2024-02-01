import React , {useState} from 'react';
import './index.css'
import DateRangeIcon from '@mui/icons-material/DateRange';

import img from '../../../src/until/Image/NEET2-1-scaled-1-770x400.jpeg'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ShareLink from '../MastersDegree/component/ShareLink';
const Contant = () => {
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
        <div class='StudyMedicineInGermanyBody'>
            <img src={img} alt='Image not found ' className='mainImage' />
            <p className='title'>MEDICINE</p>

            <h1 style={{ fontSize: '34px', color: "#333" }}>The Ultimate Guide to Study Medicine in Germany for International Students in 2023
            </h1>

            <div className='nameWithDate'>
                <div className='rightSideContact'>
                    <img src='https://as1.ftcdn.net/jpg/01/28/56/34/160_F_128563462_MF7W2t5p3w5pQOoV35aqPdTcwCSC5xqH.jpg' alt='not found' />
                    <p>farmzone.net</p>
                </div>
                <div style={{ display: 'flex', justifyItems: 'center' }}>
                    <DateRangeIcon style={{ marginTop: '15px', marginRight: '5px', fontSize: '20px', color: '#8e8e8e' }} />
                    <p >Mch21,2023</p>
                </div>
            </div>


            <div style={{ marginTop: '25px' }}>
                <p style={{ color: '#696969', fontSize: '14px', lineHeight: '1.7' }}>
                    Are you an international student who is planning to study abroad? Do you wish to continue your higher education at top-rated and world-renowned universities?
                    Look no further, because you need to consider Germany as your first choice.
                </p>
            </div>


            <div style={{ marginTop: '25px' }}>
                <p style={{ color: '#696969', fontSize: '14px', lineHeight: '1.7' }}>
                    <span style={{ fontWeight: 'bold' }}>Studying medicine in Germany</span> is a dream come true for many students, especially those who value first-hand experience and aspire to study
                    under dedicated professors.
                </p>
            </div>


            <div style={{ marginTop: '25px' }}>
                <p style={{ color: '#696969', fontSize: '14px', lineHeight: '1.7' }}>
                    From high-quality teaching staff to efficiently equipped facilities and laboratories, these
                    factors make <span style={{ fontWeight: 'bold' }}>studying medicine in Germany</span> an aspiration for all international students.
                </p>
            </div>


            <div style={{ marginTop: '25px' }}>
                <p style={{ color: '#696969', fontSize: '14px', lineHeight: '1.7' }}>
                    In this blog, we will guide you through the application process, the eligibility criteria, the needed documentation, and how
                    to get the best experience if you plan to <span style={{ fontWeight: 'bold' }}>study medicine in Germany for international students.</span>
                </p>
            </div>

            <div>
                <img src={img} alt='Image not found ' className='SecImage' />
            </div>



            <div style={{ marginTop: '10px' }}>
                <h1 style={{ fontWeight: '400', fontSize: '32px' }}>How to apply to study medicine in Germany for international students?
                </h1>
                <p style={{ color: '#696969', fontSize: '14px', lineHeight: '1.7' }}>Everyone needs to start somewhere, and if you’re an international student, there are many steps that you need to go through in order to apply to German universities.</p>
            </div>

            <div style={{ marginTop: '10px' }}>
                <p style={{ color: '#696969', fontSize: '14px', lineHeight: '1.7' }}>
                    Here is the full guide on how to apply to study medicine in Germany for international students:
                </p>
            </div>


            <div style={{ marginTop: '10px' }}>
                <h1 style={{ fontWeight: '400', fontSize: '32px' }}>Applying for a student visa</h1>
                <p style={{ color: '#696969', fontSize: '14px', lineHeight: '1.7' }}>
                    As an international student, getting your visa accepted is essential to start your studies abroad. </p>
            </div>

            <div style={{ marginTop: '10px' }}>
                <p style={{ color: '#696969', fontSize: '14px', lineHeight: '1.7' }}>
                    There are many types of visas, including student visas, language course visas, and work visas. </p>
            </div>

            <div style={{ marginTop: '10px' }}>
                <p style={{ color: '#696969', fontSize: '14px', lineHeight: '1.7' }}>
                    Some visas are long-term, and others are valid for a few months only, which is why you should search and find what fits your plan.</p>
            </div>

            <div style={{ marginTop: '10px' }}>
                <p style={{ color: '#696969', fontSize: '14px', lineHeight: '1.7' }}>
                    If you want to learn more about how to <span style={{ color: "#76d4f9" }}> study medicine </span> in Germany in English, read this blog to get the full information that
                    you need to apply for a program. <span style={{ color: "#76d4f9" }}>How to Study Medicine
                        in Germany in English? Breaking the Language Barrier</span>
                </p>
            </div>




            <div style={{ marginTop: '10px' }}>
                <h1 style={{ fontWeight: '400', fontSize: '32px' }}> Getting accepted into a university program</h1>
                <p style={{ color: '#696969', fontSize: '14px', lineHeight: '1.7' }}>
                    Choosing the best program is an important step as it will determine what you are going to study and picking the university that fits your aspiration is essential.
                </p>
            </div>


            <div style={{ marginTop: '10px' }}>
                <p style={{ color: '#696969', fontSize: '14px', lineHeight: '1.7' }}>
                    There are many factors that determine whether the college is the best or not, such as the location of the campus, the teaching staff, and their research labs.
                </p>
            </div>


            <div style={{ marginTop: '10px' }}>
                <h1 style={{ fontWeight: '400', fontSize: '32px' }}>Starting your life on campus</h1>
                <p style={{ color: '#696969', fontSize: '14px', lineHeight: '1.7' }}>
                    After getting accepted into the university, you will have to integrate into the community, by joining study groups or clubs.
                </p>
            </div>


            <div style={{ marginTop: '10px' }}>
                <p style={{ color: '#696969', fontSize: '14px', lineHeight: '1.7' }}>
                    Making friends on campus is essential for international students, and you will get to join many new activities and find hobbies. </p>
            </div>


            <div style={{ marginTop: '10px' }}>
                <h1 style={{ fontWeight: '400', fontSize: '32px' }}>Why should you choose to study medicine in Germany for international students?</h1>
                <p style={{ color: '#696969', fontSize: '14px', lineHeight: '1.7' }}>
                    If you plan to study medicine in Germany for international students could have numerous advantages, such as:
                </p>
                <ul>
                    <li>Past grades: you’ll need to submit your grades from high school. Some bachelor’s programs will have a minimum GPA while others may not.
                    </li>

                    <li>
                        High school diploma or equivalent: most bachelor’s degrees will need you to have finished a high school level degree in order to be eligible.

                    </li>
                    <li>Standardized test scores (for example the SAT or ACT): some bachelor’s degrees still need standardized test scores like the SAT or ACT for students to become eligible for the study programs.


                    </li>

                    <li>Letters of recommendation: some programs might ask for these letters from high school teachers or other professionals who can recommend you for a certain degree or talk about subjects you are good about.

                    </li>

                    <li>Personal essays: some universities ask for personal essays or letters for motivation asking why you want to join a certain bachelor’s degree program. In these, you also talk about your experience and the areas you are interested in.

                    </li>

                </ul>
            </div>


            <div style={{ marginTop: '10px' }}>
                <h1 style={{ fontWeight: '400', fontSize: '32px' }}>Life as a doctor in Germany</h1>
                <p style={{ color: '#696969', fontSize: '14px', lineHeight: '1.7' }}>
                    After graduating from medical school, if you plan to study medicine in Germany for international students, there are many careers you can pick:
                </p>
                <ul>
                    <li>Opening your private practice could be a great career option, as you will get to interact with patients, and diagnose and treat them.
                    </li>
                    <li>
                        You can also go into research, publish papers, and conduct various types of studies in a laboratory.
                    </li>
                    <li>
                        Another option is teaching, as there are many universities that want to diversify their teaching staff.
                    </li>
                </ul>
            </div>



            <div style={{ marginTop: '10px' }}>
                <h1 style={{ fontWeight: '400', fontSize: '32px' }}>To conclude</h1>
                <p style={{ color: '#696969', fontSize: '14px', lineHeight: '1.7' }}>
                    If you’re an international student who aspires to suther develop your studies, this is the ultimate guide to studying medicine in Germany for international students.


                </p>
            </div>


            <div style={{ marginTop: '10px' }}>

                <p style={{ color: '#696969', fontSize: '14px', lineHeight: '1.7' }}>
                    Studying medicine in Germany is a great choice if you plan to develop your career and learn more about other cultures.
                </p>
            </div>



            <div style={{ marginTop: '10px' }}>
                <p style={{ color: '#696969', fontSize: '14px', lineHeight: '1.7' }}>
                    Get all the help you need by using UniApp, the university assistant that provides the ultimate guide to studying medicine abroad for international students.</p>
            </div>

            <ShareLink title=" study medicine in Germany" />
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
        </div>

    );
};

export default Contant;
