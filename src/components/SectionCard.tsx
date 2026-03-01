import type { QuickRefIcon, QuickRefSection } from "@/data/codexQuickRef";
import {
  Boxes,
  Clock3,
  GitBranch,
  Keyboard,
  LayoutDashboard,
  SearchCheck,
  SlidersHorizontal,
  Sparkles,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type SectionCardProps = {
  section: QuickRefSection;
};

const iconMap: Record<QuickRefIcon, LucideIcon> = {
  overview: LayoutDashboard,
  features: Sparkles,
  commands: Keyboard,
  settings: SlidersHorizontal,
  review: SearchCheck,
  automations: Clock3,
  worktrees: GitBranch,
  localEnvironments: Boxes,
  troubleshooting: Wrench,
};

export function SectionCard({ section }: SectionCardProps) {
  const HeadingIcon = iconMap[section.icon];

  return (
    <article className={`section-card tone-${section.tone}`}>
      <div className="section-card__title-row">
        <HeadingIcon className="section-card__icon" aria-hidden="true" />
        <h2 className="section-card__title">{section.title}</h2>
      </div>

      {section.intro ? <p className="section-card__intro">{section.intro}</p> : null}

      <div className="section-groups">
        {section.groups.map((group, groupIndex) => (
          <section key={`${section.id}-group-${groupIndex}`} className="section-group">
            {group.heading ? <h3 className="section-group__heading">{group.heading}</h3> : null}

            <ul className="section-bullets">
              {group.bullets.map((bullet, bulletIndex) => (
                <li key={`${section.id}-bullet-${groupIndex}-${bulletIndex}`} className="section-bullet">
                  <span className="section-bullet__text">{bullet.text}</span>
                  {bullet.tag ? (
                    <span className={`section-bullet__tag section-bullet__tag--${bullet.tag}`}>
                      {bullet.tag}
                    </span>
                  ) : null}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </article>
  );
}
