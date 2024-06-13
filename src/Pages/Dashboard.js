import React from 'react';
import { useParams } from 'react-router-dom';
import UserSidebar from '../Component/profile/UserSidebar';
import AccountSettings from '../Component/profile/AccountSettings';
import ChangePassword from '../Component/profile/ChangePassword';
import UserAddress from '../Component/profile/UserAddress';
import LegalNotice from '../Component/profile/LegalNotice';
import YourOrders from '../Component/profile/YourOrders';
import './Dashboard.css'; // Assuming you have a CSS file for Dashboard styles

function Dashboard() {
  const { activepage } = useParams();

  return (
    <div className='m-2 flex flex-row items-center justify-center gap-5'>
      <div className='userprofilein'>
        <div className='left'>
          <UserSidebar activepage={activepage} />
        </div>
        <div className='right'>
          {activepage === 'accountsettings' && <AccountSettings />}
          {activepage === 'changepassword' && <ChangePassword />}
          {activepage === 'yourorders' && <YourOrders />}
          {activepage === 'address' && <UserAddress />}
          {activepage === 'legalnotice' && <LegalNotice />}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
