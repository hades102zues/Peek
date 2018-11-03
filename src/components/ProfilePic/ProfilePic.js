import React from 'react';
import styles from './ProfilePic.module.css';

const profilePic = (props) =>(
   <img src={`https://robohash.org/${props.storyId}`} className={styles.ProfilePic} alt='profile_pic'/>
);

export default profilePic;