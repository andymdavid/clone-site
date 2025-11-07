import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Container, Section } from "@/components/ui";
import { blogPosts } from "@/lib/data/blog-posts";

interface BlogPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: BlogPageProps): Metadata {
  const post = blogPosts.find((entry) => entry.slug === params.slug);
  if (!post) return {};
  return {
    title: `${post.title} — Clone Blog`,
    description: post.description,
  };
}

export default function BlogPostPage({ params }: BlogPageProps) {
  const post = blogPosts.find((entry) => entry.slug === params.slug);
  if (!post) {
    notFound();
  }

  return (
    <Section>
      <Container className="mx-auto max-w-3xl space-y-8">
        <div className="space-y-3 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-muted">{post.date}</p>
          <h1 className="text-4xl font-semibold">{post.title}</h1>
          <p className="text-muted">By {post.author}</p>
        </div>
        <article className="space-y-4 text-base leading-relaxed text-white/90">
          {post.body.map((paragraph, index) => (
            <p key={`${post.slug}-${index}`}>{paragraph}</p>
          ))}
        </article>
      </Container>
    </Section>
  );
}
