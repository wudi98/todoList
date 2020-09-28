import React, { useEffect, useState } from 'react';
import { message } from "antd";
import {
    Header,
    Content,
} from './common';
import { Item } from './interfaces';
import { getList, add, update, deleteItem } from "./services";

function Index() {
    const [loading, setLoading] = useState(false);
    const [list, setList]: [Item[], any] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    function fetchData() {
        setLoading(true);
        getList()
            .then((response) => response?.text())
            .then((text: string) => {
                try {
                    const res = JSON.parse(text);
                    if (res.data && res.data.todoList) {
                        setList(res.data.todoList)
                    } else {
                        message.error('请求数据失败!');
                    }
                    setLoading(false);
                } catch (e) {
                    // do somethig
                    setLoading(false);
                }
            })
            .catch((err: any) => {
                message.error('请求数据失败!');
            })
    }

    function handleDelete(key?: string | number) {
        deleteItem(key).then(res => {
            if (res.status === 200) {
                fetchData();
            } else {
                message.error('删除失败!');
            }
        });
    }

    function handleAdd() {
        add().then(res => {
            if (res.status === 200) {
                fetchData();
            } else {
                message.error('添加失败!');
            }
        });
    }

    function handleSave(row: Item) {
        update(row.key, row.title).then(res => {
            if (res.status === 200) {
                fetchData();
            } else {
                message.error('修改失败!');
            }
        });
    };

    return (
        <div
            style={{
                width: 500,
                height: '100vh',
                position: 'absolute',
                left: 'calc(50% - 250px)',
                border: '1px solid',
                marginTop: '50px',
                overflow: 'auto',
            }}
        >
            <Header handleAdd={handleAdd} />
            <Content
                data={list}
                loading={loading}
                handleDelete={handleDelete}
                handleSave={handleSave}
            />
        </div>
    );
}

export default Index;
