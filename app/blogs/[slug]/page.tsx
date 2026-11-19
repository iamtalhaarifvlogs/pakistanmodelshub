import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogArticles } from '../page';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogArticles.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogArticles.find((item) => item.slug === slug);

  if (!post) {
    return {
      title: 'Article Not Found | Pakistan Models Hub',
    };
  }

  return {
    title: `${post.title} | Pakistan Models Hub`,
    description: post.excerpt,
    alternates: {
      canonical: `https://pakistanmodelshub.com/blogs/${post.slug}`,
    },
  };
}

export default async function BlogSlugPage({ params }: Props) {
  const { slug } = await params;
  const post = blogArticles.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main
      style={{
        minHeight: '100vh',
        backgroundColor: '#09090b',
        backgroundImage:
          'radial-gradient(circle at 50% 0%, rgba(234, 179, 8, 0.1) 0%, rgba(9, 9, 11, 1) 55%)',
        color: '#f4f4f5',
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        padding: '56px 20px 96px',
      }}
    >
      <style>{`
        .pmh-post-wrap { max-width: 820px; margin: 0 auto; }
        .pmh-back { display: inline-flex; align-items: center; gap: 8px; color: #facc15; text-decoration: none; font-size: 13.5px; font-weight: 700; margin-bottom: 24px; padding: 8px 14px; border-radius: 999px; background: rgba(250, 204, 21, 0.08); border: 1px solid rgba(250, 204, 21, 0.25); }
        .pmh-post-card { background: linear-gradient(180deg, rgba(24, 24, 27, 0.95) 0%, rgba(13, 13, 16, 0.99) 100%); border: 1px solid rgba(250, 204, 21, 0.24); border-radius: 18px; padding: clamp(24px, 4.5vw, 48px); box-shadow: 0 20px 50px rgba(0, 0, 0, 0.55); }
        .pmh-post-title { font-size: clamp(1.75rem, 4vw, 2.5rem); font-weight: 800; line-height: 1.2; color: #ffffff; margin: 14px 0; }
        .pmh-post-lead { font-size: 16px; line-height: 1.65; color: #d4d4d8; padding-bottom: 24px; margin-bottom: 28px; border-bottom: 1px solid rgba(250, 204, 21, 0.2); }
        .pmh-sec-title { font-size: 20px; font-weight: 700; color: #facc15; margin: 28px 0 10px; }
        .pmh-para { font-size: 15.5px; line-height: 1.75; color: #b4b4bc; margin: 0 0 18px; }
        .pmh-tag-row { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 28px; padding-top: 20px; border-top: 1px solid rgba(255, 255, 255, 0.08); }
        .pmh-tag { font-size: 11.5px; background: rgba(250, 204, 21, 0.09); border: 1px solid rgba(250, 204, 21, 0.24); color: #fde047; padding: 4px 10px; border-radius: 6px; }
        .pmh-box { margin-top: 36px; padding: 26px; border-radius: 14px; background: rgba(9, 9, 11, 0.92); border: 1px solid rgba(250, 204, 21, 0.3); display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 18px; }
        .pmh-cta-link { background-color: #facc15; color: #09090b; font-weight: 800; font-size: 14px; padding: 12px 24px; border-radius: 999px; text-decoration: none; white-space: nowrap; }
      `}</style>

      <div className="pmh-post-wrap">
        <Link href="/blogs" className="pmh-back">
          <span aria-hidden="true">←</span>
          <span>Back to Blog</span>
        </Link>

        <article className="pmh-post-card">
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '10px',
              fontSize: '12.5px',
              color: '#a1a1aa',
            }}
          >
            <span
              style={{
                color: '#facc15',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                background: 'rgba(250, 204, 21, 0.12)',
                padding: '4px 12px',
                borderRadius: '999px',
                border: '1px solid rgba(250, 204, 21, 0.3)',
              }}
            >
              {post.category}
            </span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>

          <h1 className="pmh-post-title">{post.title}</h1>
          <p className="pmh-post-lead">{post.excerpt}</p>

          <div>
            {post.sections.map((section, index) => (
              <div key={index}>
                {section.heading && <h2 className="pmh-sec-title">{section.heading}</h2>}
                {section.paragraphs.map((paragraph, pIndex) => (
                  <p key={pIndex} className="pmh-para">
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </div>

          <div className="pmh-tag-row">
            {post.keywords.map((keyword) => (
              <span key={keyword} className="pmh-tag">
                #{keyword}
              </span>
            ))}
          </div>

          <div className="pmh-box">
            <div style={{ maxWidth: '460px' }}>
              <h3 style={{ margin: '0 0 6px', fontSize: '18px', fontWeight: 700, color: '#ffffff' }}>
                24/7 Discreet Outcall Concierge
              </h3>
              <p style={{ margin: 0, fontSize: '14px', color: '#a1a1aa', lineHeight: 1.5 }}>
                Direct line +92 310 4441188 · Outcall 45–90 min across DHA, Clifton, Bahria Town &amp; major hotels.
              </p>
            </div>

            <a
              href="https://wa.me/923104441188"
              target="_blank"
              rel="noopener noreferrer"
              className="pmh-cta-link"
            >
              Book Now on WhatsApp
            </a>
          </div>
        </article>
      </div>
    </main>
  );
}

