import React from 'react';
import styles from './Test.module.scss';
import Button from '../../components/Utility/Button/LargeButton';
import SearchBar from '../../components/Utility/SearchBar';
import Title from '../../components/Utility/TitleFormatting';

export default function Test() {
    return (
        <main className={styles.mainpart}>
            <Title className={styles.titleform} />
            <Button  />
            <SearchBar placeHolder={"Releases"} />
        </main>
    )
}