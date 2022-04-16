import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router';

export default function Header() {
  const { locale, asPath } = useRouter();

  return (
    <header className={styles.header}>
      <Link href={`/${locale === 'en' ? 'de' : 'en'}${asPath}`} locale={false}>
        <a>
          {locale === 'en' ? 'DE' : 'EN'}
        </a>
      </Link>
    </header>
  )
}
