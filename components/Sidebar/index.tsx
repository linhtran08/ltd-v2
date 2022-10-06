import React, {FunctionComponent} from 'react';
import {
  BuildingLibraryIcon,
  HeartIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  PlusCircleIcon, RssIcon
} from "@heroicons/react/24/outline";
import {IListSidebar} from "./type";
import SidebarButton from "./SidebarButton";
import Dividers from "../Common/Dividers";

interface OwnProps {
}

type Props = OwnProps;

const index: FunctionComponent<Props> = (props) => {
  return (
    <div className={'text-gray-500 p-5 text-sm border-r border-gray-900'}>
      <div className={'space-y-4'}>
        {listSidebar1.map((item, index) => (
          <>
            <SidebarButton sidebarItem={item} />
          </>
        ))}

        {/* Playlist >>> */}
        <p className={'cursor-pointer hover:text-white'}>Playlist name...</p>
        <p className={'cursor-pointer hover:text-white'}>Playlist name...</p>
        <p className={'cursor-pointer hover:text-white'}>Playlist name...</p>
      </div>
    </div>
  );
};

export default index;

const listSidebar1: IListSidebar[] = [
  {
    icon: <HomeIcon className={'h-5 w-5'}/>,
    text: 'Home'
  }, {
    icon: <MagnifyingGlassIcon className={'h-5 w-5'}/>,
    text: 'Search'
  }, {
    icon: <BuildingLibraryIcon className={'h-5 w-5'}/>,
    text: 'Your Library'
  }, {
    icon: <></>,
    text: 'hr'
  } ,{
    icon: <PlusCircleIcon className={'h-5 w-5'}/>,
    text: 'Create Playlist'
  },{
    icon: <HeartIcon className={'h-5 w-5'}/>,
    text: 'Liked Songs'
  },{
    icon: <RssIcon className={'h-5 w-5'}/>,
    text: 'Your Episodes'
  },{
    icon: <></>,
    text: 'hr'
  } ,
]