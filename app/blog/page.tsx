import Link from "next/link";
import { Badge, Card, Container, Grid, Section } from "@/components/ui";
import { blogPosts } from "@/lib/data/blog-posts";

export const metadata = {
  title: "Blog — Clone",
};

export default function BlogPage() {
  const posts = [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1));
  return (
    <Section>
      <Container className="space-y-12">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-muted">Blog</p>
          <h1 className="mt-4 text-4xl font-semibold">Unlock AI insights with us</h1>
          <p className="mt-3 text-lg text-muted">
            Stay informed with the latest AI trends, strategies, and playbooks that drive innovation.
          </p>
        </div>
        <Grid className="grid-cols-1 gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <Card key={post.slug} className="h-full bg-surface/60">
              <Badge variant="outline" className="text-xs uppercase tracking-[0.3em]">
                {post.category}
              </Badge>
              <h3 className="mt-4 text-2xl font-semibold">{post.title}</h3>
              <p className="mt-2 text-sm text-muted">
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
                {" • "}
                {post.readingTime} min read
              </p>
              <p className="mt-3 text-muted">{post.description}</p>
              <Link className="mt-6 inline-flex text-sm font-semibold text-accent" href={`/blog/${post.slug}`}>
                Read article →
              </Link>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
