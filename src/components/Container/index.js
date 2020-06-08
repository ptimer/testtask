import React from 'react';
import classNames from "classnames";

import './Container.scss'

const Container = ({children, className }) => <div className={classNames('container', className)}>{children}</div>;

export default Container;
