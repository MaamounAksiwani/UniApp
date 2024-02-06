import React, { useState } from 'react';
import './index.css';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Collapse from '@mui/material/Collapse';

const GuideTransferStudentComponent = () => {
    const [openState, setOpenState] = useState(null);

    const handleToggle = (index) => {
        const isOpen = openState === index;
        setOpenState(isOpen ? null : index);
    };



    // materials you’ll need to gather in order to use UniApp for transfer

    const data = [
        {
            id: 0,
            title: 'Materials you’ll need to gather in order to use UniApp for transfer',
            point: [
                ` Your transcript and all your educational background`,
                `Grades and scores`,
                `Employment info`,
                `Comprehensive CV`,
                `Language Certificates`,
                `Activities and achievements`,
            ],
            description: ''
        }
    ]
    const uniAppContent = [
        {
            id: 1,
            title: 'Creating a Uni-App account is easy and take a few minutes',
            point: [
                `1- Click on the create account button`,
                `2- Choose your sign-up method, you can sign-up with your email, Facebook or Gmail`,
                `3- Complete your registration information                `,
                `4- Once you’re logged in complete your Uni-App profile to use all UniApp functions`
            ],
            description: ''
        }
    ]
    const universityRequirement = [
        {

            id: 2,
            title: 'Type Of University Requirement',
            point: [
                'Deadlines',
                'English language level',
                'CV',
                'Application Fees',
                'Personal Essay',
                'Courses & Grades',
                'Test Policy',
                'Portfolio',
                'Writing Supplements',
                'Recommendations',
                'References'
            ],
            description: ''
        },

        {
            id: 3,
            title: 'Where you can find each universities requirements',
            point: [
                `    After you are logged into your account go to ( Programs & Schools )`,
                ` Choose which University or program you need to explore`,
                `  Click on the ( Read more ) button`,
                `     Click on ( Requirements ) `,
            ],
            description: ''
        }

    ]

    const PreferredCourse = [
        {
            id: 5,
            title: ' You’ve created your account now explore your dream study',
            point: [
                `1- After you are logged into your account click on ( Programs & Schools )`,
                `2- You’ll see all the programs and schools listed on UniApp`,
            ],
            description: ''
        },
        {
            id: 6,
            title: 'Use the filters button to narrow your degree seacrh',
            point: [
                `1- filters button includes`,
                `2- Degree Type`,
                `3- The language taught of programs`,
                `4- Category and Discipline`,
                `5- Country of study destination`,
                `6- University`,
                `7- Tuition fees`,
                `8- Duration of the study`,
                `9- Type of attendance`
            ],
            description: ''
        },
        {
            id: 7,
            title: ' Apply to University',
            point: [],
            description: 'You’ve selected your study destination and preferred program, now press Apply, the admission process just began, congrats!'
        }
    ]

    const Submission = [
        {
            id: 9,
            title: 'Submit Your Application',
            point: [
                `          Reviewing your application`,
                `Consent and accept the terms`,
                `Submit your application`
            ],
            description: ''

        }
    ]
    return (
        <>
            <div className="container">
                <div className="background-image-TransferStudent"></div>
                <div className="centered-text">
                    Transfer Students Guide
                </div>
            </div>


            <div className='guideFirstTimeBox'>
                <h1> Prepare Your <span className='title'>Application </span> For Transfer</h1>
                <div>
                    {data.map((item) => {
                        const isOpen = openState === item.id;
                        return (
                            <div
                                className={`collapse-box ${isOpen ? 'active' : ''}`}
                                key={item.id}
                            >
                                <div
                                    className='IconButton'
                                    onClick={() => handleToggle(item.id)}
                                >
                                    <h3>{item.title}</h3>
                                    {isOpen ? (
                                        <RemoveIcon className='iconStyle' />
                                    ) : (
                                        <AddIcon className='iconStyle' />
                                    )}
                                </div>
                                <Collapse in={isOpen} className='Collapse'>
                                    {item.point && item.point.length > 0 ? (
                                        <ul>
                                            {item.point.map((ele, index) => (
                                                <li key={index}>{`${ele}`}</li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p>{item.description}</p>
                                    )}
                                </Collapse>
                            </div>
                        );
                    })}

                </div>
            </div>


            
            <div className='guideFirstTimeBox'>
                <h1>  Create Your <span className='title'> Uni-App</span> Account</h1>
                <div>
                    {uniAppContent.map((item) => {
                        const isOpen = openState === item.id;
                        return (
                            <div
                                className={`collapse-box ${isOpen ? 'active' : ''}`}
                                key={item.id}
                            >
                                <div
                                    className='IconButton'
                                    onClick={() => handleToggle(item.id)}
                                >
                                    <h3>{item.title}</h3>
                                    {isOpen ? (
                                        <RemoveIcon className='iconStyle' />
                                    ) : (
                                        <AddIcon className='iconStyle' />
                                    )}
                                </div>
                                <Collapse in={isOpen} className='Collapse'>
                                    {item.point && item.point.length > 0 ? (
                                        <ul>
                                            {item.point.map((ele, index) => (
                                                <li key={index}>{`${ele} ${index}`}</li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p>{item.description}</p>
                                    )}
                                </Collapse>
                            </div>
                        );
                    })}

                </div>
            </div>


            <div className='guideFirstTimeBox'>
                <h1>   Find Your  <span className='title'>Preferred Course</span> To Transfer</h1>
                <div>
                    {PreferredCourse.map((item) => {
                        const isOpen = openState === item.id;
                        return (
                            <div
                                className={`collapse-box ${isOpen ? 'active' : ''}`}
                                key={item.id}
                            >
                                <div
                                    className='IconButton'
                                    onClick={() => handleToggle(item.id)}
                                >
                                    <h3>{item.title}</h3>
                                    {isOpen ? (
                                        <RemoveIcon className='iconStyle' />
                                    ) : (
                                        <AddIcon className='iconStyle' />
                                    )}
                                </div>
                                <Collapse in={isOpen} className='Collapse'>
                                    {item.point && item.point.length > 0 ? (
                                        <ul>
                                            {item.point.map((ele, index) => (
                                                <li key={index}>{`${ele} ${index}`}</li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p>{item.description}</p>
                                    )}
                                </Collapse>
                            </div>
                        );
                    })}

                </div>
            </div>

            <div className='guideFirstTimeBox'>
                <h1>   Every University Has  <span className='title'> Own  Requirements</span></h1>
                <div>
                    {universityRequirement.map((item) => {
                        const isOpen = openState === item.id;
                        return (
                            <div
                                className={`collapse-box ${isOpen ? 'active' : ''}`}
                                key={item.id}
                            >
                                <div
                                    className='IconButton'
                                    onClick={() => handleToggle(item.id)}
                                >
                                    <h3>{item.title}</h3>
                                    {isOpen ? (
                                        <RemoveIcon className='iconStyle' />
                                    ) : (
                                        <AddIcon className='iconStyle' />
                                    )}
                                </div>
                                <Collapse in={isOpen} className='Collapse'>
                                    {item.point && item.point.length > 0 ? (
                                        <ul>
                                            {item.point.map((ele, index) => (
                                                <li key={index}>{`${ele}`}</li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p>{item.description}</p>
                                    )}
                                </Collapse>
                            </div>
                        );
                    })}

                </div>
            </div>

            <div className='guideFirstTimeBox'>
                <h1>  Review And  <span className='title'> Submit </span> Your Application </h1>
                <div>
                    {Submission.map((item) => {
                        const isOpen = openState === item.id;
                        return (
                            <div
                                className={`collapse-box ${isOpen ? 'active' : ''}`}
                                key={item.id}
                            >
                                <div
                                    className='IconButton'
                                    onClick={() => handleToggle(item.id)}
                                >
                                    <h3>{item.title}</h3>
                                    {isOpen ? (
                                        <RemoveIcon className='iconStyle' />
                                    ) : (
                                        <AddIcon className='iconStyle' />
                                    )}
                                </div>
                                <Collapse in={isOpen} className='Collapse'>
                                    {item.point && item.point.length > 0 ? (
                                        <>
                                        <h2>Submission is a three-step process:</h2>
                                        <ul>
                                            {item.point.map((ele, index) => (
                                                <li key={index}>{`${ele}`}</li>
                                            ))}
                                        </ul>
                                        </>
                                    ) : (
                                        <p>{item.description}</p>
                                    )}
                                </Collapse>
                            </div>
                        );
                    })}

                </div>
            </div>
        </>
    );
}
export default GuideTransferStudentComponent;