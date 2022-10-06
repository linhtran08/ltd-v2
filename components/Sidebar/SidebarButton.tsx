import React, {FunctionComponent} from 'react';
import {IListSidebar} from "./type";
import Dividers from "../Common/Dividers";

interface OwnProps {
  sidebarItem: IListSidebar
}

type Props = OwnProps;

const SidebarButton: FunctionComponent<Props> = ({sidebarItem}) => {

  return (
    sidebarItem.text === 'hr' ? <Dividers/> :
      <button className={'flex items-center space-x-2 hover:text-white'}>
        {sidebarItem.icon}
        <span>{sidebarItem.text}</span>
      </button>
  );
};

export default SidebarButton;
