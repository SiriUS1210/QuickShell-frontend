import React from 'react';
import { ReactComponent as MenuIcon } from './3-dot-menu.svg';
import { ReactComponent as AddIcon } from './add.svg';
import { ReactComponent as DisplayIcon } from './Display.svg';
import { ReactComponent as DoneIcon } from './Done.svg';
import { ReactComponent as HighPriorityIcon } from './Img-High-Priority.svg';
import { ReactComponent as MediumPriorityIcon } from './Img-Medium-Priority.svg';
import { ReactComponent as InProgressIcon } from './in-progress.svg';
import { ReactComponent as NoPriorityIcon } from './No-priority.svg';
import { ReactComponent as UrgentPriorityColorIcon } from './SVG-Urgent-Priority-colour.svg';
import { ReactComponent as UrgentPriorityGreyIcon } from './SVG-Urgent-Priority-grey.svg';
import { ReactComponent as TodoIcon } from './To-do.svg';
import { ReactComponent as BacklogIcon } from './Backlog.svg';
import { ReactComponent as CancelledIcon } from './Cancelled.svg';
import { ReactComponent as DownIcon } from './down.svg';
import { ReactComponent as LowPriorityIcon } from './Img-Low-Priority.svg';
import './icons.css';

// Icon component that handles all icons
const Icon = ({ name, className = '', ...props }) => {
  const icons = {
    menu: MenuIcon,
    add: AddIcon,
    display: DisplayIcon,
    done: DoneIcon,
    highPriority: HighPriorityIcon,
    mediumPriority: MediumPriorityIcon,
    inProgress: InProgressIcon,
    noPriority: NoPriorityIcon,
    urgentPriorityColor: UrgentPriorityColorIcon,
    urgentPriorityGrey: UrgentPriorityGreyIcon,
    todo: TodoIcon,
    backlog: BacklogIcon,
    cancelled: CancelledIcon,
    down: DownIcon,
    lowPriority: LowPriorityIcon,
  };

  const IconComponent = icons[name];
  return IconComponent ? <IconComponent className={className} {...props} /> : null;
};

export default Icon;