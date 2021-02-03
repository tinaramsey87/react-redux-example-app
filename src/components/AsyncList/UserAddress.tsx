import React, {ChangeEvent, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {actions} from './AsyncList.redux';
import {Input} from 'antd';
import { AsyncListInitialState } from './AsyncListTypes.d';

const UserAddress = ({dataKey}: {dataKey: number}) => {
    const dispatch = useDispatch();
    const address = useSelector((state: AsyncListInitialState) => state.asynclist.users[dataKey].address),
        editing = useSelector((state: AsyncListInitialState) => state.asynclist.editing === dataKey),
        editData = useSelector((state: AsyncListInitialState) => state.asynclist.editData);

    const handleAddressChange = useCallback((key) => (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(actions.editAddress(key, e.target.value));
    }, [dispatch])
    return (
        <div>
            <div><h3>Address</h3></div>
            {!editing &&
                <>
                    <div>{address.street}</div>
                    <div>{address.suite}</div>
                    <div>{address.city}, {address.zipcode}</div>
                </>
            }

            {editing &&
                <>
                    <div><Input addonBefore="Street" value={editData.address.street} onChange={handleAddressChange('street')}  /></div>
                    <div><Input addonBefore="Suite" value={editData.address.suite} onChange={handleAddressChange('suite')}/></div>
                    <div><Input addonBefore="City" value={editData.address.city} onChange={handleAddressChange('city')}/></div>
                    <div><Input addonBefore="Zipcode" value={editData.address.zipcode} onChange={handleAddressChange('zipcode')}/></div>
                </>     
            }
        </div>
    );
}

export default UserAddress;