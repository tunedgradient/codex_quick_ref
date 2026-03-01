import { ThemeSwitch } from "@/components/ThemeSwitch";
import { SectionCard } from "@/components/SectionCard";
import type { QuickRefSection } from "@/data/codexQuickRef";
import { columnMiniCards, columnSections } from "@/data/codexQuickRef";

function sectionWeight(section: QuickRefSection): number {
  const bulletCount = section.groups.reduce((sum, group) => sum + group.bullets.length, 0);
  const headingCount = section.groups.reduce((sum, group) => sum + (group.heading ? 1 : 0), 0);
  const introWeight = section.intro ? 0.9 : 0;
  return Math.max(1, bulletCount * 0.78 + headingCount * 0.34 + introWeight);
}

export default function Home() {
  return (
    <main className="canvas">
      <article className="sheet" aria-label="Codex app quick reference layperson sheet">
        <section className="sheet-main">
          <div className="sheet-columns">
            {columnSections.map((column, columnIndex) => {
              const miniCard = columnMiniCards[columnIndex];
              const sectionRows = column.map(sectionWeight);

              return (
                <div key={`column-${columnIndex + 1}`} className="sheet-column">
                  <div
                    className="sheet-column__stack"
                    style={{ gridTemplateRows: sectionRows.map((weight) => `${weight}fr`).join(" ") }}
                  >
                    {column.map((section) => (
                      <SectionCard key={section.id} section={section} />
                    ))}
                  </div>

                  <article className="mini-card" aria-label={miniCard.title}>
                    <h3 className="mini-card__title">{miniCard.title}</h3>
                    <ul className="mini-card__list">
                      {miniCard.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </article>
                </div>
              );
            })}
          </div>
        </section>

        <footer className="sheet-footer">
          <div className="sheet-footer__row">
            <p>
              Codex quick reference guide. Built with Codex. Last updated March 1, 2026.
            </p>
            <ThemeSwitch />
          </div>
        </footer>
      </article>
    </main>
  );
}
