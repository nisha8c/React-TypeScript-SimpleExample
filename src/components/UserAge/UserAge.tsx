import React from 'react';
import { UserData } from '../../types/Types';

interface IUserAgeComponentProps {
    user: UserData
}

const UserAge = ({user}: IUserAgeComponentProps) => {
  return (
    <div>Age: {user.age}</div>
  )
}

export default UserAge