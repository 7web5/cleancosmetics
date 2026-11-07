import Page from '../components/layout/Page.jsx';
import PageHero from '../components/layout/PageHero.jsx';
import ComponentDiagram from '../components/ComponentDiagram.jsx';
import './pages.css';

export default function Components() {
  return (
    <Page title="Components">
      <PageHero
        index="06"
        label="Components"
        blobs="c"
        lines={[
          { text: 'DESIGNED', style: 'heavy', tone: 'rose' },
          { text: 'with purpose.', style: 'italic' },
        ]}
        intro="Hover over or select each part to see its name, its role and where it sits in the finished product."
      />
      <section className="section comp" aria-label="Interactive component diagram">
        <ComponentDiagram />
        <p className="comp__note ph">
          Parts A–C are placeholders. Replace their names, descriptions and illustration with the real prototype components.
        </p>
      </section>
    </Page>
  );
}
