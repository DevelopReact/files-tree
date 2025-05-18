// react
import { FC } from 'react';
//modules
import { dataTree, TreeItem } from '@/modules';
// styles
import styles from './TreePage.module.scss';

interface TreePageProps {}

export const TreePage: FC<TreePageProps> = ({}) => {
  return (
    <div className={styles.TreePage}>
      {dataTree.map((item) => (
        <TreeItem key={item.name} item={item} />
      ))}
    </div>
  );
};
