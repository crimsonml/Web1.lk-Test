import { Column, Flex, Heading, Text, Grid, Card, SmartLink, Button } from "@/once-ui/components";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";
import { baseURL } from "@/app/resources";
import { blog, person, newsletter } from "@/app/resources/content";

export async function generateMetadata() {
  const title = blog.title;
  const description = blog.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/blog`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Blog() {
  const categories = [
    {
      title: "Industry Insights & Trends",
      description: "Latest developments and future predictions for enterprise web solutions",
      posts: [
        { title: "The Future of Web Applications in 2025 and Beyond", slug: "future-web-applications-2025" },
        { title: "How Digital Transformation is Reshaping Sri Lankan Businesses", slug: "digital-transformation-sri-lanka" },
        { title: "5 Technology Trends That Will Define Enterprise Solutions This Year", slug: "technology-trends-enterprise-solutions" }
      ]
    },
    {
      title: "Solution-Specific Content",
      description: "Detailed analysis of enterprise web solutions and their implementation",
      posts: [
        { title: "POS Systems: Cloud-Based vs. On-Premises Solutions Compared", slug: "pos-systems-comparison" },
        { title: "Building SaaS Applications That Scale: Architecture Decisions That Matter", slug: "scaling-saas-applications" },
        { title: "API Integration Best Practices for Enterprise Applications", slug: "api-integration-best-practices" }
      ]
    },
    {
      title: "Technical Tutorials & Education",
      description: "Guides and insights for implementing technical solutions in your business",
      posts: [
        { title: "A Beginner's Guide to Understanding API Integration", slug: "beginners-guide-api-integration" },
        { title: "Securing Your Web Application: Essential Steps Every Business Should Take", slug: "securing-web-applications" },
        { title: "Database Selection Guide: Finding the Right Solution for Your Business Needs", slug: "database-selection-guide" }
      ]
    },
    {
      title: "Business Value & ROI",
      description: "Insights on maximizing return on investment for your technology solutions",
      posts: [
        { title: "Calculating ROI on Custom Software Development Projects", slug: "calculating-roi-software-development" },
        { title: "Hidden Costs of Delaying Digital Transformation", slug: "hidden-costs-digital-transformation" },
        { title: "How the Right POS System Reduces Operational Costs: Real Numbers", slug: "pos-system-operational-costs" }
      ]
    }
  ];

  return (
    <Column maxWidth="s">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            headline: blog.title,
            description: blog.description,
            url: `https://${baseURL}/blog`,
            image: `${baseURL}/og?title=${encodeURIComponent(blog.title)}`,
            author: {
              "@type": "Person",
              name: person.name,
              image: {
                "@type": "ImageObject",
                url: `${baseURL}${person.avatar}`,
              },
            },
          }),
        }}
      />
      
      {/* Blog Header */}
      <Flex direction="column" gap="m" marginBottom="xl">
        <Heading variant="display-strong-s">{blog.title}</Heading>
        <Text variant="body-default-l">{blog.description}</Text>
      </Flex>

      {/* Featured Posts - Top Section */}
      <Heading variant="heading-strong-m" marginBottom="m">Featured Articles</Heading>
      <Column fillWidth flex={1} marginBottom="xl">
        <Posts range={[1, 3]} thumbnail />
      </Column>

      {/* Blog Categories */}
      {categories.map((category, index) => (
        <Column key={index} fillWidth flex={1} marginBottom="xl">
          <Flex direction="column" gap="m" marginBottom="l">
            <Heading variant="heading-strong-m">{category.title}</Heading>
            <Text variant="body-default-m">{category.description}</Text>
          </Flex>
          
          <Grid columns="2" mobileColumns="1" fillWidth gap="m">
            {category.posts.map((post, postIndex) => (
              <Card key={postIndex} padding="m">
                <Flex direction="column" gap="s">
                  <Heading variant="heading-strong-s">{post.title}</Heading>
                  <SmartLink href={`/blog/${post.slug}`}>
                    <Button variant="tertiary">Read More</Button>
                  </SmartLink>
                </Flex>
              </Card>
            ))}
          </Grid>
        </Column>
      ))}

      {/* Newsletter Subscription */}
      {newsletter.display && (
        <Column fillWidth flex={1} marginTop="xl" marginBottom="xl">
          <Card padding="l">
            <Mailchimp newsletter={newsletter} />
          </Card>
        </Column>
      )}
    </Column>
  );
}
