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
                    <Flex direction="column" gap="s">
                      <Heading as="h3" variant="heading-strong-m">
                        Our Mission
                      </Heading>
                      <Text variant="body-default-m">
                        To empower businesses through innovative web solutions
                        that drive growth and digital transformation.
                      </Text>
                    </Flex>

                    <Flex direction="column" gap="s">
                      <Heading as="h3" variant="heading-strong-m">
                        Our Vision
                      </Heading>
                      <Text variant="body-default-m">
                        To be the leading provider of enterprise-grade web
                        solutions, recognized for excellence in innovation and
                        customer success.
                      </Text>
                    </Flex>
                  </Grid>
                </Flex>
              </Flex>
            </RevealFx>
          )}

          {/* Work Experience section - simplified */}
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
                  marginBottom="l"
                  style={{
                    position: "relative",
                    color: "var(--color-brand-strong)",
                    borderBottom: "1px solid var(--color-neutral-weak)",
                    paddingBottom: "var(--spacing-s)",
                  }}
                >
                  {about.work.title}
                </Heading>

                <Flex direction="column" gap="xl">
                  {about.work.experiences.map((experience, index) => (
                    <RevealFx
                      key={`${experience.company}-${experience.role}-${index}`}
                      translateY="8"
                      delay={0.1 * index}
                    >
                      <Card
                        shadow="s"
                        style={{
                          borderRadius: "8px",
                          border: "1px solid var(--color-neutral-weak)",
                          overflow: "hidden",
                        }}
                      >
                        <Flex fillWidth direction="column" padding="l">
                          <Flex
                            fillWidth
                            horizontal="space-between"
                            vertical="center"
                            marginBottom="m"
                          >
                            <Text
                              id={experience.company}
                              variant="heading-strong-l"
                              style={{
                                color: "var(--color-brand-strong)",
                              }}
                            >
                              {experience.company}
                            </Text>
                            <Badge variant="neutral">{experience.timeframe}</Badge>
                          </Flex>

                          <Text
                            variant="heading-default-m"
                            onBackground="brand-medium"
                            marginBottom="l"
                            style={{
                              fontWeight: 600,
                            }}
                          >
                            {experience.role}
                          </Text>

                          <Column
                            as="ul"
                            gap="16"
                            style={{ paddingLeft: "20px" }}
                          >
                            {experience.achievements.map(
                              (achievement: JSX.Element, index: number) => (
                                <Text
                                  as="li"
                                  variant="body-default-m"
                                  key={`${experience.company}-${index}`}
                                  style={{
                                    lineHeight: "1.7",
                                  }}
                                >
                                  {achievement}
                                </Text>
                              ),
                            )}
                          </Column>

                          {experience.images.length > 0 && (
                            <Grid
                              columns="3"
                              tabletColumns="2"
                              mobileColumns="1"
                              gap="16"
                              marginTop="l"
                            >
                              {experience.images.map((image, index) => (
                                <Flex
                                  key={index}
                                  style={{
                                    borderRadius: "8px",
                                    overflow: "hidden",
                                  }}
                                >
                                  <SmartImage
                                    enlarge
                                    radius="s"
                                    //@ts-ignore
                                    sizes={image.width.toString()}
                                    //@ts-ignore
                                    alt={image.alt}
                                    //@ts-ignore
                                    src={image.src}
                                    style={{
                                      width: "100%",
                                      height: "auto",
                                    }}
                                  />
                                </Flex>
                              ))}
                            </Grid>
                          )}
                        </Flex>
                      </Card>
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

          {/* Technical Skills section - simplified without progress bars */}
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
                  marginBottom="l"
                  style={{
                    position: "relative",
                    color: "var(--color-brand-strong)",
                    borderBottom: "1px solid var(--color-neutral-weak)",
                    paddingBottom: "var(--spacing-s)",
                  }}
                >
                  {about.technical.title}
                </Heading>

                <Flex fillWidth direction="column" gap="xl">
                  {about.technical.skills.map((skill, index) => (
                    <RevealFx
                      key={`${skill.title}-${index}`}
                      translateY="8"
                      delay={0.1 * index}
                    >
                      <Flex fillWidth direction="column" gap="m">
                        <Text
                          variant="heading-strong-m"
                          style={{
                            color: "var(--color-brand-strong)",
                          }}
                        >
                          {skill.title}
                        </Text>

                        <Text
                          variant="body-default-m"
                          onBackground="neutral-medium"
                          style={{
                            lineHeight: "1.7",
                          }}
                        >
                          {skill.description}
                        </Text>

                        {/* Technology logos/icons in a simpler grid */}
                        {skill.images && skill.images.length > 0 && (
                          <Grid
                            columns="6"
                            tabletColumns="4"
                            mobileColumns="3"
                            gap="16"
                            marginTop="s"
                          >
                            {skill.images.map((image, index) => (
                              <Flex
                                key={index}
                                horizontal="center"
                                style={{
                                  padding: "12px",
                                  border: "1px solid var(--color-neutral-weak)",
                                  borderRadius: "4px",
                                }}
                              >
                                <SmartImage
                                  //@ts-ignore
                                  alt={image.alt}
                                  //@ts-ignore
                                  src={image.src}
                                  style={{
                                    maxWidth: "100%",
                                    maxHeight: "36px",
                                  }}
                                />
                              </Flex>
                            ))}
                          </Grid>
                        )}
                      </Flex>
                    </RevealFx>
                  ))}
                </Flex>
              </Flex>
            </RevealFx>
          )}

          {/* Simple CTA section */}
          <RevealFx translateY="12" delay={0.4}>
            <Flex
              fillWidth
              direction="column"
              align="center"
              gap="l"
              paddingY="xl"
              marginY="l"
              background="surface-weak"
              border="neutral-weak"
              radius="m"
            >
              <Heading
                variant="display-strong-s"
                align="center"
                style={{
                  maxWidth: "700px",
                }}
              >
                Ready to discuss your project?
              </Heading>

              <Button variant="primary" size="l" href="/contact" arrowIcon>
                Contact Us
              </Button>
            </Flex>
          </RevealFx>
        </Column>
      </Flex>
    </Column>
  );
}
