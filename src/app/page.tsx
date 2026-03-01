import { SectionCard } from "@/components/SectionCard";
import { columnMiniCards, columnSections } from "@/data/codexQuickRef";

export default function Home() {
  return (
    <main className="canvas">
      <article className="sheet" aria-label="Codex app quick reference layperson sheet">
        <section className="sheet-main">
          <div className="sheet-columns">
            {columnSections.map((column, columnIndex) => (
              <div key={`column-${columnIndex + 1}`} className="sheet-column">
                <div className="sheet-column__stack">
                  {column.map((section) => (
                    <SectionCard key={section.id} section={section} />
                  ))}
                </div>

                <article className="mini-card" aria-label={columnMiniCards[columnIndex].title}>
                  <h3 className="mini-card__title">{columnMiniCards[columnIndex].title}</h3>
                  <ul className="mini-card__list">
                    {columnMiniCards[columnIndex].bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </article>
              </div>
            ))}
          </div>
        </section>

        <footer className="sheet-footer">
          <p>
            Codex quick reference guide. Built with Codex. Last updated March 1, 2026.
          </p>
        </footer>
      </article>
    </main>
  );
}
