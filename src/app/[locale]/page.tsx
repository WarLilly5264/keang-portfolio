import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import styles from './page.module.css';

export default function Home() {
  // เรียกใช้คำแปลแต่ละหมวด
  const tHero = useTranslations('Hero');
  const tNav = useTranslations('Navbar');
  const tSkills = useTranslations('Skills');
  const tLab = useTranslations('Lab');
  const tContact = useTranslations('Contact');

  return (
    <>
      {/* ================= Navbar ================= */}
      <nav className={styles.navbar}>
        <div className={styles.navLogo}>
          <span>&lt;</span> Keang <span>/&gt;</span>
        </div>
        <div className={styles.navLinks}>
          <a href="#skills">{tNav('skills')}</a>
          <a href="#lab">{tNav('lab')}</a>
          <a href="#contact">{tNav('contact')}</a>
          
          {/* ปุ่มสลับภาษา */}
          <div className={styles.langSwitch}>
            <Link href="/" locale="th">TH</Link>
            <span>|</span>
            <Link href="/" locale="en">EN</Link>
          </div>
        </div>
      </nav>

      {/* ================= Hero Section ================= */}
      {/* เพิ่ม padding-top หนี Navbar */}
      <main className={styles.container} style={{ paddingTop: '100px' }}>
       {/* ตัวอย่างการใส่แอนิเมชันให้ค่อยๆ โผล่มาทีละบรรทัด */}
<div className={`${styles.roleBadge} ${styles.animateUp}`}>
  {tHero('role')}
</div>

<h1 className={`${styles.heroTitle} ${styles.animateUp} ${styles.delay1}`}>
  {tHero('headline')} <br />
  <span className={styles.highlight}>{tHero('highlight')}</span>
</h1>

<p className={`${styles.description} ${styles.animateUp} ${styles.delay2}`}>
  {tHero('greeting')} {tHero('description')}
</p>

<div className={`${styles.buttonGroup} ${styles.animateUp} ${styles.delay3}`}>
  {/* โค้ดปุ่มเดิม */}
</div>
      </main>

      {/* ================= Skills Section ================= */}
      <section id="skills" className={styles.skillsSection}>
        <h2 className={styles.sectionTitle}>{tSkills('title')}</h2>
        
        <div className={styles.skillsGrid}>
          {/* กล่อง Frontend */}
          <div className={styles.skillCard}>
            <h3>{tSkills('frontend')}</h3>
            <ul className={styles.skillList}>
              <li>React, Next.js, Vite</li>
              <li>JavaScript (ES6+), TypeScript</li>
              <li>HTML5, CSS3, CSS Modules</li>
            </ul>
          </div>
          

          {/* กล่อง Backend & Tools */}
          <div className={styles.skillCard}>
            <h3>{tSkills('backend')}</h3>
            <ul className={styles.skillList}>
              <li>Python (Automation, Scripting)</li>
              <li>Supabase, SQLite</li>
              <li>Git, GitHub, Vercel</li>
            </ul>
          </div>

          {/* กล่อง Core Knowledge */}
          <div className={styles.skillCard}>
            <h3>{tSkills('core')}</h3>
            <ul className={styles.skillList}>
              <li>Cyber Security Basics</li>
              <li>Network Administration</li>
              <li>Trading Automation (Bot)</li>
            </ul>
          </div>
        </div>
      </section>
      {/* ================= The Lab Section ================= */}
      <section id="lab" className={styles.labSection}>
        <h2 className={styles.sectionTitle}>{tLab('title')}</h2>
        <p className={styles.labSubtitle}>{tLab('subtitle')}</p>
        
        <div className={styles.projectGrid}>
          
          {/* Card 1: Web POS */}
          <div className={styles.projectCard}>
            <div className={styles.projectImagePlaceholder}>POS_UI</div>
            <div className={styles.projectContent}>
              <div className={styles.projectHeader}>
                <h3 className={styles.projectTitle}>{tLab('posTitle')}</h3>
                <span className={`${styles.statusTag} ${styles.tagWip}`}>{tLab('statusWip')}</span>
              </div>
              <p className={styles.projectDesc}>{tLab('posDesc')}</p>
              
              <div className={styles.techTags}>
                <span className={styles.techBadge}>React</span>
                <span className={styles.techBadge}>Vite</span>
                <span className={styles.techBadge}>Tailwind</span>
              </div>
              
              <div className={styles.projectLinks}>
                <a href="#">{tLab('viewCode')}</a>
                <a href="#">{tLab('liveDemo')}</a>
              </div>
            </div>
          </div>

          {/* Card 2: Trading Bot */}
          <div className={styles.projectCard}>
            <div className={styles.projectImagePlaceholder}>CHART_BOT</div>
            <div className={styles.projectContent}>
              <div className={styles.projectHeader}>
                <h3 className={styles.projectTitle}>{tLab('tradeTitle')}</h3>
                <span className={`${styles.statusTag} ${styles.tagBeta}`}>{tLab('statusBeta')}</span>
              </div>
              <p className={styles.projectDesc}>{tLab('tradeDesc')}</p>
              
              <div className={styles.techTags}>
                <span className={styles.techBadge}>Python</span>
                <span className={styles.techBadge}>MQL5</span>
                <span className={styles.techBadge}>MetaTrader</span>
              </div>
              
              <div className={styles.projectLinks}>
                <a href="#">{tLab('viewCode')}</a>
              </div>
            </div>
          </div>

          {/* Card 3: Hospital App */}
          <div className={styles.projectCard}>
            <div className={styles.projectImagePlaceholder}>HOSP_HUB</div>
            <div className={styles.projectContent}>
              <div className={styles.projectHeader}>
                <h3 className={styles.projectTitle}>{tLab('hospTitle')}</h3>
                <span className={`${styles.statusTag} ${styles.tagDone}`}>{tLab('statusDone')}</span>
              </div>
              <p className={styles.projectDesc}>{tLab('hospDesc')}</p>
              
              <div className={styles.techTags}>
                <span className={styles.techBadge}>Next.js</span>
                <span className={styles.techBadge}>SQLite</span>
                <span className={styles.techBadge}>Supabase</span>
              </div>
              
              <div className={styles.projectLinks}>
                <a href="#">{tLab('liveDemo')}</a>
              </div>
            </div>
          </div>

        </div>
      </section>
      {/* ================= Contact Section ================= */}
      <section id="contact" className={styles.contactSection}>
        <div className={styles.contactBox}>
          <h2 className={styles.contactTitle}>{tContact('title')}</h2>
          <p className={styles.contactSubtitle}>{tContact('subtitle')}</p>
          
          <div className={styles.contactDetails}>
            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>{tContact('locationLabel')}</span>
              <span className={styles.contactValue}>{tContact('locationValue')}</span>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>{tContact('emailLabel')}</span>
              <span className={styles.contactValue}>{tContact('emailValue')}</span>
            </div>
          </div>

          <div className={styles.contactActions}>
            {/* แก้ href เป็น "mailto:อีเมลของคุณ" เพื่อให้พอกดแล้วเปิดแอปส่งเมลขึ้นมาเลย */}
            <a href="mailto:kangnakub.5264@gamil.com" className={styles.btnPrimary}>
              {tContact('btnText')}
            </a>
            
            {/* ลิงก์ไป GitHub ของคุณ */}
            <a href="https://github.com/WarLilly5264" target="_blank" rel="noopener noreferrer" className={styles.githubLink}>
              {tContact('githubText')}
            </a>
          </div>
        </div>
      </section>
    </>
  );
  
}
