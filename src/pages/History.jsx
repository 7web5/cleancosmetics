import Page from '../components/layout/Page.jsx';
import PageHero from '../components/layout/PageHero.jsx';
import Timeline from '../components/Timeline.jsx';
import './pages.css';

export default function History() {
  return (
    <Page title="History">
      <PageHero
        index="05"
        label="History"
        blobs="b"
        lines={[
          { text: 'FROM AN IDEA', style: 'heavy' },
          { text: 'to an', style: 'italic' },
          { text: 'INNOVATION.', style: 'heavy', tone: 'rose' },
        ]}
        intro="Eight stages, from the first frustration to the finished attachment. Scroll to follow the journey."
      />
      <section className="section hist" aria-label="Project timeline">
        <Timeline />
      </section>
    </Page>
  );
}
