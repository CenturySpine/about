"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  BIRTH_DATE,
  calculateAge,
  content,
  contactEmail,
  networks,
  projectIcons,
  projectUrls,
  technicalEmail,
  type Locale,
  type NetworkKey,
} from "@/lib/content";
import {
  FacebookIcon,
  FeatherIcon,
  GithubIcon,
  InstagramIcon,
  KofiIcon,
  LinkedinIcon,
  MailIcon,
  StravaIcon,
} from "@/components/icons";
import { KofiButton } from "@/components/KofiButton";

const networkIcons: Record<NetworkKey, (props: { size?: number }) => React.ReactNode> = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  linkedin: LinkedinIcon,
  github: GithubIcon,
  kofi: KofiIcon,
  blog: FeatherIcon,
  strava: StravaIcon,
};

const otherLocale: Record<
  Locale,
  { locale: Locale; href: string; label: string; short: string }
> = {
  fr: { locale: "en", href: "/en", label: "English version", short: "en" },
  en: { locale: "fr", href: "/", label: "Version française", short: "fr" },
};

export function AboutView({ locale }: { locale: Locale }) {
  const [slideIndex, setSlideIndex] = useState(0);
  const [age, setAge] = useState<number | null>(null);

  useEffect(() => {
    setAge(calculateAge(BIRTH_DATE));
  }, []);

  const data = content[locale];
  const slide = data.carousel[slideIndex];
  const canPrev = slideIndex > 0;
  const canNext = slideIndex < data.carousel.length - 1;
  const other = otherLocale[locale];

  return (
    <div className="mx-auto max-w-xl px-4 py-4">
      <div className="relative rounded-[var(--radius-lg)] border border-[var(--border-default)] bg-[var(--bg-surface)] p-6 shadow-[var(--shadow-md)]">
        <Link
          href={other.href}
          aria-label={other.label}
          title={other.label}
          className="absolute top-3 right-3 text-xs font-bold tracking-wide text-[var(--text-tertiary)] !no-underline"
        >
          {other.short}
        </Link>

        <h1 className="text-center text-xl font-bold">
          {data.fullName}
          {age !== null ? `, ${age}${data.ageSuffix}` : ""}
        </h1>

        <div className="mt-4 flex justify-center">
          <div className="w-full max-w-sm">
            <div className="aspect-square overflow-hidden rounded-[var(--radius-md)] bg-[var(--bg-surface-sunken)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={slide.image}
                alt={slide.caption}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="mt-2 text-sm text-[var(--text-secondary)]">
              <p>{slide.caption}</p>
              {slide.linkLabel && slide.linkUrl && (
                <a href={slide.linkUrl} target="_blank" rel="noopener noreferrer">
                  {slide.linkLabel}
                </a>
              )}
            </div>

            <div className="mt-2 flex items-center justify-center gap-3">
              <button
                type="button"
                aria-label="Previous"
                disabled={!canPrev}
                onClick={() => setSlideIndex((i) => i - 1)}
                className="rounded-full px-2 py-1 text-lg disabled:opacity-30"
              >
                ‹
              </button>
              <span className="text-xs text-[var(--text-tertiary)]">
                {slideIndex + 1}/{data.carousel.length}
              </span>
              <button
                type="button"
                aria-label="Next"
                disabled={!canNext}
                onClick={() => setSlideIndex((i) => i + 1)}
                className="rounded-full px-2 py-1 text-lg disabled:opacity-30"
              >
                ›
              </button>
            </div>

            <div className="mt-1 flex justify-center gap-1.5">
              {data.carousel.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Slide ${index + 1}`}
                  onClick={() => setSlideIndex(index)}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    index === slideIndex
                      ? "bg-[var(--accent-secondary)]"
                      : "bg-[var(--ink-300)]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <p className="mt-6 leading-relaxed">{data.introText}</p>

        <Section title={data.projectsTitle} headerRight={<KofiButton />}>
          <Panel>
            <ul className="flex flex-col gap-3">
              {data.projects.map((project) => (
                <li key={project.key}>
                  <a
                    href={projectUrls[project.key]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 !text-inherit !no-underline"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={projectIcons[project.key]}
                      alt=""
                      width={32}
                      height={32}
                      className="mt-0.5 h-8 w-8 shrink-0 rounded-[var(--radius-sm)]"
                    />
                    <span className="flex flex-col">
                      <span className="font-semibold text-[var(--text-primary)]">
                        {project.name}
                      </span>
                      <span className="text-sm text-[var(--text-secondary)]">
                        {project.description}
                      </span>
                      <span className="text-sm text-[var(--text-link)]">
                        {projectUrls[project.key]}
                      </span>
                    </span>
                  </a>
                  {project.collaborator && (
                    <p className="mt-1.5 ml-11 flex items-center gap-1 text-xs font-medium text-[var(--text-secondary)]">
                      {project.collaborator.text}{" "}
                      <a
                        href={project.collaborator.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--accent-secondary)] underline"
                      >
                        {project.collaborator.name}
                      </a>
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </Panel>
        </Section>

        <Section title={data.passionsTitle}>
          <div className="flex flex-wrap gap-2">
            {data.passions.map((passion) => (
              <span
                key={passion}
                className="rounded-[var(--radius-pill)] border border-[var(--border-subtle)] bg-[var(--bg-panel)] px-3 py-1 text-sm font-medium text-[var(--text-primary)]"
              >
                {passion}
              </span>
            ))}
          </div>
        </Section>

        <Section title={data.networksTitle}>
          <Panel>
            <ul className="flex flex-col gap-3">
              {networks.map((network) => {
                const NetworkIcon = networkIcons[network.key];
                return (
                  <li key={network.label}>
                    <a
                      href={network.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 !text-inherit !no-underline"
                    >
                      <span className="mt-0.5 shrink-0 text-[var(--text-primary)]">
                        <NetworkIcon size={20} />
                      </span>
                      <span className="flex flex-col">
                        <span className="font-semibold text-[var(--text-primary)]">
                          {network.label}
                        </span>
                        <span className="text-sm text-[var(--text-link)]">{network.url}</span>
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </Panel>
        </Section>

        <Section title={data.contactTitle}>
          <Panel>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 shrink-0 text-[var(--text-primary)]">
                  <MailIcon size={20} />
                </span>
                <span className="flex flex-col">
                  <span className="font-semibold text-[var(--text-primary)]">
                    {data.contactPersoLabel}
                  </span>
                  <a href={`mailto:${contactEmail}`} className="text-sm text-[var(--text-link)]">
                    {contactEmail}
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 shrink-0 text-[var(--text-primary)]">
                  <MailIcon size={20} />
                </span>
                <span className="flex flex-col">
                  <span className="font-semibold text-[var(--text-primary)]">
                    {data.contactTechLabel}
                  </span>
                  <a href={`mailto:${technicalEmail}`} className="text-sm text-[var(--text-link)]">
                    {technicalEmail}
                  </a>
                </span>
              </li>
            </ul>
          </Panel>
        </Section>

        <Section title={data.quotesTitle}>
          <Panel>
            <div className="flex flex-col gap-3">
              {data.quotes.map((quote) => (
                <p key={quote} className="text-sm italic text-[var(--text-secondary)]">
                  {quote}
                </p>
              ))}
            </div>
          </Panel>
        </Section>
      </div>
    </div>
  );
}

function Section({
  title,
  headerRight,
  children,
}: {
  title: string;
  headerRight?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="relative mt-6">
      <h2 className="mb-2 text-sm font-bold tracking-[0.02em] uppercase text-[var(--text-secondary)]">
        {title}
      </h2>
      {headerRight && <div className="absolute top-2.5 right-[21px]">{headerRight}</div>}
      {children}
    </div>
  );
}

function Panel({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-panel)] p-4">
      {children}
    </div>
  );
}
