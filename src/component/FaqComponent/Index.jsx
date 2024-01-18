import React, { useState } from 'react';
import "./index.css"
import Collapse from '@mui/material/Collapse';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Container } from '@mui/material';
const FaqComponent = () => {
    const [openStates, setOpenStates] = useState([false, false, false]); // Initial state for each collapse box

    const handleToggle = (index) => {
        const newOpenStates = [...openStates];
        newOpenStates[index] = !newOpenStates[index];
        setOpenStates(newOpenStates);
    };


    const content = [
        {
            id: 0,
            title: 'How to create uniapp online account?',
            point: [
                'Click on the create account button',
                'Choose your sign-up method, you can sign-up with your email, Facebook or Gmail account',
                'Complete your registration information',
                'Once you’re logged in, complete your Uni-App profile to use all UniApp functions',
            ],
            description: ''
        },
        {
            id: 1,
            title: 'Yes, UniApp is free of charge',
            point: [
            ],
            description: `Is uniapp free of charge`
        },
        {
            id: 0,
            title: 'How to create uniapp online account?',
            point: [
                'Click on the create account button',
                'Choose your sign-up method, you can sign-up with your email, Facebook or Gmail account',
                'Complete your registration information',
                'Once you’re logged in, complete your Uni-App profile to use all UniApp functions',
            ],
            description: ''
        },
        {
            id: 1,
            title: 'Yes, UniApp is free of charge',
            point: [
            ],
            description: `Is uniapp free of charge`
        }
        ,
        {
            id: 0,
            title: 'How to create uniapp online account?',
            point: [
                'Click on the create account button',
                'Choose your sign-up method, you can sign-up with your email, Facebook or Gmail account',
                'Complete your registration information',
                'Once you’re logged in, complete your Uni-App profile to use all UniApp functions',
            ],
            description: ''
        },
        {
            id: 1,
            title: 'Yes, UniApp is free of charge',
            point: [
            ],
            description: `Is uniapp free of charge`
        },
        {
            id: 0,
            title: 'How to create uniapp online account?',
            point: [
                'Click on the create account button',
                'Choose your sign-up method, you can sign-up with your email, Facebook or Gmail account',
                'Complete your registration information',
                'Once you’re logged in, complete your Uni-App profile to use all UniApp functions',
            ],
            description: ''
        },
        {
            id: 1,
            title: 'Yes, UniApp is free of charge',
            point: [
            ],
            description: `Is uniapp free of charge`
        },
        {
            id: 0,
            title: 'How to create uniapp online account?',
            point: [
                'Click on the create account button',
                'Choose your sign-up method, you can sign-up with your email, Facebook or Gmail account',
                'Complete your registration information',
                'Once you’re logged in, complete your Uni-App profile to use all UniApp functions',
            ],
            description: ''
        },
        {
            id: 1,
            title: 'Yes, UniApp is free of charge',
            point: [
            ],
            description: `Is uniapp free of charge`
        },
        {
            id: 0,
            title: 'How to create uniapp online account?',
            point: [
                'Click on the create account button',
                'Choose your sign-up method, you can sign-up with your email, Facebook or Gmail account',
                'Complete your registration information',
                'Once you’re logged in, complete your Uni-App profile to use all UniApp functions',
            ],
            description: ''
        },
        {
            id: 1,
            title: 'Yes, UniApp is free of charge',
            point: [
            ],
            description: `Is uniapp free of charge`
        },
        {
            id: 0,
            title: 'How to create uniapp online account?',
            point: [
                'Click on the create account button',
                'Choose your sign-up method, you can sign-up with your email, Facebook or Gmail account',
                'Complete your registration information',
                'Once you’re logged in, complete your Uni-App profile to use all UniApp functions',
            ],
            description: ''
        },
        {
            id: 1,
            title: 'Yes, UniApp is free of charge',
            point: [
            ],
            description: `Is uniapp free of charge`
        },
        {
            id: 0,
            title: 'How to create uniapp online account?',
            point: [
                'Click on the create account button',
                'Choose your sign-up method, you can sign-up with your email, Facebook or Gmail account',
                'Complete your registration information',
                'Once you’re logged in, complete your Uni-App profile to use all UniApp functions',
            ],
            description: ''
        },
        {
            id: 1,
            title: 'Yes, UniApp is free of charge',
            point: [
            ],
            description: `Is uniapp free of charge`
        },
        {
            id: 0,
            title: 'How to create uniapp online account?',
            point: [
                'Click on the create account button',
                'Choose your sign-up method, you can sign-up with your email, Facebook or Gmail account',
                'Complete your registration information',
                'Once you’re logged in, complete your Uni-App profile to use all UniApp functions',
            ],
            description: ''
        },
        {
            id: 1,
            title: 'Yes, UniApp is free of charge',
            point: [
            ],
            description: `Is uniapp free of charge`
        },
        {
            id: 0,
            title: 'How to create uniapp online account?',
            point: [
                'Click on the create account button',
                'Choose your sign-up method, you can sign-up with your email, Facebook or Gmail account',
                'Complete your registration information',
                'Once you’re logged in, complete your Uni-App profile to use all UniApp functions',
            ],
            description: ''
        },
        {
            id: 1,
            title: 'Yes, UniApp is free of charge',
            point: [
            ],
            description: `Is uniapp free of charge`
        }
    ]

    const contentRightSide = [
        {
            id: 0,
            title: 'How to create uniapp online account?',
            point: [
                'Click on the create account button',
                'Choose your sign-up method, you can sign-up with your email, Facebook or Gmail account',
                'Complete your registration information',
                'Once you’re logged in, complete your Uni-App profile to use all UniApp functions',
            ],
            description: ''
        },
        {
            id: 1,
            title: 'Yes, UniApp is free of charge',
            point: [
            ],
            description: `Is uniapp free of charge`
        },
        {
            id: 0,
            title: 'How to create uniapp online account?',
            point: [
                'Click on the create account button',
                'Choose your sign-up method, you can sign-up with your email, Facebook or Gmail account',
                'Complete your registration information',
                'Once you’re logged in, complete your Uni-App profile to use all UniApp functions',
            ],
            description: ''
        },
        {
            id: 1,
            title: 'Yes, UniApp is free of charge',
            point: [
            ],
            description: `Is uniapp free of charge`
        }
        ,
        {
            id: 0,
            title: 'How to create uniapp online account?',
            point: [
                'Click on the create account button',
                'Choose your sign-up method, you can sign-up with your email, Facebook or Gmail account',
                'Complete your registration information',
                'Once you’re logged in, complete your Uni-App profile to use all UniApp functions',
            ],
            description: ''
        },
        {
            id: 1,
            title: 'Yes, UniApp is free of charge',
            point: [
            ],
            description: `Is uniapp free of charge`
        },
        {
            id: 0,
            title: 'How to create uniapp online account?',
            point: [
                'Click on the create account button',
                'Choose your sign-up method, you can sign-up with your email, Facebook or Gmail account',
                'Complete your registration information',
                'Once you’re logged in, complete your Uni-App profile to use all UniApp functions',
            ],
            description: ''
        },
        {
            id: 1,
            title: 'Yes, UniApp is free of charge',
            point: [
            ],
            description: `Is uniapp free of charge`
        },
        {
            id: 0,
            title: 'How to create uniapp online account?',
            point: [
                'Click on the create account button',
                'Choose your sign-up method, you can sign-up with your email, Facebook or Gmail account',
                'Complete your registration information',
                'Once you’re logged in, complete your Uni-App profile to use all UniApp functions',
            ],
            description: ''
        },
        {
            id: 1,
            title: 'Yes, UniApp is free of charge',
            point: [
            ],
            description: `Is uniapp free of charge`
        },
        {
            id: 0,
            title: 'How to create uniapp online account?',
            point: [
                'Click on the create account button',
                'Choose your sign-up method, you can sign-up with your email, Facebook or Gmail account',
                'Complete your registration information',
                'Once you’re logged in, complete your Uni-App profile to use all UniApp functions',
            ],
            description: ''
        },
        {
            id: 1,
            title: 'Yes, UniApp is free of charge',
            point: [
            ],
            description: `Is uniapp free of charge`
        },
        {
            id: 0,
            title: 'How to create uniapp online account?',
            point: [
                'Click on the create account button',
                'Choose your sign-up method, you can sign-up with your email, Facebook or Gmail account',
                'Complete your registration information',
                'Once you’re logged in, complete your Uni-App profile to use all UniApp functions',
            ],
            description: ''
        },
        {
            id: 1,
            title: 'Yes, UniApp is free of charge',
            point: [
            ],
            description: `Is uniapp free of charge`
        },
        {
            id: 0,
            title: 'How to create uniapp online account?',
            point: [
                'Click on the create account button',
                'Choose your sign-up method, you can sign-up with your email, Facebook or Gmail account',
                'Complete your registration information',
                'Once you’re logged in, complete your Uni-App profile to use all UniApp functions',
            ],
            description: ''
        },
        {
            id: 1,
            title: 'Yes, UniApp is free of charge',
            point: [
            ],
            description: `Is uniapp free of charge`
        },
        {
            id: 0,
            title: 'How to create uniapp online account?',
            point: [
                'Click on the create account button',
                'Choose your sign-up method, you can sign-up with your email, Facebook or Gmail account',
                'Complete your registration information',
                'Once you’re logged in, complete your Uni-App profile to use all UniApp functions',
            ],
            description: ''
        },
        {
            id: 1,
            title: 'Yes, UniApp is free of charge',
            point: [
            ],
            description: `Is uniapp free of charge`
        },
        {
            id: 0,
            title: 'How to create uniapp online account?',
            point: [
                'Click on the create account button',
                'Choose your sign-up method, you can sign-up with your email, Facebook or Gmail account',
                'Complete your registration information',
                'Once you’re logged in, complete your Uni-App profile to use all UniApp functions',
            ],
            description: ''
        },
        {
            id: 1,
            title: 'Yes, UniApp is free of charge',
            point: [
            ],
            description: `Is uniapp free of charge`
        }
    ]

    return (
        <Container maxWidth="lg">
            <div>
                <p style={{ textAlign: 'center', fontSize: '18px', fontWeight: 300, letterSpacing: "3px" }}>FAQS AND ALL YOU NEED TO KNOW ABOUT STUDYING ABROAD</p>
                <h1 style={{ textAlign: 'center', color: '#333', fontSize: '36px' }}>Applying Through UniApp</h1>
            </div>
            <div className='ContainerCollapse'>
                <div>
                    {content.map((item) => {
                        return (
                            <div className='collapse-box childBox' key={item.id}>
                                <div className='IconButton' onClick={() => handleToggle(item.id)}>
                                    <h3 onClick={() => handleToggle(item.id)}>{item.title} </h3>
                                    {openStates[item.id] ? <RemoveIcon className='iconStyle' /> : <AddIcon className='iconStyle' />}
                                </div>
                                <Collapse in={openStates[item.id]} className='Collapse'>
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

                <div>
                    <div>
                        {contentRightSide.map((item) => {
                            return (
                                <div className='collapse-box childBox' key={item.id}>
                                    <div className='IconButton' onClick={() => handleToggle(item.id)}>
                                        <h3 onClick={() => handleToggle(item.id)}>{item.title} </h3>
                                        {openStates[item.id] ? <RemoveIcon className='iconStyle' /> : <AddIcon className='iconStyle' />}
                                    </div>
                                    <Collapse in={openStates[item.id]} className='Collapse'>
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
            </div>
        </Container>
    )

}

export default FaqComponent;




