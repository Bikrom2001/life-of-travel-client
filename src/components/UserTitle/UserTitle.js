import {useEffect } from 'react';

const UserTitle = (title) => {
   useEffect(() => {
    document.title = `life-of-IDoctor - ${title}`;
   },[title])
};

export default UserTitle;