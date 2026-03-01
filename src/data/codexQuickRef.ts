export type QuickRefBulletTag = "tip" | "gotcha" | "path" | "shortcut";

export type QuickRefBullet = {
  text: string;
  tag?: QuickRefBulletTag;
};

export type QuickRefGroup = {
  heading?: string;
  bullets: QuickRefBullet[];
};

export type QuickRefIcon =
  | "overview"
  | "features"
  | "commands"
  | "settings"
  | "review"
  | "automations"
  | "worktrees"
  | "localEnvironments"
  | "troubleshooting";

export type QuickRefSection = {
  id: string;
  title: string;
  icon: QuickRefIcon;
  intro?: string;
  groups: QuickRefGroup[];
  tone: "core" | "settings" | "advanced";
};

export type ColumnMiniCard = {
  id: string;
  title: string;
  bullets: string[];
};

export type SourceLink = { label: string; href: string };

export const sheetMeta = {
  lastReviewed: "March 1, 2026",
  audience: "General",
  format: "1-page summary",
};

export const columnSections: QuickRefSection[][] = [
  [
    {
      id: "overview",
      title: "Overview",
      icon: "overview",
      tone: "core",
      intro:
        "Desktop command center for running multiple Codex task threads in parallel.",
      groups: [
        {
          heading: "Basics",
          bullets: [
            { text: "Runs on macOS (Apple Silicon)." },
            {
              text: "Sign in with your ChatGPT account or an OpenAI API key.",
            },
            {
              text: "Some cloud-thread features can be unavailable with API-key sign-in.",
              tag: "gotcha",
            },
          ],
        },
        {
          heading: "Mental model",
          bullets: [
            {
              text: "Project (folder) -> Threads (tasks) -> Mode (Local, Worktree, or Cloud).",
            },
          ],
        },
      ],
    },
    {
      id: "features",
      title: "Features",
      icon: "features",
      tone: "core",
      groups: [
        {
          heading: "Core workflow",
          bullets: [
            {
              text: "Keep multiple projects in the sidebar and switch quickly.",
            },
            {
              text: "Modes: Local (project dir), Worktree (isolated checkout), Cloud (remote environment).",
            },
            {
              text: "Built-in Git flow: inspect diffs, comment inline, stage/revert chunks, commit/push, create PRs.",
            },
            {
              text: "Integrated terminal is scoped to the current thread target; toggle with Cmd+J.",
              tag: "shortcut",
            },
            {
              text: "Use Skills across app/CLI/IDE and connect external tools with MCP.",
            },
          ],
        },
      ],
    },
    {
      id: "commands",
      title: "Commands",
      icon: "commands",
      tone: "core",
      groups: [
        {
          heading: "Keyboard shortcuts (macOS)",
          bullets: [
            { text: "Command menu: Cmd+K or Cmd+Shift+P" },
            { text: "Settings: Cmd+," },
            { text: "Open folder: Cmd+O" },
            { text: "Toggle sidebar: Cmd+B" },
            { text: "Toggle diff panel: Cmd+Option+B" },
            { text: "Toggle terminal: Cmd+J (clear terminal: Ctrl+L)" },
            { text: "New thread: Cmd+N or Cmd+Shift+O" },
          ],
        },
        {
          heading: "Slash commands",
          bullets: [
            { text: "/status, /review, /plan-mode, /mcp, /feedback" },
            {
              text: "Type $ to invoke a skill directly; enabled skills can also appear in slash suggestions.",
            },
          ],
        },
      ],
    },
    {
      id: "mode-quick-picks",
      title: "Mode Quick Picks",
      icon: "features",
      tone: "core",
      groups: [
        {
          heading: "Choosing Local vs Worktree vs Cloud",
          bullets: [
            {
              text: "Local: fastest path for small edits directly in your current project folder.",
            },
            {
              text: "Worktree: best default for parallel tasks or risky refactors you want isolated.",
            },
            {
              text: "Cloud: use when your cloud environment is configured and remote execution is preferred.",
            },
            {
              text: "Picked the wrong target? Cancel run, then press Up Arrow to recover your prompt.",
              tag: "tip",
            },
          ],
        },
      ],
    },
  ],
  [
    {
      id: "settings",
      title: "Settings",
      icon: "settings",
      tone: "settings",
      groups: [
        {
          heading: "Access and key areas",
          bullets: [
            { text: "Open settings with Cmd+,.", tag: "shortcut" },
            {
              text: "General: file opening behavior, command output amount, multiline send behavior, sleep prevention.",
            },
            {
              text: "Appearance: theme, window style, UI/code fonts (including review and terminal).",
            },
            {
              text: "Notifications: completion alerts and permission prompts.",
            },
            {
              text: "Agent config is shared with IDE/CLI; advanced options live in config.toml.",
              tag: "path",
            },
            {
              text: "Git settings: branch naming, force-push behavior, commit/PR prompt helpers.",
            },
            {
              text: "Integrations and MCP: enable recommended servers or add custom ones; OAuth can launch from the app.",
            },
            {
              text: "Personalization: Friendly, Pragmatic, or None, plus custom instructions written to AGENTS.md.",
              tag: "path",
            },
            { text: "You can view and restore archived threads from Settings." },
          ],
        },
      ],
    },
    {
      id: "review",
      title: "Review",
      icon: "review",
      tone: "settings",
      groups: [
        {
          heading: "How to use it",
          bullets: [
            {
              text: "Review helps you understand changes, leave line comments, and decide what to keep.",
            },
            {
              text: "Review pane requires a Git repo; the app can prompt you to create one.",
              tag: "tip",
            },
            {
              text: "Review reflects repo state, not only Codex edits (includes your own and other uncommitted edits).",
              tag: "gotcha",
            },
            {
              text: "Useful views: Uncommitted changes, diff vs base branch, and Last turn changes.",
            },
            {
              text: "Inline loop: hover a changed line, click +, then send follow-up instructions in the thread.",
            },
            {
              text: "Stage what you want to keep; revert chunks/files you do not.",
            },
          ],
        },
      ],
    },
    {
      id: "automations",
      title: "Automations",
      icon: "automations",
      tone: "settings",
      groups: [
        {
          heading: "Run model",
          bullets: [
            {
              text: "Automations are scheduled recurring local tasks; app must be running and project must be available on disk.",
            },
            {
              text: "Results appear in the Automations Triage inbox; filter by unread or all.",
            },
            {
              text: "In Git repos, each run starts in a dedicated background worktree; in non-Git projects, runs in the project directory.",
            },
            {
              text: "Test prompts manually in a normal thread first, then review early scheduled runs and tune.",
              tag: "tip",
            },
            {
              text: "Automations follow your default sandbox permissions; full access has higher unattended risk.",
              tag: "gotcha",
            },
            {
              text: "Frequent schedules can create many worktrees; archive runs you do not need and avoid pinning unless necessary.",
            },
          ],
        },
      ],
    },
  ],
  [
    {
      id: "worktrees",
      title: "Worktrees",
      icon: "worktrees",
      tone: "advanced",
      groups: [
        {
          heading: "Concept and workflow",
          bullets: [
            {
              text: "A worktree is a second checkout of the same Git repo so tasks do not collide.",
            },
            {
              text: "Use it for parallel tasks or experiments without touching your current checkout.",
            },
            {
              text: "Start a worktree thread by choosing Worktree mode, selecting a branch, and optionally running setup scripts.",
            },
            {
              text: "Path A: stay in worktree, create branch there, then commit/push/PR from that isolated checkout.",
            },
            {
              text: "Path B: Sync with local and choose Overwrite (match source history/files) or Apply (patch since shared commit).",
            },
            {
              text: ".gitignore files do not transfer during sync.",
              tag: "gotcha",
            },
            {
              text: "Codex creates worktrees under $CODEX_HOME/worktrees and can start in detached HEAD.",
              tag: "path",
            },
            {
              text: "Cleanup can remove older eligible worktrees while saving snapshots for restore.",
            },
          ],
        },
      ],
    },
    {
      id: "local-environments",
      title: "Local Environments",
      icon: "localEnvironments",
      tone: "advanced",
      groups: [
        {
          heading: "What they provide",
          bullets: [
            {
              text: "Define setup scripts for new worktrees and project actions (buttons) for common tasks.",
            },
            {
              text: "Stored in .codex at the project root; commit it to share team workflows.",
              tag: "path",
            },
            {
              text: "In monorepos, open the directory that contains the shared .codex folder.",
              tag: "gotcha",
            },
            {
              text: "Setup scripts can be platform-specific (macOS, Windows, Linux).",
            },
            {
              text: "Actions run in the integrated terminal (for example: dev server, tests, build).",
            },
          ],
        },
      ],
    },
    {
      id: "troubleshooting",
      title: "Troubleshooting",
      icon: "troubleshooting",
      tone: "advanced",
      groups: [
        {
          heading: "Common fixes",
          bullets: [
            {
              text: "Seeing files Codex did not touch? Review is Git-state based; switch to Last turn changes for assistant-only diff.",
              tag: "gotcha",
            },
            {
              text: "Missing threads? Check sidebar filters (filter icon).",
            },
            {
              text: "Worktree code not running? It is a separate directory with only committed files; run setup scripts or sync/check out needed changes.",
            },
            {
              text: "Shared local environment missing? Ensure .codex is at project root (or correct monorepo folder).",
            },
            {
              text: "macOS may ask extra filesystem permissions for folders like Music, Downloads, or Desktop.",
            },
            {
              text: "Picked wrong Local/Worktree/Cloud target? Cancel run, then press Up Arrow to restore prompt.",
              tag: "tip",
            },
            {
              text: "Too many automation worktrees? Archive runs you do not need and avoid pinning unless required.",
            },
            {
              text: "App logs: ~/Library/Logs/com.openai.codex/YYYY/MM/DD",
              tag: "path",
            },
            {
              text: "Session transcripts: $CODEX_HOME/sessions (default ~/.codex/sessions)",
              tag: "path",
            },
          ],
        },
      ],
    },
  ],
];

export const columnMiniCards: ColumnMiniCard[] = [
  {
    id: "quick-start",
    title: "Quick Start (2 mins)",
    bullets: [
      "Open your project folder (Cmd+O).",
      "Start a new thread (Cmd+N) and state one clear goal.",
      "Pick Local for direct edits or Worktree for safer isolation.",
      "Review diff, keep good chunks, then commit and push.",
    ],
  },
  {
    id: "safety-checklist",
    title: "Safety Checklist",
    bullets: [
      "Use Last turn changes when you only want Codex edits.",
      "Confirm sandbox/access mode before automations run.",
      "Test automation prompts manually before scheduling.",
      "Avoid full access unless the task truly requires it.",
    ],
  },
  {
    id: "paths-recovery",
    title: "Paths + Recovery",
    bullets: [
      "Worktrees live under $CODEX_HOME/worktrees.",
      "Shared team setup is in project-root .codex.",
      "Wrong mode target? Cancel run, then press Up Arrow.",
      "Logs: ~/Library/Logs/com.openai.codex/YYYY/MM/DD.",
    ],
  },
];

export const sourceLinks: SourceLink[] = [
  { label: "Launch", href: "https://openai.com/index/introducing-codex/" },
  {
    label: "App Features",
    href: "https://developers.openai.com/codex/app/features/",
  },
  {
    label: "Settings",
    href: "https://developers.openai.com/codex/app/settings/",
  },
  {
    label: "Review",
    href: "https://developers.openai.com/codex/app/review/",
  },
  {
    label: "Automations",
    href: "https://developers.openai.com/codex/app/automations/",
  },
  {
    label: "Worktrees",
    href: "https://developers.openai.com/codex/app/worktrees/",
  },
  {
    label: "Local Env",
    href: "https://developers.openai.com/codex/app/local-environments/",
  },
  {
    label: "Commands",
    href: "https://developers.openai.com/codex/app/commands/",
  },
  {
    label: "Changelog",
    href: "https://developers.openai.com/codex/changelog/",
  },
];
