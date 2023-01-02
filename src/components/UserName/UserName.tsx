import React from 'react';
import { UserData } from '../../types/Types';

interface IUserNameComponentProps {
    user: UserData
}

const UserName = ({user}: IUserNameComponentProps) => {
  return (
    <h1>{user.name}</h1>
  )
}

export default UserName;