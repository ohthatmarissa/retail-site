import React from 'react';
import { connect } from 'react-redux';
import Directory from '../../components/directory/directory.component';
import './Homepage.styles.scss';

const HomePage = () => (
    <div className='homepage'>
        <Directory />
    </div>
);

export default HomePage;