import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {actions} from './AsyncList.redux';
import { Card, Input } from 'antd';
import { ReloadOutlined, EditOutlined, GlobalOutlined } from '@ant-design/icons';
import UserAddress from './UserAddress';
import { AsyncListInitialState } from './AsyncListTypes.d';

function ListItem({dataKey}: {dataKey: number}) {
    const dispatch = useDispatch(),
        user = useSelector((state: AsyncListInitialState) => state.asynclist.users[dataKey]),
        name = useSelector((state: AsyncListInitialState) => state.asynclist.editData ? state.asynclist.editData.name : ''),
        editing = useSelector((state: AsyncListInitialState) => state.asynclist.editing === dataKey);

    
    const handleRefresh = useCallback(() => {
        dispatch(actions.fetchUser(dataKey))
    }, [dispatch, dataKey])

    const handleEdit = useCallback(() => {
        dispatch(actions.toggleUserEdit(dataKey));
    }, [dispatch, dataKey])

    const handleNameChange = useCallback((e) => {
        dispatch(actions.editUserData({name: e.target.value}));
    }, [dispatch])

return (
    <Card
        title={editing ? <Input value={name} onChange={handleNameChange} /> : user.name}
        actions={[
            <ReloadOutlined key="refresh" onClick={handleRefresh} />,
            <EditOutlined key="edit" onClick={handleEdit} />,
            <a href={`https://www.google.com/maps?q=${user.address.geo.lat},${user.address.geo.lng}`} target="_blank" rel="noreferrer" key="global"><GlobalOutlined /></a>
        ]}
    >
        <p>
            <b>Username:</b> {user.username}
        </p>
        <p>
            <b>Email:</b> {user.email}
        </p>
        <p>
            <b>Phone:</b> {user.phone}
        </p>
        <UserAddress dataKey={dataKey} />
    </Card>
)
}

export default ListItem;