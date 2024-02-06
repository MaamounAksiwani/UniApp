import React, { useState } from 'react';
import './index.css';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Collapse from '@mui/material/Collapse';

const GuideFirstTimeComponent = () => {

    const [openState, setOpenState] = useState(null);

    const handleToggle = (index) => {
        const isOpen = openState === index;
        setOpenState(isOpen ? null : index);
    };

    const content = [
        {
            id: 0,
            title: 'A copy of your Secondary school Certificate',
            point: [],
            description: 'To start your higher educational plan you need to provide your recent grades and current courses. Some Universities also need you to self-report your high school transcript.'
        },
        {
            id: 1,
            title: 'A list of your activities, social and work experiences ',
            point: [
            ],
            description: `You can share your interests and what you have accomplished outside of the classroom in the second section of My UniApp. You can share
             information about things like internships, work and community engagement. show the colleges what makes you unique! `
        },
        {
            id: 2,
            title: 'A list of your activities, social and work experiences ',
            point: [],
            description: 'You may self-report test scores in the second section of My UniApp. Every university has different testing requirements. Some will always need your test scores. '
        },
        {
            id: 3,
            title: 'Academic achievements',
            point: [
            ],
            description: `The first section in your uni-app isn’t the only place to show your
             passion, you will also have the chance to share your academic honors and achievements`
        }
    ]

    const uniAppContent = [
        {
            id: 4,
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

    const universityRequirement = [
        {

            id: 8,
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
            id: 9,
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

    const Submission = [
        {
            id: 10,
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
                <div className="background-image-GuideFirstTime"></div>
                <div className="overlay"></div>
                <div className="centered-text">
                    First Time Application Student
                </div>
            </div>

            <div className='guideFirstTimeBox'>
                <h1>  Prepare Your <span className='title'>University Application</span></h1>
                <div>
                    {content.map((item) => {
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
                <h1>   Find Your  <span className='title'>Preferred Course</span> and Apply</h1>
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
export default GuideFirstTimeComponent;