// react
import { FC, useState } from 'react';
//libs
import { FaFolder } from 'react-icons/fa';
import { FaFolderOpen } from 'react-icons/fa';
import { FaJsSquare } from 'react-icons/fa';
import { PiFileCssBold } from 'react-icons/pi';
import { BiLogoTypescript } from 'react-icons/bi';
import { FaFileAlt } from 'react-icons/fa';
//types
import { TreeNode } from '../../types/treeTypes';
// styles
import styles from './TreeItem.module.scss';

interface TreeItemProps {
  item: TreeNode;
  getIcon?: () => React.ReactNode;
  expanded?: boolean;
  hasSubitems?: boolean;
  handleClick?: () => void;
}

export const TreeItem: FC<TreeItemProps> = ({ item }) => {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded((prev) => !prev);
  };

  const hasSubitems = Array.isArray(item.subitems) && item.subitems.length > 0;

  const isEmptyFolder = !item.subitems && !item.name.includes('.');

  const isFile = !Array.isArray(item.subitems) && item.name.includes('.');

  const getIcon = () => {
    if (isFile) {
      const ext = item.name.split('.').pop();
      switch (ext) {
        case 'js':
          return <FaJsSquare color='#f7df1e' />;
        case 'css':
          return <PiFileCssBold color='#2965f1' />;
        case 'ts':
          return <BiLogoTypescript color='#007acc' />;
        default:
          return <FaFileAlt color='#999' />;
      }
    }
    if (hasSubitems)
      return !expanded ? (
        <FaFolder color='#fbbf24' />
      ) : (
        <FaFolderOpen color='#fbbf24' />
      );
    if (isEmptyFolder) return <FaFolder color='#fbbf24' />;
  };
  return (
    <div className={styles.TreeItem}>
      <div className={styles.label} onClick={handleClick}>
        <span className={styles.icon}>{getIcon && getIcon()}</span>
        <span>{item.name}</span>
      </div>

      {expanded && hasSubitems && (
        <div className={styles.children}>
          {item.subitems?.map((child) => (
            <TreeItem
              key={child.name}
              item={child}
              getIcon={getIcon}
              handleClick={handleClick}
              expanded={expanded}
              hasSubitems={hasSubitems}
            />
          ))}
        </div>
      )}
    </div>
  );
};
