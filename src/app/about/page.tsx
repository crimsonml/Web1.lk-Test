import {
  Button,
  Column,
  Flex,
  Heading,
  Icon,
  IconButton,
  SmartImage,
  Text,
  RevealFx,
  Badge,
  Card,
  Grid,
} from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import styles from "@/components/about/about.module.scss";
import { person, about, social } from "@/app/resources/content";
import "@/components/about/about-animations.css";

export async function generateMetadata() {
  const title = about.title;
  const description = about.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/about`,
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

export default function About() {
  return (
    <Column maxWidth="m" horizontal="center">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: person.name,
            description: about.intro.description,
            url: `https://${baseURL}/about`,
            image: `${baseURL}/images/${person.avatar}`,
            sameAs: social
              .filter((item) => item.link && !item.link.startsWith("mailto:"))
              .map((item) => item.link),
          }),
        }}
      />

      {/* Simplified hero section */}
      <Flex
        fillWidth
        style={{
          position: "relative",
          marginTop: "var(--spacing-xl)",
          marginBottom: "var(--spacing-xl)",
          borderBottom: "1px solid var(--color-neutral-weak)",
          paddingBottom: "var(--spacing-xl)",
        }}
      >
        <Flex
          direction="column"
          gap="xl"
          paddingY="l"
          paddingX={{ base: "m", tablet: "l" }}
          fillWidth
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            position: "relative",
          }}
        >
          <RevealFx translateY="8">
            <Heading
              variant="display-strong-xl"
              align="center"
              marginBottom="m"
            >
              About Web1.LK
            </Heading>
          </RevealFx>

          <RevealFx translateY="8" delay={0.1}>
            <Text
              variant="display-default-xs"
              onBackground="neutral-medium"
              align="center"
              marginBottom="l"
              style={{
                maxWidth: "800px",
                margin: "0 auto",
              }}
            >
              Your trusted partner in enterprise web development since 2015
            </Text>
          </RevealFx>

          {/* Social media links only */}
          {social.length > 0 && (
            <RevealFx translateY="8" delay={0.2}>
              <Flex gap="16" wrap horizontal="center" fillWidth>
                {social.map(
                  (item) =>
                    item.link && (
                      <IconButton
                        key={item.name}
                        href={item.link}
                        icon={item.icon}
                        variant="ghost"
                        size="l"
                        tooltip={item.name}
                      />
                    ),
                )}
              </Flex>
            </RevealFx>
          )}
        </Flex>
      </Flex>

      {/* Main content container */}
      <Flex fillWidth mobileDirection="column" horizontal="center">
        <Column fillWidth maxWidth="900px" paddingX="m">
          {/* Introduction section - simplified */}
          {about.intro.display && (
            <RevealFx translateY="12" delay={0.2}>
              <Flex
                fillWidth
                direction="column"
                paddingY="l"
                marginBottom="xl"
              >
                <Heading
                  as="h2"
                  id={about.intro.title}
                  variant="display-strong-s"
                  marginBottom="l"
                  style={{
                    position: "relative",
                    color: "var(--color-brand-strong)",
                    borderBottom: "1px solid var(--color-neutral-weak)",
                    paddingBottom: "var(--spacing-s)",
                  }}
                >
                  {about.intro.title}
                </Heading>

                <Flex direction="column" gap="m">
                  <Text
                    variant="body-default-l"
                    style={{
                      lineHeight: "1.8",
                      color: "var(--color-neutral-strong)",
                    }}
                  >
                    {about.intro.description}
                  </Text>

                  {/* Mission/Vision simplified into two columns */}
                  <Grid
                    columns="2"
                    tabletColumns="2"
                    mobileColumns="1"
                    gap="24"
                    marginTop="l"
                  >
                    <Flex 
                      direction="column" 
                      gap="s" 
                      padding="l"
                      background="surface-weak"
                      border="neutral-weak"
                      radius="m"
                    >
                      <Heading as="h3" variant="heading-strong-m" style={{ color: "var(--color-brand-strong)" }}>
                        Our Mission
                      </Heading>
                      <Text variant="body-default-m" style={{ lineHeight: "1.7" }}>
                        To empower businesses through innovative web solutions that drive sustainable growth, 
                        optimize operations, and catalyze digital transformation in an evolving marketplace.
                      </Text>
                    </Flex>

                    <Flex 
                      direction="column" 
                      gap="s"
                      padding="l"
                      background="surface-weak"
                      border="neutral-weak"
                      radius="m"
                    >
                      <Heading as="h3" variant="heading-strong-m" style={{ color: "var(--color-brand-strong)" }}>
                        Our Vision
                      </Heading>
                      <Text variant="body-default-m" style={{ lineHeight: "1.7" }}>
                        To be recognized globally as the premier architect of enterprise-grade web solutions, 
                        setting new standards for technical excellence, innovation, and client success.
                      </Text>
                    </Flex>
                  </Grid>

                  {/* Core values section - adding a new section */}
                  <Flex
                    direction="column"
                    gap="m"
                    marginTop="xl"
                  >
                    <Heading as="h3" variant="heading-strong-m" style={{ color: "var(--color-brand-strong)" }}>
                      Our Core Values
                    </Heading>
                    
                    <Grid
                      columns="3"
                      tabletColumns="2"
                      mobileColumns="1"
                      gap="16"
                      marginTop="m"
                    >
                      <Flex direction="column" gap="xs" padding="m" border="neutral-weak" radius="s">
                        <Text variant="heading-strong-s">Innovation</Text>
                        <Text variant="body-default-s">Constantly pushing boundaries to deliver cutting-edge solutions.</Text>
                      </Flex>
                      
                      <Flex direction="column" gap="xs" padding="m" border="neutral-weak" radius="s">
                        <Text variant="heading-strong-s">Excellence</Text>
                        <Text variant="body-default-s">Maintaining the highest standards in every aspect of our work.</Text>
                      </Flex>
                      
                      <Flex direction="column" gap="xs" padding="m" border="neutral-weak" radius="s">
                        <Text variant="heading-strong-s">Integrity</Text>
                        <Text variant="body-default-s">Building relationships based on trust, transparency, and honesty.</Text>
                      </Flex>
                      
                      <Flex direction="column" gap="xs" padding="m" border="neutral-weak" radius="s">
                        <Text variant="heading-strong-s">Collaboration</Text>
                        <Text variant="body-default-s">Working together with clients to achieve shared objectives.</Text>
                      </Flex>
                      
                      <Flex direction="column" gap="xs" padding="m" border="neutral-weak" radius="s">
                        <Text variant="heading-strong-s">Results-Driven</Text>
                        <Text variant="body-default-s">Focusing on measurable outcomes that drive business success.</Text>
                      </Flex>
                      
                      <Flex direction="column" gap="xs" padding="m" border="neutral-weak" radius="s">
                        <Text variant="heading-strong-s">Adaptability</Text>
                        <Text variant="body-default-s">Embracing change and evolving with the technology landscape.</Text>
                      </Flex>
                    </Grid>
                  </Flex>
                </Flex>
              </Flex>
            </RevealFx>
          )}

          {/* Simple Journey Timeline */}
          {about.work.display && (
            <RevealFx translateY="12" delay={0.2}>
              <Flex
                fillWidth
                direction="column"
                paddingY="l"
                marginBottom="xl"
              >
                <Heading
                  as="h2"
                  id={about.work.title}
                  variant="display-strong-s"
                  marginBottom="s"
                  style={{
                    position: "relative",
                    color: "var(--color-brand-strong)",
                    borderBottom: "1px solid var(--color-neutral-weak)",
                    paddingBottom: "var(--spacing-s)",
                  }}
                >
                  {about.work.title}
                </Heading>
                
                <Text variant="body-default-m" marginBottom="l">
                  {about.work.description}
                </Text>

                <Flex direction="column" gap="m">
                  {about.work.milestones && about.work.milestones.map((milestone, index) => (
                    <RevealFx
                      key={`milestone-${index}`}
                      translateY="8"
                      delay={0.1 * index}
                    >
                      <Flex 
                        fillWidth 
                        marginBottom="s" 
                        gap="m"
                        paddingY="m"
                        paddingX="l"
                        background="surface-weak"
                        border="neutral-weak"
                        radius="m"
                        style={{
                          position: "relative",
                        }}
                      >
                        <Badge variant="primary">
                          {milestone.year}
                        </Badge>
                        
                        <Flex direction="column" gap="2">
                          <Text variant="heading-strong-m" style={{ color: "var(--color-brand-strong)" }}>
                            {milestone.title}
                          </Text>
                          <Text variant="body-default-m">
                            {milestone.description}
                          </Text>
                        </Flex>
                      </Flex>
                    </RevealFx>
                  ))}
                </Flex>
              </Flex>
            </RevealFx>
          )}

          {/* Education/Studies section - simplified */}
          {about.studies.display && (
            <RevealFx translateY="12" delay={0.3}>
              <Flex
                fillWidth
                direction="column"
                paddingY="l"
                marginBottom="xl"
              >
                <Heading
                  as="h2"
                  id={about.studies.title}
                  variant="display-strong-s"
                  marginBottom="l"
                  style={{
                    position: "relative",
                    color: "var(--color-brand-strong)",
                    borderBottom: "1px solid var(--color-neutral-weak)",
                    paddingBottom: "var(--spacing-s)",
                  }}
                >
                  {about.studies.title}
                </Heading>

                <Grid
                  columns="2"
                  tabletColumns="2"
                  mobileColumns="1"
                  gap="24"
                >
                  {about.studies.institutions.map((institution, index) => (
                    <RevealFx
                      key={`${institution.name}-${index}`}
                      translateY="8"
                      delay={0.1 * index}
                    >
                      <Flex direction="column" gap="s">
                        <Text
                          id={institution.name}
                          variant="heading-strong-m"
                          style={{
                            color: "var(--color-brand-strong)",
                          }}
                        >
                          {institution.name}
                        </Text>

                        <Text
                          variant="body-default-m"
                          onBackground="neutral-medium"
                        >
                          {institution.description}
                        </Text>
                      </Flex>
                    </RevealFx>
                  ))}
                </Grid>
              </Flex>
            </RevealFx>
          )}

          {/* Technical Skills section - modernized without icons */}
          {about.technical.display && (
            <RevealFx translateY="12" delay={0.4}>
              <Flex
                fillWidth
                direction="column"
                paddingY="l"
                marginBottom="xl"
              >
                <Heading
                  as="h2"
                  id={about.technical.title}
                  variant="display-strong-s"
                  marginBottom="s"
                  align="center"
                  style={{
                    position: "relative",
                    color: "var(--color-brand-strong)",
                  }}
                >
                  {about.technical.title}
                </Heading>

                {about.technical.subtitle && (
                  <Text
                    variant="body-default-m"
                    onBackground="neutral-medium"
                    align="center"
                    marginBottom="xl"
                    style={{
                      maxWidth: "700px",
                      margin: "0 auto 40px auto",
                    }}
                  >
                    {about.technical.subtitle}
                  </Text>
                )}

                <Grid columns="2" tabletColumns="1" mobileColumns="1" gap="32">
                  {about.technical.skills.map((skill, index) => (
                    <RevealFx
                      key={`${skill.title}-${index}`}
                      translateY="8"
                      delay={0.1 * index}
                    >
                      <Card
                        shadow="s"
                        padding="l"
                        radius="m"
                        border="neutral-weak"
                        background="surface-weak"
                        style={{
                          height: "100%",
                          transition: "all 0.3s ease",
                        }}
                        data-hover-shadow="m"
                        data-hover-border="brand-alpha-medium"
                        data-hover-transform="translateY(-4px)"
                      >
                        <Flex fillWidth direction="column" gap="m">
                          {/* Title */}
                          <Heading 
                            as="h3" 
                            variant="heading-strong-m" 
                            align="center"
                            style={{
                              color: "var(--color-brand-strong)",
                              marginBottom: "8px",
                              borderBottom: "1px solid var(--color-neutral-weak)",
                              paddingBottom: "12px",
                            }}
                          >
                            {skill.title}
                          </Heading>

                          {/* Description */}
                          <Text
                            variant="body-default-m"
                            align="center"
                            style={{
                              lineHeight: "1.7",
                            }}
                          >
                            {skill.description}
                          </Text>

                          {/* Technology tags */}
                          {skill.technologies && skill.technologies.length > 0 && (
                            <Flex
                              wrap
                              horizontal="center"
                              gap="8"
                              marginTop="m"
                            >
                              {skill.technologies.map((tech, idx) => (
                                <Badge 
                                  key={idx}
                                  variant="neutral" 
                                  size="s"
                                  style={{
                                    margin: "4px",
                                  }}
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </Flex>
                          )}
                        </Flex>
                      </Card>
                    </RevealFx>
                  ))}
                </Grid>
              </Flex>
            </RevealFx>
          )}

          {/* Simplified and elegant CTA section */}
          <RevealFx translateY="12" delay={0.4}>
            <Card
              shadow="m"
              radius="l"
              padding="xl"
              border="brand-weak"
              style={{
                marginY: "var(--spacing-xl)",
                overflow: "hidden",
                position: "relative",
                background: "linear-gradient(135deg, var(--color-surface) 0%, var(--color-brand-alpha-weak) 100%)"
              }}
            >
              {/* Decorative accent line at the top */}
              <div 
                style={{ 
                  position: "absolute", 
                  top: 0, 
                  left: 0, 
                  right: 0, 
                  height: "4px", 
                  background: "linear-gradient(90deg, var(--color-brand-medium) 0%, var(--color-brand-strong) 100%)"
                }}
              />
              
              <Flex direction="column" gap="l" align="center">
                <Heading
                  variant="display-strong-m"
                  align="center"
                  style={{
                    color: "var(--color-neutral-strong)",
                    maxWidth: "700px",
                  }}
                >
                  Let's Discuss Your Project
                </Heading>
                
                <Text
                  variant="body-default-l"
                  align="center"
                  style={{
                    maxWidth: "600px",
                    lineHeight: "1.7",
                    color: "var(--color-neutral-medium)",
                  }}
                >
                  Schedule a free consultation with our team and discover how we can help transform your business with our enterprise-grade web solutions.
                </Text>
                
                <Button 
                  variant="primary" 
                  size="l" 
                  href="/contact" 
                  arrowIcon
                  style={{
                    marginTop: "var(--spacing-m)",
                    minWidth: "220px"
                  }}
                >
                  Book Consultation
                </Button>
              </Flex>
            </Card>
          </RevealFx>
        </Column>
      </Flex>
    </Column>
  );
}
