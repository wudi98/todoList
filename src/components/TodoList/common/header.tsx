import React from 'react';
import {Button, PageHeader} from 'antd';
import { SearchProps } from '../interfaces/index';

function Header({
    handleAdd
}: SearchProps) {
    return (
        <PageHeader
            className="site-page-header"
            title="Todo:"
            subTitle={(<Button onClick={(e) => handleAdd()} type="primary" style={{ marginBottom: 16 }}>
                添加
            </Button>)}
        />
    );
}

export default Header;
